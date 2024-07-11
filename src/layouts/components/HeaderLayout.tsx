import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const HeaderLayout: React.FC = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items} style={{ flex: 1, minWidth: 0 }} />
    </Header>
  );
};

export default HeaderLayout;
