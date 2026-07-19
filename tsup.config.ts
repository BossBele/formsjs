import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    '@form-os/core',
    '@form-os/react',
    '@form-os/schema',
    'react',
    'react-dom',
    'react-hook-form',
  ],
});
