import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#f5f5f5", padding: "40px 20px" }}>
      {/* Newsletter Signup */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h3 style={{ marginBottom: "10px" }}>SIGN UP FOR OUR DAILY INSIDER</h3>
        <input
          type="email"
          placeholder="Enter your email"
          style={{ padding: "8px", width: "250px" }}
        />
        <button style={{ padding: "8px 15px", marginLeft: "8px" }}>
          Subscribe
        </button>
      </div>

      {/* Main Footer Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "30px",
          textAlign: "left",
          flexWrap: "wrap",
        }}
      >
        {/* Explore */}
        <div>
          <h4><b>Explore</b></h4>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>

        {/* Support */}
        <div>
          <h4><b>Support</b></h4>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>

        {/* Stay Connected */}
        <div style={{ textAlign: "center" }}>
          <h4><b>Stay connected</b></h4>
          <div
            style={{
              fontSize: "28px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "10px",
            }}
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#3b5998" }}
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#1da1f2" }}
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#e1306c" }}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>DEV@Deakin 2022</p>
        <p>
          Privacy Policy | Terms | Code of Conduct
        </p>
      </div>
    </footer>
  );
}
