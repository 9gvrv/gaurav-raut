import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const shareCardSize = {
  width: 1200,
  height: 630,
};

export const shareCardAlt = `${profile.name} — ${profile.role}`;

export async function renderShareCard() {
  const fragmentMono = await readFile(
    join(process.cwd(), "app/fonts/fragment-mono-regular.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 64,
          backgroundColor: "#0C0D0B",
          color: "#E9E7DE",
          fontFamily: "Fragment Mono",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 20,
            letterSpacing: 3,
            color: "#9B9E91",
          }}
        >
          <span>PORTFOLIO</span>
          <span>ENGINEERING NOTES</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: 64,
              height: 2,
              marginBottom: 28,
              backgroundColor: "#D9A84B",
            }}
          />
          <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -1 }}>
            {profile.name}
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 26,
              lineHeight: 1.35,
              color: "#9B9E91",
            }}
          >
            {profile.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 24,
            borderTop: "1px solid #252820",
            fontSize: 19,
            letterSpacing: 2,
            color: "#9B9E91",
          }}
        >
          <span>BACKEND / AI / INFRASTRUCTURE</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    ),
    {
      ...shareCardSize,
      fonts: [
        {
          name: "Fragment Mono",
          data: fragmentMono,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
