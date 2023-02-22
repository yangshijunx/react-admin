import { RouteObject } from "@/router/interface";
import Error404 from "@/compontents/ErrorMessage/404";

const errorRouter: RouteObject[] = [
	{
		path: "/404",
		element: <Error404 />,
		meta: {
			requiresAuth: false,
			title: "404页面",
			key: "404"
		}
	}
];

export default errorRouter;
