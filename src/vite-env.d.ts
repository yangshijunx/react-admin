/// <reference types="vite/client" />

// 环境变量声明
interface ImportMetaEnv {
	readonly VITE_PORT: string;
	// 我们声明的环境变量一般都是没有类型声明的所以可以写到这里
	// vite在执行过程中会读到这个文件，然后将声明的类型和已有的类型做个合并
}
