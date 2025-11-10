import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("idle");

  const handleCreate = () => {
    setStatus("creating");
    setTimeout(() => setStatus("created"), 1500);
  };

  const handleUpload = () => {
    setStatus("uploading");
    setTimeout(() => setStatus("uploaded"), 1500);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, sans-serif",
        background: "#f5f5f5",
      }}
    >
      <h1 style={{ color: "#222" }}>How would you like to begin?</h1>

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        <button
          onClick={handleCreate}
          style={{
            background: "#ff6b6b",
            color: "white",
            padding: "10px 20px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
          }}
        >
          Create New
        </button>

        <button
          onClick={handleUpload}
          style={{
            background: "#1e90ff",
            color: "white",
            padding: "10px 20px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
          }}
        >
          Upload Existing
        </button>
      </div>

      {status !== "idle" && (
        <p style={{ marginTop: 40 }}>
          {status === "creating" && "Setting up new project..."}
          {status === "created" && "Project created successfully ✅"}
          {status === "uploading" && "Uploading your data..."}
          {status === "uploaded" && "Upload completed ✅"}
        </p>
      )}
    </div>
  );
}
