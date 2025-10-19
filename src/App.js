import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import NavBar from "./components/NavBar";
import Plans from "./Plans";
import Payment from "./Payment";
import Post from "./Post";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

       
        <Route path="/plans" element={<Plans />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
