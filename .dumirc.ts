import { defineConfig } from 'dumi'
import style from './docs/siteIndexStyle'
import path from 'path'
import { version } from './package.json'

export default defineConfig({
  favicons: ['http://concis.org.cn/images/concis-logo.png'],
  outputPath: 'docs-dist',
  history: {
    type: 'hash',
  },

  // hash: true,
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'component', dir: '/packages/concis-react/src' },
      { type: 'mobile', dir: '/packages/concis-react-mobile/src' },
    ],
    codeBlockMode: 'passive',
  },
  define: {
    dataDesignVersion: version,
  },
  alias: {
    concis: path.join(__dirname, 'packages/concis-react/src'),
  },
  locales: [
    { id: 'en-US', name: 'English', suffix: '' },
    { id: 'zh-CN', name: '中文', suffix: 'zh-CN' },
  ],
  themeConfig: {
    name: 'Data-Design',
    carrier: 'dumi', // 设备状态栏左侧的文本内容
    hd: true,
    rtl: true,
    // logo: 'http://concis.org.cn/images/concis-logo.png',
    searchHotKey: {
      macos: '⌘+K',
      windows: 'ctrl+k',
    },
    footer: '',
    nav: [
      {
        title: '指南',
        link: '/guide/introduce',
      },
      {
        title: '组件',
        link: '/components/button',
      },
      {
        title: 'GitHub',
        link: 'https://github.com/fengxinhhh/Concis',
      },
    ],
  },
  styles: [style],
})
