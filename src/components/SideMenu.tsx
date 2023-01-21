import React, { useState } from "react";
import "./index.css";
import {
  ContainerOutlined,
  UserOutlined,
  HomeOutlined,
  MenuOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "1", <HomeOutlined />),
  getItem("Manage User", "2", <UserOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10")
  ]),

  getItem("Transactions", "3", <ContainerOutlined />, [
    getItem("Bank Transactions", "9"),
    getItem("M-Pesa Transactions", "10")
  ]),

  getItem("Analysis", "3", <ContainerOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10")
  ]),
  getItem("Reports", "3", <ContainerOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10")
  ])
];

const SideMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 256 }}>
      <Button
        type="default"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {/* {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} */}
        <MenuOutlined />
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        // theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default SideMenu;
