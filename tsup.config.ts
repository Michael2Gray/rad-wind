import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/lib/index.ts"],
  format: ["cjs", "esm"],
  minify: true,
  splitting: true,
  treeshake: true,
});
