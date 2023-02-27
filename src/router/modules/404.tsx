import { RouteObject } from "@/router/interface";
import React from "react";
import lazyLoad from "../utils/lazyLoad";

const errorRouter: RouteObject[] = [
	{
		path: "/404",
		element: lazyLoad(React.lazy(() => import("@/compontents/ErrorMessage/404"))),
		meta: {
			requiresAuth: false,
			title: "404页面",
			key: "404"
		}
	}
];

export default errorRouter;
