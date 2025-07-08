"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Button, Card, Typography, Space, Switch } from "antd";
import "antd/dist/reset.css";

const { Title, Text } = Typography;

// 1. 创建Context
interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2. Provider组件
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div style={{
        background: darkMode ? "#141414" : "#fff",
        minHeight: "100vh",
        transition: "background 0.3s",
        padding: 40,
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// 3. Consumer组件
const ThemeStatus = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("ThemeStatus must be used within ThemeProvider");
  return (
    <Card style={{ maxWidth: 400, margin: "0 auto", textAlign: "center" }}>
      <Title level={3}>Ant Design + React Context Demo</Title>
      <Text type={ctx.darkMode ? "success" : "secondary"}>
        当前主题：{ctx.darkMode ? "暗黑模式" : "明亮模式"}
      </Text>
      <div style={{ margin: "24px 0" }}>
        <Switch
          checked={ctx.darkMode}
          onChange={ctx.toggleDarkMode}
          checkedChildren="暗黑"
          unCheckedChildren="明亮"
        />
      </div>
      <Button type="primary" onClick={ctx.toggleDarkMode}>
        切换主题
      </Button>
    </Card>
  );
};

// 4. 页面组件
export default function DemoPage() {
  return (
    <ThemeProvider>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <ThemeStatus />
      </Space>
    </ThemeProvider>
  );
} 