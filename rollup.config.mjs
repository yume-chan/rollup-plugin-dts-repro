import { dts } from "rolldown-plugin-dts";
import { defineConfig } from "rolldown";

export default defineConfig({
  input: "./src/index.ts",
  output: {
    format: "es",
    dir: "lib",
  },
  external: (id) => id.includes("node_modules"),
  plugins: [dts({ dtsOnly: true })],
});
