import { dts } from 'rollup-plugin-dts';

export default {
  input: './tmp/index.d.ts',
  output: {
    format: 'es',
    file: 'lib/index.d.ts',
    sourcemap: true,
  },
  plugins: [dts({ sourcemap: true })],
}
