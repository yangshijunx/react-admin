import React from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { LoginForm } from "@/api/interface";
import { HOME_URL } from "@/config/config";

const LoginForm = (props: any) => {
	// 表单数据
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const onFinish = (values: LoginForm) => {
		// 留个作业弄完nest再过来搞登录，现在先写死
		if (values.username === "admin" && values.password === "123456") {
			navigate(HOME_URL);
			message.success("登录成功！");
		} else {
			message.success("请检查用户名和密码！");
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
		console.log("form", form);
		console.log("props", props);
	};

	return (
		<Form
			form={form}
			name="basic"
			labelCol={{ span: 5 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			size="large"
			autoComplete="off"
		>
			<Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
				<Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
			</Form.Item>

			<Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
				<Input.Password autoComplete="new-password" placeholder="123456" prefix={<LockOutlined />} />
			</Form.Item>

			<Form.Item className="login-btn" wrapperCol={{ offset: 8, span: 16 }}>
				<Button
					onClick={() => {
						form.resetFields();
					}}
					icon={<CloseCircleOutlined />}
				>
					重置
				</Button>
				<Button type="primary" htmlType="submit" icon={<UserOutlined />}>
					登录
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
