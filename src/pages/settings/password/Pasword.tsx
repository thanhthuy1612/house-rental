import { Button, Form, FormProps, Input } from 'antd';
import React from 'react';
import HeaderSettings from '../components/HeaderSettings';

export type ChangePasswordType = {
  current?: string;
  password?: string;
  rePassword?: string;
};

const Password: React.FC = () => {
  const [isDisable, setIsDisable] = React.useState<boolean>(false);

  const [form] = Form.useForm();

  const onFinish: FormProps<ChangePasswordType>['onFinish'] = async (values) => {
    console.log(values);
    setIsDisable(false);
  };

  return (
    <Form
      form={form}
      scrollToFirstError
      onFinish={onFinish}
      style={{ paddingBlock: 32 }}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      className=" mx-[16px]"
    >
      <HeaderSettings title="Cập nhật mật khẩu" />
      <Form.Item<ChangePasswordType>
        label="Mật khẩu hiện tại"
        name="current"
        rules={[{ required: true, message: 'Vui lòng nhập thông tin!' }]}
      >
        <Input.Password disabled={isDisable} placeholder="Mật khẩu hiện tại" size="large" />
      </Form.Item>

      <Form.Item<ChangePasswordType>
        label="Mật khẩu mới"
        name="password"
        rules={[{ required: true, message: 'Vui lòng nhập thông tin!' }]}
      >
        <Input.Password disabled={isDisable} placeholder="Mật khẩu mới" size="large" />
      </Form.Item>

      <Form.Item<ChangePasswordType>
        name="rePassword"
        label="Nhập lại mật khẩu"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập thông tin!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password disabled={isDisable} placeholder="Nhập lại mật khẩu" size="large" />
      </Form.Item>

      <Form.Item className=" flex justify-center">
        <Button className="hover:bg-colorSelect" htmlType="submit">
          Cập nhật
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Password;
