import "antd/dist/reset.css";
import React from "react";
import Navigation from "./components/Navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: "100vh", background: "#f5f5f5" }}>
        <Navigation>{children}</Navigation>
      </body>
    </html>
  );
}