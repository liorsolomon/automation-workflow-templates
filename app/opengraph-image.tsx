import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Automation Workflow Templates — n8n & Make Templates for SMBs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#030712",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            background: "rgba(16,185,129,0.15)",
            border: "1px solid rgba(16,185,129,0.4)",
            borderRadius: "999px",
            padding: "8px 20px",
            fontSize: "18px",
            fontWeight: 600,
            color: "#6ee7b7",
            marginBottom: "32px",
          }}
        >
          Automation Workflow Templates
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "58px",
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.15,
            marginBottom: "24px",
          }}
        >
          Automate your business without writing a single line of code.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            color: "#9ca3af",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Ready-to-import n8n and Make workflow templates for SMBs, agencies, and ops teams.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            fontSize: "20px",
            color: "#6b7280",
          }}
        >
          tools.3vo.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
