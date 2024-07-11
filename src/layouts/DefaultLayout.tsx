import React from 'react';
import { Layout } from 'antd';
import HeaderLayout from './components/HeaderLayout';

export interface IDefaultLayout {
  children: React.ReactNode;
}

const { Content } = Layout;

const DefaultLayout: React.FC<IDefaultLayout> = ({ children }) => {
  return (
    <Layout>
      <HeaderLayout />
      <Content style={{ padding: '0 48px' }}>{children}</Content>
    </Layout>
  );
};

export default DefaultLayout;
