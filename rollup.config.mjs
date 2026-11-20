import { dts } from "rolldown-plugin-dts";
import { defineConfig } from "rolldown";

export default defineConfig({
  input: "./src/index.ts",
  output: {
    format: "es",
    dir: "lib",
  },
  external: ["mitt"],
  plugins: [dts({ dtsOnly: true })],
});
