import { ImageResponse } from "next/og"

export const alt = "Dr. Interested Simmon Chang Chess Club — CFC-rated chess tournaments for cancer research"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #405862 0%, #2b3f47 100%)",
          padding: "72px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "9999px",
              background: "#4ecdc4",
              color: "#405862",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            ♞
          </div>
          <div style={{ fontSize: "30px", fontWeight: 600, letterSpacing: "-0.5px" }}>Dr. Interested</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "68px", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-2px" }}>
            Simmon Chang Chess Club
          </div>
          <div style={{ fontSize: "34px", color: "#4ecdc4", fontWeight: 600 }}>
            CFC-Rated Chess Tournaments for Cancer Research
          </div>
        </div>

        <div style={{ fontSize: "26px", color: "rgba(255,255,255,0.82)" }}>
          100% of proceeds support the Pediatric Cancer Research Foundation
        </div>
      </div>
    ),
    { ...size },
  )
}
