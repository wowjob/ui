import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*', '!src/css/css/ui.ts', '!**/*.test.ts'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  dts: true,
  sourcemap: true,
  external: ['react', 'react-dom'],
  tsconfig: 'tsconfig.json',
  clean: false,
  cjsInterop: false,
  bundle: false, // Compile files individually
  minify: false, // Preserve 'use client'
})
