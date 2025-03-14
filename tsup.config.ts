import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  // format: ['esm'], // Output both ESM and CommonJS
  format: ['esm', 'cjs'], // Output both ESM and CommonJS
  outDir: 'dist',
  dts: true, // Generate .d.ts files
  sourcemap: true, // Match your Bun --sourcemap
  external: ['react', 'react-dom', 'next'], // Exclude peer dependencies
  tsconfig: 'tsconfig.json', // Use your tsconfig for alias resolution
  clean: false, // Clean dist/ before building
  cjsInterop: false, // Ensure CommonJS compatibility
})
