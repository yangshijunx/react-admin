import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import { resolve } from "path";
// import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig((): UserConfig => {
	// const env = loadEnv(mode.mode, process.cwd());
	// const viteEnv = wrapperEnv(env);
	return {
		resolve: {
			alias: {
				"@": resolve(__dirname, "src")
			}
		}
	};
});
