import CardItem from "./CardItem";

function FeaturedSection({ title, items }) {
  return (
    <section style={{ margin: "30px 0" }}>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {items.map(item => <CardItem key={item.id} {...item} />)}
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button>See all {title.toLowerCase()}</button>
      </div>
    </section>
  );
}
export default FeaturedSection;

