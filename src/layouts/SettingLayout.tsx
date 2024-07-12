import { Flex, Layout, theme } from 'antd';
import React from 'react';
import HeaderLayout from './components/HeaderLayout';
import Breadcrumb, { ItemType } from 'antd/es/breadcrumb/Breadcrumb';

export interface ISettingLayout {
  children: React.ReactNode;
}

const { Content } = Layout;

const SettingLayout: React.FC<ISettingLayout> = ({ children }) => {
  const [breadcrumb, setBreadcrumb] = React.useState<ItemType[]>()
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  const items = [
    {
      key: 'profile',
      label: 'Thông tin cá nhân',
    },
    {
      key: 'password',
      label: 'Password & Email',
    },

  ];

  React.useEffect(() => {
    const getBreadcrumb = () => {
      let breadcrumbArray: any[] = items
      const arrayPath = location.pathname.split('/settings/')
      const result: ItemType[] = arrayPath[1].split('/').reduce((res: ItemType[], name: string) => {
        const filter = breadcrumbArray.find(item => item?.key === name)
        if (filter) {
          breadcrumbArray = filter?.children
          res.push({
            title: filter?.label
          })
        }
        return res
      }, [
        {
          title: 'Cài đặt'
        }
      ])
      setBreadcrumb(result)
    }
    getBreadcrumb()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])
  return (
    <Layout>
      <HeaderLayout />
      <Content style={{ padding: '0 48px', height: 'calc(100vh - 64px)' }}>
        <Breadcrumb
          className="py-[16px]"
          items={breadcrumb}
        >
        </Breadcrumb>
        <div
          style={{
            margin: 0,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div>
            {children}
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default SettingLayout;