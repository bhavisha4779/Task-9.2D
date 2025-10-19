import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Post() {
  const [code, setCode] = useState("");
  const [markdown, setMarkdown] = useState("");

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "900px",
        margin: "auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f9fafb",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "25px",
          textAlign: "center",
        }}
      >
        Create a Post
      </h2>

      {/* Code Input */}
      <h4 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>Write Code:</h4>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Type your code here..."
        spellCheck={false}
        style={{
          width: "100%",
          height: "300px",
          padding: "12px",
          fontSize: "14px",
          fontFamily: "Consolas, Monaco, Courier New, monospace",
          backgroundColor: "#263238",
          color: "#ffffff",
          borderRadius: "6px",
          border: "1px solid #ccc",
          resize: "vertical",
          lineHeight: "1.5",
          direction: "ltr",
        }}
      />

      {/* Markdown Input */}
      <h4 style={{ marginTop: "30px", fontSize: "1.3rem" }}>
        Write Description (Markdown):
      </h4>
      <textarea
        rows="8"
        placeholder="Write markdown here..."
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        style={{
          width: "100%",
          marginTop: "10px",
          padding: "12px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontFamily: "inherit",
          resize: "vertical",
          boxSizing: "border-box",
          direction: "ltr",
        }}
      />

      {/* Markdown Preview */}
      <h3
        style={{
          marginTop: "40px",
          borderTop: "1px solid #ddd",
          paddingTop: "20px",
          fontSize: "1.6rem",
          textAlign: "center",
        }}
      >
        Preview:
      </h3>

      <div
        style={{
          direction: "ltr",
          textAlign: "left",
          marginBottom: "30px",
          fontSize: "16px",
          lineHeight: "1.6",
        }}
      >
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}


