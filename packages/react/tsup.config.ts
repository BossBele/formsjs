import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/fields/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'react-hook-form', '@form-os/core'],
});
