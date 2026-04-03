import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team Marine | AI Agent Squad",
  description:
    "Meet Team Marine -- 5 AI agents working together as a software development team. Backend, Frontend, DevOps, Research, and Prime Orchestrator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
