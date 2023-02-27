import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import { resolve } from "path";
import { wrapperEnv } from "./src/utils/getEnv";
// import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
	const env = loadEnv(mode.mode, process.cwd());
	console.log("env", env);
	const viteEnv = wrapperEnv(env);
	return {
		resolve: {
			alias: {
				"@": resolve(__dirname, "src")
			}
		},
		server: {
			port: viteEnv.VITE_PORT
		}
	};
});
