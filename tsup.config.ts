import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*', '!src/css/css/ui.ts', '!**/*.test.ts'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  dts: false, // No `.d.ts` here
  sourcemap: true,
  external: ['react', 'react-dom', '@tanstack/react-router', 'next'],
  tsconfig: 'tsconfig.json',
  clean: true,
  cjsInterop: false,
  bundle: false,
  minify: false,
})
