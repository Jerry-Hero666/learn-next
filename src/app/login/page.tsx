"use client";
import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginPage: React.FC = () => {

    const route = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log("Success:", values);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if(data.success){
      route.push('/');
      return;
    }
    message.error(data.message);
  };
  return (
    <div className="container mx-auto flex justify-center items-center pt-48">
      <Form
        className="w-96"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ username: "admin", password: "123123" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="用户名"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="密码"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
