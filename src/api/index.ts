import NPgrogress from "nprogress";
import axios from "axios";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import { AxiosCanceler } from "./helper/axiosCancel";
import { showFullScreenLoading } from "@/config/serviceLoading";

const axiosCanceler = new AxiosCanceler();

const config = {
	// 默认请求地址，可以在.env文件中配置
	baseURL: import.meta.env.VITE_API_URL as string,
	// 超时时间
	timeout: 10000,
	// 跨域时候允许携带凭证
	withCredentials: true
};

class RequestHttp {
	service: AxiosInstance;
	public constructor(config: AxiosRequestConfig) {
		// 实例化axios
		this.service = axios.create(config);
		// 请求拦截
		/**
		 * @description: 请求拦截器
		 * 客户端发送请求 -> 请求拦截器 -> 服务器
		 * token校验（JWT）：接收服务器返回的token，存储到vuex/本地存储中，
		 * 每一次向服务器发请求，我们应该把token带上
		 */
		this.service.interceptors.request.use((config: AxiosRequestConfig) => {
			NPgrogress.start();
			// 将当前请求添加到pending中
			axiosCanceler.addPending(config);
			// 如果当前请求不需要显示 loading,在api服务中通过指定的第三个参数：{ header：{ noLoading: true } }来控制
			config.headers!.noLoading || showFullScreenLoading();
      // const token = localStorage.getItem("token");
      const token: string = store.getState().global.token;
      
		});
	}
}
