import React, { useState } from "react";

import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
import NavbarCustom from "./component/Navbar";
import SideBarNew from "./component/SidebarNew";
const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const CommonLayoutAdmin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        className="h-screen overflow-scroll overscroll-auto"
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
      >
        <SideBarNew />
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <div className="homeContainer">
            <NavbarCustom />
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©2023 Created by Vo Duy Tao
        </Footer>
      </Layout>
    </Layout>
  );
};

export default CommonLayoutAdmin;

