"use client";

import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  InfoCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const { Sider, Content } = Layout;

const menuItems = [
  {
    key: "/",
    icon: <DashboardOutlined />,
    label: <Link href="/">首页</Link>,
  },
  {
    key: "/layout-template",
    icon: <DashboardOutlined />,
    label: 'layout与template的区别',
    children: [
      {
        key: "/layout-template/about",
        icon: <InfoCircleOutlined />,
        label: 'About',
      },
      {
        key: "/layout-template/settings",
        icon: <SettingOutlined />,
        label: 'Settings',
      },
    ],
  },
  {
    key: "/demo",
    icon: <InfoCircleOutlined />,
    label: 'Demo',
    children: [
      {
        key: "/demo/context",
        icon: <InfoCircleOutlined />,
        label: 'Context',
      },
      {
        key: "/demo/use-context-selector",
        icon: <InfoCircleOutlined />,
        label: 'use-context-selector',
      },
      {
        key: "/demo/tanstack-react-query",
        icon: <InfoCircleOutlined />,
        label: 'tanstack-react-query',
      },
      {
        key: "/demo/zustand",
        icon: <InfoCircleOutlined />,
        label: 'zustand',
      },
    ],
  },
  {
    key: "/hook-api",
    icon: <InfoCircleOutlined />,
    label: 'hook-api',
    children: [
      {
        key: "/hook-api/use-callback",
        icon: <InfoCircleOutlined />,
        label: 'useCallback',
      },
      {
        key: "/hook-api/use-context",
        icon: <InfoCircleOutlined />,
        label: 'useContext',
      },
      {
        key: "/hook-api/use-context-selector",
        icon: <InfoCircleOutlined />,
        label: 'useContextSelector',
      },
      {
        key: "/hook-api/use-reducer",
        icon: <InfoCircleOutlined />,
        label: 'useReducer',
      },
    ]
  },
  {
    key: "/children-demo",
    icon: <InfoCircleOutlined />,
    label: 'children-demo',
    children: [
      {
        key: "/children-demo/children",
        icon: <InfoCircleOutlined />,
        label: 'Children 作为函数',
      },
      {
        key: "/children-demo/props-render",
        icon: <InfoCircleOutlined />,
        label: 'Props 作为函数',
      },
    ]
  },
  {
    key: "/passing-values",
    icon: <InfoCircleOutlined />,
    label: '传递值的几种方式',
  },
];

export default function Navigation({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [current, setCurrent] = useState('/');
  const [openKeys, setOpenKeys] = useState(['/']);

  const onClick: any = (e: any) => {
    console.log("click ", e);
    setCurrent(e.key);
    router.push(e.key as string);
  };

  // 刷新页面时，设置当前选中和打开的菜单
  useEffect(() => {
    setCurrent(pathname);
    let openkey = pathname.split('/')[1]
    if (openkey) {
      setOpenKeys([`/${openkey}`]);
    }
  }, [pathname]);

  const onOpenChange: any = (e: string[]) => {
    console.log('openChange 14334', e);
    setOpenKeys(e);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider breakpoint="lg" collapsedWidth="0" width={250} style={{ background: "#fff" }}>
        <div style={{ height: 32, margin: 16, fontWeight: 700, fontSize: 20 }}>
          React Demo
        </div>
        <Menu
          mode="inline"
          defaultOpenKeys={['/']}
          onClick={onClick}
          selectedKeys={[current]}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
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
  );
}

