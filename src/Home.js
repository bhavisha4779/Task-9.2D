import HeroImage from "./components/HeroImage";
import FeaturedSection from "./components/FeaturedSection";
import Footer from "./components/Footer";

import { articles } from "./data/articles";
import { tutorials } from "./data/tutorials";

function Home() {
  return (
    <div>
      <HeroImage />
      <FeaturedSection title="Featured Articles" items={articles} />
      <FeaturedSection title="Featured Tutorials" items={tutorials} />
      <Footer />
    </div>
  );
}

export default Home;