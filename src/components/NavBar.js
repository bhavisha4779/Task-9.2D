import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        window.location.href = "/login";
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  // Common button style
  const buttonStyle = {
    marginRight: "15px",
    padding: "8px 18px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  // We'll use React state for hover effect if you want, or keep it simple with CSS later.

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        borderBottom: "1px solid #ccc",
        backgroundColor: "#f9f9f9",
        fontSize: "18px",
        fontWeight: "600",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Logo */}
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <strong style={{ fontSize: "24px" }}>DEV@Deakin</strong>
        </Link>
      </div>

      {/* Navigation and actions */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Search..."
          style={{
            marginRight: "15px",
            padding: "8px 12px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            width: "200px",
          }}
        />

        <button
          onClick={() => navigate("/post")}
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
        >
          Post
        </button>

        <Link to="/plans" style={{ textDecoration: "none" }}>
          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
          >
            Plans
          </button>
        </Link>

        {isLoggedIn ? (
          <button
            onClick={handleSignOut}
            style={{
              ...buttonStyle,
              backgroundColor: "#dc3545",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#a71d2a")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#dc3545")}
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button
              style={buttonStyle}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
