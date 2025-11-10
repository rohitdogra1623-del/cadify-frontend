import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState(null);
  const [projectName, setProjectName] = useState("");
  const [domain, setDomain] = useState("");

  if (!mode) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
        background: "#fff8f0",
      }}>
        <h1 style={{ fontSize: "2rem", color: "#222" }}>How would you like to begin?</h1>
        <div style={{ marginTop: 40, display: "flex", gap: 20 }}>
          <button
            onClick={() => setMode("create")}
            style={{ background: "#ff6600", color: "white", padding: "10px 20px", borderRadius: 10, border: "none", cursor: "pointer" }}
          >
            Create New
          </button>
          <button
            onClick={() => setMode("upload")}
            style={{ background: "#444", color: "white", padding: "10px 20px", borderRadius: 10, border: "none", cursor: "pointer" }}
          >
            Upload
          </button>
        </div>
      </div>
    );
  }

  if (mode === "create") {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff8f0",
        fontFamily: "Inter, sans-serif"
      }}>
        <h2>Create New Project</h2>
        <input
          placeholder="Project name"
          value={projectName}
          onChange={e => setProjectName(e.target.value)}
          style={{ margin: 10, padding: 8, borderRadius: 8, border: "1px solid #ccc" }}
        />
        <input
          placeholder="Domain (Architecture, Interior, etc.)"
          value={domain}
          onChange={e => setDomain(e.target.value)}
          style={{ margin: 10, padding: 8, borderRadius: 8, border: "1px solid #ccc" }}
        />
        <button
          onClick={() => setMode("done")}
          style={{ background: "#ff6600", color: "white", padding: "10px 20px", borderRadius: 10, border: "none", cursor: "pointer" }}
        >
          Submit
        </button>
      </div>
    );
  }

  if (mode === "upload") {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff8f0",
        fontFamily: "Inter, sans-serif"
      }}>
        <h2>Upload Existing Project</h2>
        <input type="file" style={{ marginTop: 20 }} />
      </div>
    );
  }

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Inter, sans-serif",
      background: "#fff8f0"
    }}>
      <h1>Project "{projectName}" created successfully!</h1>
      <p style={{ color: "#555" }}>Domain: {domain}</p>
      <button
        onClick={() => setMode(null)}
        style={{ marginTop: 20, background: "#444", color: "white", padding: "10px 20px", borderRadius: 10, border: "none", cursor: "pointer" }}
      >
        Back to Dashboard
      </button>
    </div>
  );
}
