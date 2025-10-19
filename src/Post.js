import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";

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
      <h2 style={{ fontSize: "2.5rem", marginBottom: "25px", textAlign: "center" }}>
        Create a Post
      </h2>

      {/* CODE EDITOR */}
      <h4 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>Write Code:</h4>
      <CodeMirror
        value={code}
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
          lineWrapping: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
      />

      {/* MARKDOWN INPUT */}
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
        }}
      />

      {/* PREVIEW SECTION */}
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

      {/* Markdown Preview */}
      <div style={{ marginBottom: "30px", fontSize: "16px", lineHeight: "1.6" }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>

      {/* Code Preview with syntax highlighting */}
      <SyntaxHighlighter
        language="javascript"
        style={oneDark}
        showLineNumbers
        wrapLines
        customStyle={{ borderRadius: "8px", fontSize: "14px" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
