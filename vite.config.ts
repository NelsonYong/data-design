import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      {
        find: '@data-design',
        replacement: resolve(__dirname, 'packages/data-design'),
      },
      {
        find: '@data-design/dataType',
        replacement: resolve(__dirname, 'packages/data-design/dataType'),
      },
      {
        find: '@data-design/transforms',
        replacement: resolve(__dirname, 'packages/data-design/transforms'),
      },
      {
        find: '@data-design/share',
        replacement: resolve(__dirname, 'packages/data-design/share'),
      },
    ],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/data-design/index.ts'),
      name: 'data-design',
      formats: ['es', 'cjs'],
      fileName: (format) => `data-design.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
        },
      },
    },
    outDir: 'dist',
  },
})
