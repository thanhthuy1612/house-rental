import React from 'react';
import { Avatar, Button, Dropdown, MenuProps } from 'antd';
import { FileAddOutlined, KeyOutlined, LogoutOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../lib/hooks';
import LoadingSpin from '../../../components/loading/LoadingSpin';

const LoginButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isLoadingPage } = useAppSelector((state) => state.reload);
  const accessToken = localStorage.getItem('token');

  const onClickLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (location.pathname === e.key) {
      return;
    }
    switch (e.key) {
      case '/settings/profile':
        navigate(e.key);
        break;
      case '/settings/password':
        navigate(e.key);
        break;
      case '/myRoom':
        navigate(e.key);
        break;
      case '/create':
        navigate(e.key);
        break;
      case 'out':
        onClickLogout();
        break;
    }
  };

  const items = [
    {
      key: '/settings/profile',
      label: 'Thông tin cá nhân',
      icon: <UserOutlined />,
    },
    {
      key: '/settings/password',
      label: 'Thay đổi mật khẩu',
      icon: <KeyOutlined />,
    },
    {
      key: '/myRoom',
      label: 'Danh sách quản lý',
      icon: <MenuOutlined />,
    },
    {
      key: '/create',
      label: 'Thêm phòng',
      icon: <FileAddOutlined />,
    },
    {
      key: 'out',
      label: 'Thoát',
      icon: <LogoutOutlined />,
    },
  ];

  const onClickLogin = () => {
    navigate('/login');
  };

  const renderButtonLogin = () => {
    return accessToken ? (
      <Button type="primary" className=" hover:!bg-colorSelect" onClick={onClickLogin}>
        Đăng nhập
      </Button>
    ) : (
      <Dropdown menu={{ items, onClick: handleMenuClick, style: { minWidth: '200px' } }} arrow>
        <Avatar
          className=" bg-bgColor text-colorPrimary m-[10px] border-[1px] border-colorPrimary"
          src={undefined}
          icon={<UserOutlined />}
        />
      </Dropdown>
    );
  };

  return <div className="flex items-center">{isLoadingPage ? <LoadingSpin /> : renderButtonLogin()}</div>;
};
export default LoginButton;
