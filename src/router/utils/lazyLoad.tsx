import React, { Suspense } from "react";
import { Spin } from "antd";

/**
 *@description react 路由懒加载
 *@param compontent 需要访问的组件
 *@version V0.0.1
 *@link https://ithelp.ithome.com.tw/articles/10251342
 */
const lazyLoad = (Compontent: React.LazyExoticComponent<any>): React.ReactNode => {
	return (
		<Suspense
			fallback={
				<Spin
					size="large"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100%"
					}}
				/>
			}
		>
			<Compontent />
		</Suspense>
	);
};
export default lazyLoad;
