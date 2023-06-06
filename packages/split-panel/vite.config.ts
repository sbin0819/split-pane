import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'split-panel',
      formats: ['es', 'umd'],
      fileName: (format) => `split-panel.${format}.js`,
    },
  },
});
