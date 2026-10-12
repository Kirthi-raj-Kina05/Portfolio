import { ImageResponse } from "next/og";

export const alt = "Keerthana C N — Junior Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded share card. Swap for a real portfolio screenshot (public/og.png) when you have one.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "#0a0a0a",
          color: "#f2f2f2",
          borderLeft: "14px solid #27d368",
        }}
      >
        <div style={{ fontSize: 26, color: "#27d368", letterSpacing: 4, display: "flex" }}>
          JUNIOR SOFTWARE DEVELOPER · BENGALURU, INDIA
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 24, display: "flex" }}>
          Keerthana C N
        </div>
        <div style={{ fontSize: 38, color: "#a8a8a8", marginTop: 20, display: "flex" }}>
          Building responsive web experiences with Next.js.
        </div>
        <div style={{ fontSize: 28, color: "#a8a8a8", marginTop: 40, display: "flex" }}>
          Next.js · React · Tailwind CSS
        </div>
      </div>
    ),
    size,
  );
}
