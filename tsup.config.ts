import { defineConfig } from 'tsup'

export default defineConfig(
  // React Build
  {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    outDir: 'dist',
    dts: true,
    sourcemap: true,
    external: ['react', 'react-dom'],
    tsconfig: 'tsconfig.json',
    clean: false,
    cjsInterop: false,
  }
)
