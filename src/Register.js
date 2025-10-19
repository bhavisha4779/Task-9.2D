import { useState } from "react";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import "./Form.css";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCred.user.uid), {
        firstName,
        lastName,
        email
      });
      navigate("/");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>First Name</label>
        <input type="text" placeholder="Enter your first name" onChange={(e) => setFirstName(e.target.value)} required />

        <label>Last Name</label>
        <input type="text" placeholder="Enter your last name" onChange={(e) => setLastName(e.target.value)} required />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required />

        <label>Password</label>
        <input type="password" placeholder="Create a password" onChange={(e) => setPassword(e.target.value)} required />

        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm your password" onChange={(e) => setConfirmPassword(e.target.value)} required />

        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/">Login here</Link></p>
    </div>
  );
}

export default Register;

