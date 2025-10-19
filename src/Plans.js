import React from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css"; // you can keep or remove this if unused

export default function Plans() {
  const navigate = useNavigate();

  const cardStyle = {
    border: "1px solid #bbb",
    borderRadius: "12px",
    padding: "30px",
    width: "280px",
    backgroundColor: "#fff",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginTop: "40px",
    flexWrap: "wrap",
  };

  const buttonStyleFree = {
    padding: "12px 25px",
    fontSize: "1.1rem",
    borderRadius: "6px",
    border: "1px solid #555",
    backgroundColor: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const buttonStylePremium = {
    padding: "12px 25px",
    fontSize: "1.1rem",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "0 15px", backgroundColor: "#f9fafb", minHeight: "80vh", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h1 style={{ fontSize: "2.6rem", fontWeight: "700" }}>Choose Your Plan</h1>
      <div style={containerStyle}>
        <div
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 3px 8px rgba(0,0,0,0.1)";
          }}
          onClick={() => alert("You’re already on Free Plan!")}
        >
          <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>Free Plan</h3>
          <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "30px" }}>
            Access basic features
          </p>
          <button
            style={buttonStyleFree}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f2f2f2")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
          >
            Select
          </button>
        </div>

        <div
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 3px 8px rgba(0,0,0,0.1)";
          }}
        >
          <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>Premium Plan</h3>
          <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "30px" }}>
            Get customization, themes & analytics
          </p>
          <button
            style={buttonStylePremium}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
            onClick={() => navigate("/payment")}
          >
            Go Premium
          </button>
        </div>
      </div>
    </div>
  );
}
