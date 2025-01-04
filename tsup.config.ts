import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/**/*.ts", "!src/**/*.spec.ts"],
	sourcemap: true,
	clean: true,
	format: ["esm", "cjs"],
	minify: true,
	skipNodeModulesBundle: true,
	dts: true,
	target: "esnext",
});
