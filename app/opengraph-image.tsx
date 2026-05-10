// import { ImageResponse } from "next/og";
// import { siteConfig } from "@/lib/site";

// export const runtime = "edge";
// export const alt = `${siteConfig.name} — ${siteConfig.title}`;
// export const size = { width: 1200, height: 630 };
// export const contentType = "image/png";

// export default function OpengraphImage() {
//   return new ImageResponse(
//     (
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           padding: 80,
//           background:
//             "radial-gradient(800px 500px at 12% 0%, rgba(139,92,246,0.45), transparent 60%), radial-gradient(700px 500px at 90% 5%, rgba(6,182,212,0.40), transparent 60%), #0a0a14",
//           color: "white",
//           fontFamily: "system-ui, sans-serif",
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//           <div
//             style={{
//               width: 64,
//               height: 64,
//               borderRadius: 16,
//               background: "linear-gradient(135deg,#8b5cf6 0%,#06b6d4 100%)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: 38,
//               fontWeight: 800,
//             }}
//           >
//             O
//           </div>
//           <span
//             style={{
//               fontSize: 28,
//               fontWeight: 600,
//               letterSpacing: -0.5,
//               opacity: 0.9,
//             }}
//           >
//             {siteConfig.name}.dev
//           </span>
//         </div>

//         <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
//           <div
//             style={{
//               fontSize: 78,
//               fontWeight: 800,
//               lineHeight: 1.05,
//               letterSpacing: -2,
//               maxWidth: 1000,
//             }}
//           >
//             {siteConfig.fullName}
//           </div>
//           <div
//             style={{
//               fontSize: 44,
//               fontWeight: 600,
//               color: "#a5b4fc",
//               letterSpacing: -1,
//             }}
//           >
//             {siteConfig.title}
//           </div>
//           <div
//             style={{
//               fontSize: 24,
//               color: "#cbd5e1",
//               maxWidth: 980,
//               lineHeight: 1.4,
//             }}
//           >
//             React · Next.js · Node · MongoDB · Firebase
//           </div>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             fontSize: 22,
//             color: "#94a3b8",
//           }}
//         >
//           <span>{siteConfig.location}</span>
//           <span>{siteConfig.url.replace("https://", "")}</span>
//         </div>
//       </div>
//     ),
//     size,
//   );
// }
