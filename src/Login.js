import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import "./Form.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/home"))
      .catch(() => alert("Login failed"));
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p>Don’t have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
}

export default Login;
