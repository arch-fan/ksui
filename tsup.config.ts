import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/**/*.ts", "!src/**/*.spec.ts"],
	sourcemap: true,
	clean: true,
	format: ["cjs", "esm"],
	minify: true,
	skipNodeModulesBundle: true,
	dts: true,
	target: "esnext",
});
