import { dts } from 'rollup-plugin-dts';

export default {
  input: 'src/index.ts',
  output: {
    format: 'es',
    file: 'dist/index.d.ts',
    sourcemap: true,
  },
  plugins: [dts({ sourcemap: true })],
}
