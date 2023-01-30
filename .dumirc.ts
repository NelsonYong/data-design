import { defineConfig } from 'dumi'
import style from './docs/siteIndexStyle'
import path from 'path'
// import { version } from './package.json'

export default defineConfig({
  favicons: [
    'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
  ],
  autoAlias: false,
  outputPath: 'docs-dist',
  history: {
    type: 'hash',
  },
  resolve: {
    codeBlockMode: 'passive',
  },
  alias: {
    'data-design': path.join(__dirname, 'packages/data-design'),
  },
  locales: [
    { id: 'en-US', name: 'English', suffix: '' },
    { id: 'zh-CN', name: '中文', suffix: '/zh-CN' },
  ],
  themeConfig: {
    name: 'Data-Design',
    // carrier: 'dumi', // 设备状态栏左侧的文本内容
    hd: { rules: [] },
    rtl: true,
    logo: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
    searchHotKey: {
      macos: '⌘+K',
      windows: 'ctrl+k',
    },
    footer: '',
    nav: [
      {
        title: 'Introduce',
        link: '/guide/introduce',
      },
      {
        title: 'Functions',
        link: '/functions',
      },
    ],
  },
  styles: [style],
})
