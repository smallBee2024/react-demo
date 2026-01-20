"use client";

import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  InfoCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "antd/dist/reset.css";
import React from "react";

const { Sider, Content } = Layout;

const menuItems = [
  {
    key: "/",
    icon: <DashboardOutlined />,
    label: <Link href="/">首页</Link>,
  },
  {
    key: "/dashboard",
    icon: <DashboardOutlined />,
    label: <Link href="/dashboard">Dashboard</Link>,
    children: [
      {
        key: "/dashboard/about",
        icon: <InfoCircleOutlined />,
        label: <Link href="/dashboard/about">About</Link>,
      },
      {
        key: "/dashboard/settings",
        icon: <SettingOutlined />,
        label: <Link href="/dashboard/settings">Settings</Link>,
      },
    ],
  },
  {
    key: "/demo",
    icon: <InfoCircleOutlined />,
    label: <Link href="/demo">Demo</Link>,
    children: [
      {
        key: "/demo/context",
        icon: <InfoCircleOutlined />,
        label: <Link href="/demo/context">Context</Link>,
      },
      {
        key: "/demo/use-context-selector",
        icon: <InfoCircleOutlined />,
        label: <Link href="/demo/use-context-selector">use-context-selector</Link>,
      },
      {
        key: "/demo/tanstack-react-query",
        icon: <InfoCircleOutlined />,
        label: <Link href="/demo/tanstack-react-query">tanstack-react-query</Link>,
      },
      {
        key: "/demo/zustand",
        icon: <InfoCircleOutlined />,
        label: <Link href="/demo/zustand">zustand</Link>,
      },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // 兼容首页和 dashboard 的选中
  const selectedKey = menuItems.find(item => pathname === item.key) ? [pathname] : ["/"];
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: "100vh", background: "#f5f5f5" }}>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider breakpoint="lg" collapsedWidth="0" style={{ background: "#fff" }}>
            <div style={{ height: 32, margin: 16, fontWeight: 700, fontSize: 20 }}>
              My App
            </div>
            <Menu
              mode="inline"
              selectedKeys={selectedKey}
              items={menuItems}
              style={{ height: "100%" }}
            />
          </Sider>
          <Layout>
            <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: "#fff",
                  borderRadius: 8,
                  boxShadow: "0 2px 8px #f0f1f2",
                }}
              >
                {children}
              </div>
            </Content>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}