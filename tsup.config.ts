import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*', '!src/css/css/ui.ts', '!**/*.test.ts'],
  // entry: ['src/index.ts'],
  format: ['esm'],
  outDir: 'dist',
  dts: true, // Generate .d.ts files
  sourcemap: true,
  external: ['react', 'react-dom', '@tanstack/react-router', 'next'],
  tsconfig: 'tsconfig.json',
  clean: true,
  bundle: false,
  minify: false,
})
