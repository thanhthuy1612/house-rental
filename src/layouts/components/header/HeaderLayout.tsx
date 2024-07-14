import React from 'react';
import { Button, Drawer, Flex, Layout, Menu, MenuProps, theme } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginButton from './LoginButton';
import Logo from './Logo';
import Label from '../../../components/label/Label';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../../lib/hooks';
import { updateWidth } from '../../../lib/features/login';

const { Header } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

const HeaderLayout: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = React.useState<string>('');
  const [collapsed, setCollapsed] = React.useState(false);
  const { width } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  React.useEffect(() => {
    dispatch(updateWidth(screen.width));
  }, [screen.width]);

  React.useEffect(() => {
    setSelectedMenu(location.pathname);
  }, [location.pathname]);

  const initItems: MenuItem[] = [
    {
      key: '/',
      label: <Label title="Trang chủ" />,
      onClick: () => navigate('/'),
      style: { borderColor: 'transparent !important' },
    },
    {
      key: '/introduce',
      label: <Label title="Về chúng tôi" />,
      onClick: () => navigate('/introduce'),
      style: { borderColor: 'transparent !important' },
    },
    {
      key: '/saler',
      label: <Label title="Đối tác" />,
      onClick: () => navigate('/saler'),
      style: { borderColor: 'transparent !important' },
    },
    {
      key: '/contact',
      label: <Label title="Liên hệ" />,
      onClick: () => navigate('/contact'),
      style: { borderColor: 'transparent !important' },
    },
  ];

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Header style={{ backgroundColor: colorBgContainer }} className=" border-b-[1px] border-colorPrimary border-solid">
      <Flex className=" items-center justify-between gap-[30px]">
        {width < 800 ? (
          <>
            <Button type="primary" onClick={toggleCollapsed}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Drawer placement="left" title="HOME.VN" onClose={() => setCollapsed(false)} open={collapsed}>
              <Menu
                mode="inline"
                items={initItems}
                selectedKeys={[selectedMenu ?? '']}
                style={{ flex: 1, minWidth: 0, borderBottom: 'none' }}
              />
            </Drawer>
            <Logo />
          </>
        ) : (
          <>
            <Logo />
            <Menu
              mode="horizontal"
              items={initItems}
              selectedKeys={[selectedMenu ?? '']}
              style={{ flex: 1, minWidth: 0, borderBottom: 'none' }}
            />
          </>
        )}
        <LoginButton />
      </Flex>
    </Header>
  );
};

export default HeaderLayout;
