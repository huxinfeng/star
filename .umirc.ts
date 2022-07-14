import { defineConfig, IConfig } from 'dumi';

export default defineConfig({
  title: 'star系列插件教程',
  favicon: 'https://material.gamecreator.com.cn/GC%E5%9B%BE%E6%A0%87%28%E7%B2%BE%29.png',
  logo: 'https://material.gamecreator.com.cn/GC%E5%9B%BE%E6%A0%87%28%E7%B2%BE%29.png',
  outputPath: 'docs-dist',
  mode: 'site',
  /** 解决html引用不到 js 和 css 的问题 */
  publicPath: './',
  /** 路由改成 hash 路由 */
  history: { type: 'hash' },
  /* 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存 */
  hash: true,
  /** 开启webpack5 */
  webpack5: {},
  /** 开启mfsu */
  mfsu: {},
  /** 启用 esbuild 压缩 */
  esbuild: {},
  /** 启用 sitemap.xml 自动生成特性 */
  sitemap: {
    hostname: 'https://huxinfeng.github.io',
  },
  /** 国际化 */
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  /** 包模块结构分析工具 */
  // 配置具体含义见：https://github.com/umijs/umi-webpack-bundle-analyzer#options-for-plugin
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  /** 配置额外的 meta 标签 */
  metas: [
    {
      name: 'keywords',
      content: '星宿君, gameCreator, star',
    },
    {
      name: 'description',
      content: '📖 为GameCreator而生的文档工具',
    },
    {
      bar: 'gameCreator',
    },
  ],
  /** 导航额外链接配置 */
  navs: {
    'zh-CN': [
      null,
      { title: 'GitHub', path: 'https://github.com/huxinfeng/star' },
      { title: '更新日志', path: 'https://github.com/huxinfeng/star/releases' },
    ],
    'en-US': [
      null,
      { title: 'GitHub', path: 'https://github.com/huxinfeng/star' },
      { title: 'Changelog', path: 'https://github.com/huxinfeng/star/releases' },
    ],
  },
  /** 启用 Google Analytics 和 百度统计 */
  analytics: {
    // Google Analytics 代码，配置后会启用
    ga: 'G-4Q280WRGJ5',
    // 百度统计代码，配置后会启用
    baidu: '213782e7b5b17a80915621c208df337f',
  },
  // more config: https://d.umijs.org/config
} as IConfig);
