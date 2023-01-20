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
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'DataType', dir: '/packages/data-design/dataType' },
      { type: 'mobile', dir: '/packages/concis-react-mobile/src' },
    ],
    codeBlockMode: 'passive',
  },
  define: {
    dataDesignVersion: version,
  },
  alias: {
    dataDesign: path.join(__dirname, 'packages/data-design'),
  },
  locales: [
    { id: 'en-US', name: 'English', suffix: '' },
    { id: 'zh-CN', name: '中文', suffix: '/zh-CN' },
  ],
  themeConfig: {
    name: 'Data-Design',
    carrier: 'dumi', // 设备状态栏左侧的文本内容
    hd: true,
    rtl: true,
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
        title: 'DataType',
        link: '/dataType',
      },
    ],
  },
  styles: [style],
})
