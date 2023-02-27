import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import LayoutHeader from "./compontent/Header";
import LayoutMenu from "./compontent/Menu";

const layoutIndex = () => {
	const { Sider, Content } = Layout;
	return (
		<section className="container">
			<Sider>
				<LayoutMenu></LayoutMenu>
			</Sider>
			<Layout>
				<LayoutHeader></LayoutHeader>
				<Content>
					<Outlet></Outlet>
				</Content>
			</Layout>
		</section>
	);
};
export default layoutIndex;
