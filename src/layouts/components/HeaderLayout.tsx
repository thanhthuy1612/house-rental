import React from 'react';
import { Flex, Layout, Menu, MenuProps, theme } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import LoginButton from './LoginButton';

const { Header } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

const HeaderLayout: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = React.useState<string>('');

  const navigate = useNavigate();

  const {
    token: { colorBgContainer }
  } = theme.useToken();
  const handleClickHome = () => {
    navigate('/');
  }

  const items: MenuItem[] = [
    {
      key: 'home',
      label: <div>Trang chủ</div>,
      onClick: () => navigate('/')
    },
    {
      key: 'introduce',
      label: <div>Về chúng tôi</div>,
      onClick: () => navigate('/introduce')
    },
    {
      key: 'saler',
      label: <div>Đối tác</div>,
      onClick: () => navigate('/saler')
    },
    {
      key: 'contact',
      label: <div>Liên hệ</div>,
    }
  ]

  return (
    <Header style={{ backgroundColor: colorBgContainer }} className=' border-b-[1px] border-borderHeader border-solid'>
      <Flex className=' items-center'>
        <HomeOutlined onClick={handleClickHome} className=' rounded-[50%] border-[1px] border-colorPrimary p-[10px] mr-[20px]' />
        <Menu
          mode="horizontal"
          items={items}
          selectedKeys={[selectedMenu ?? '']}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Flex>
    </Header>
  );
};

export default HeaderLayout;
