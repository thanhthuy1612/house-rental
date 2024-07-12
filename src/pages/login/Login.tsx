import React from 'react';
import { Flex, Menu, type MenuProps } from 'antd';
import { LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';

enum LoginMenu {
  LOGIN = 0,
  REGISTER = 1
}

const Login: React.FC = () => {
  const [auth, setAuth] = React.useState<LoginMenu>(LoginMenu.LOGIN);

  // const dispatch = useAppDispatch()
  // React.useEffect(() => {
  //   dispatch(resetStateLogin())
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const items: MenuProps['items'] = [
    {
      label: 'Đăng nhập',
      key: LoginMenu.LOGIN,
      icon: <LoginOutlined />,
      style: {
        flexBasis: '50%',
        borderTopLeftRadius: '0.75rem',
      },
    },
    {
      label: 'Đăng ký',
      key: LoginMenu.REGISTER,
      icon: <UserAddOutlined />,
      style: {
        flexBasis: '50%',
        borderTopRightRadius: '0.75rem',
      },
    },
  ];

  const onClickMenu: MenuProps['onClick'] = (e) => {
    setAuth(Number(e.key));
  };

  const renderBody = () => {
    switch (auth) {
      case LoginMenu.LOGIN:
        return <FormLogin />
      case LoginMenu.REGISTER:
        return <FormRegister />
    }
  }

  return (
    <Flex className=" h-[100%] w-[100%] items-center justify-center bg-borderHeader">
      <div className=" min-w-[600px] bg-bgColor rounded-xl shadow-2xl">
        <Menu
          defaultSelectedKeys={[LoginMenu.LOGIN.toString()]}
          onClick={onClickMenu}
          style={{ display: 'flex', backgroundColor: 'transparent', borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem' }}
          selectedKeys={[auth.toString()]}
          mode="horizontal"
          items={items}
        />
        <Flex className=' flex-col my-[50px] mx-[100px] items-center justify-center'>
          {renderBody()}
        </Flex>
      </div>
    </Flex>
  );
}

export default Login