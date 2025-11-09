import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Click the button to ping the backend");

  const pingBackend = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL);
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("❌ Backend not reachable");
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      background: "#fff8f0"
    }}>
      <h1>Cadify Prototype v1</h1>
      <button
        onClick={pingBackend}
        style={{
          marginTop: 20,
          background: "#ff6600",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Test Backend
      </button>
      <p style={{ marginTop: 20 }}>{message}</p>
    </div>
  );
}
