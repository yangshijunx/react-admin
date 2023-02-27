import { RouteObject } from "@/router/interface";
import React from "react";
import lazyLoad from "../utils/lazyLoad";

const hoemRouter: Array<RouteObject> = [
	{
		path: "/home/index",
		element: lazyLoad(React.lazy(() => import("@/views/home"))),
		meta: {
			requiresAuth: true,
			title: "首页",
			key: "home"
		}
	}
];

export default hoemRouter;
