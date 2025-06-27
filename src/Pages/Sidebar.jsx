import React, { useState } from 'react';
import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom'; // ✅ Added
const { Header, Sider, Content } = Layout;


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate(); // ✅ For programmatic navigation
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menus = [
    {
      key: "/app/dashboard",
      label: "Dashboard",
      icon: <DashboardOutlined />,
    },
    {
      key: "/app/customers",
      label: "Customer",
      icon: <UserOutlined />,
    },
    {
      key: "/app/logs",
      label: "Call & Log",
      icon: <PieChartOutlined />,
    }
  ];

  return (
    <Layout className='!min-h-screen'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          items={menus}
          onClick={({ key }) => navigate(key)} // ✅ Navigate on menu click
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet /> {/* ✅ Render nested route content here */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
