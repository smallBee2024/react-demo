"use client";

import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  InfoCircleOutlined,
  SettingOutlined,
  SplitCellsOutlined,
  SubnodeOutlined,
  FileMarkdownOutlined,
  FlagOutlined,
  GiftOutlined,
  FormatPainterOutlined,
  FundProjectionScreenOutlined,
  FolderOutlined,
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
    icon: <FundProjectionScreenOutlined />,
    label: 'layout与template的区别',
    children: [
      {
        key: "/layout-template/about",
        icon: <FolderOutlined />,
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
    icon: <FormatPainterOutlined />,
    label: 'Demo',
    children: [
      {
        key: "/demo/context",
        icon: <FolderOutlined />,
        label: 'Context',
      },
      {
        key: "/demo/use-context-selector",
        icon: <FolderOutlined />,
        label: 'use-context-selector',
      },
      {
        key: "/demo/tanstack-react-query",
        icon: <FolderOutlined />,
        label: 'tanstack-react-query',
      },
      {
        key: "/demo/zustand",
        icon: <FolderOutlined />,
        label: 'zustand',
      },
    ],
  },
  {
    key: "/hook-api",
    icon: <GiftOutlined />,
    label: 'hook-api',
    children: [
      {
        key: "/hook-api/use-callback",
        icon: <FolderOutlined />,
        label: 'useCallback',
      },
      {
        key: "/hook-api/use-context",
        icon: <FolderOutlined />,
        label: 'useContext',
      },
      {
        key: "/hook-api/use-context-selector",
        icon: <FolderOutlined />,
        label: 'useContextSelector',
      },
      {
        key: "/hook-api/use-reducer",
        icon: <FolderOutlined />,
        label: 'useReducer',
      },
    ]
  },
  {
    key: "/children-demo",
    icon: <FlagOutlined />,
    label: 'children-demo',
    children: [
      {
        key: "/children-demo/children",
        icon: <FolderOutlined />,
        label: 'Children 作为函数',
      },
      {
        key: "/children-demo/props-render",
        icon: <FolderOutlined />,
        label: 'Props 作为函数',
      },
    ]
  },
  {
    key: "/passing-values",
    icon: <SplitCellsOutlined />,
    label: '传递值的几种方式',
    children: [
      {
        key: "/passing-values/classic",
        icon: <SubnodeOutlined />,
        label: '基础传值方式',
      },
      {
        key: "/passing-values/doc",
        icon: <FileMarkdownOutlined />,
        label: '文档说明',
      },
    ]
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
              // minHeight: 360,
              height: "calc(100vh - 48px)",
              background: "#fff",
              borderRadius: 8,
              boxShadow: "0 2px 8px #f0f1f2",
              overflowY: "auto",
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

