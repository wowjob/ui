import { defineConfig } from 'tsup'

import fs from 'node:fs/promises'
import path from 'node:path'

// Function to preprocess files: add/remove 'use client'
const preprocessFiles = async (srcDir, destDir, isNextBuild) => {
  await fs.mkdir(destDir, { recursive: true })
  const files = await fs.readdir(srcDir, { recursive: true })

  for (const file of files) {
    if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      const srcPath = path.join(srcDir, file)
      const destPath = path.join(destDir, file)
      let content = await fs.readFile(srcPath, 'utf-8')

      if (isNextBuild) {
        content = content.replace('// @use-client', "'use client';")
      } else {
        content = content.replace('// @use-client', '')
      }

      await fs.mkdir(path.dirname(destPath), { recursive: true })
      await fs.writeFile(destPath, content)
    }
  }
}

export default defineConfig([
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
  },
  // React Build (for Vite.js, etc.)
  {
    entry: ['src/vite/index.ts'],
    format: ['esm', 'cjs'],
    outDir: 'dist/vite',
    dts: true,
    sourcemap: true,
    external: ['react', 'react-dom', '@tanstack/react-router'],
    tsconfig: 'tsconfig.json',
    clean: false,
    cjsInterop: false,
    // async onSuccess() {
    //   await preprocessFiles('src', 'dist/temp/vite', false)
    //   // Build from temp directory if needed, or rely on source modification
    // },
  },
  // Next.js Build
  {
    entry: ['src/next/index.ts'],
    format: ['esm', 'cjs'],
    outDir: 'dist/next',
    dts: true,
    sourcemap: true,
    external: ['react', 'react-dom', 'next'],
    tsconfig: 'tsconfig.json',
    clean: false,
    cjsInterop: false,

    // async onSuccess() {
    //   await preprocessFiles('src', 'dist/temp/next', true)
    // },
  },
])
