import "antd/dist/reset.css";
import "./globals.css";
import React from "react";
import Navigation from "./components/Navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, maxHeight: "100vh", height: "100vh", overflow: "hidden" }}>
        <Navigation>{children}</Navigation>
      </body>
    </html>
  );
}