import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  title: 'poikcue',
  description: '这里是 poikcue 文档。由 poikcue 翻译的文档、Wiki等作品将发布在这里。',
  theme: defaultTheme({
    docsRepo: 'https://github.com/poikcue/docs',
    docsBranch: 'main',
    docsDir: 'docs',
    tip: '💡 提示',
    warning: '⚠ 注意',
    danger: '🔥 警告',
    navbar: [
      {
        text: 'Paper',
        link: '/PaperMC/paper/Welcome.md',
      },
      {
        text: 'Purpur',
        link: '/Purpur/Configuration.md',
      },
      {
        text: 'LibrePremium',
        link: '/librepremium/welcome.md',
      },
    ],
    sidebar: {
      '/PaperMC/paper/': [
        '/PaperMC/paper/Welcome.md',
        {
          text: '开始使用',
          children: ['/PaperMC/paper/admin/getting-start/getting-start.md', '/PaperMC/paper/admin/getting-start/adding-plugins.md','/PaperMC/paper/admin/getting-start/migration.md'],
        },
        {
          text: '使用指南',
          children: ['/PaperMC/paper/admin/how-to/configuration.md', '/PaperMC/paper/admin/how-to/updating.md','/PaperMC/paper/admin/how-to/aikars-flags.md','/PaperMC/paper/admin/how-to/anti-xray.md'],
        },
        {
          text: '参考',
          children: ['/PaperMC/paper/admin/Reference/global-configuration.md', '/PaperMC/paper/admin/Reference/world-configuration.md','/PaperMC/paper/admin/Reference/system-properties.md'],
        },
        {
          text: '开发 - 开始使用',
          children: ['/PaperMC/paper/dev/getting-start/project-setup.md', '/PaperMC/paper/dev/getting-start/plugin-yml.md'],
        },
        {
          text: '开发 - 事件API',
          children: ['/PaperMC/paper/dev/event-api/event-listeners.md', '/PaperMC/paper/dev/event-api/handler-lists.md', '/PaperMC/paper/dev/event-api/custom-events.md'],
        },
      ],
      '/Purpur/': [
        '/Purpur/Configuration.md',
        '/Purpur/Commands.md',
        '/Purpur/Permissions.md',
      ],
      '/librepremium/': [
        '/librepremium/welcome.md',
        '/librepremium/feature.md',
        '/librepremium/commands.md',
        '/librepremium/guide.md',
        '/librepremium/considerations.md',
        '/librepremium/api.md',
      ],
    },
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
    },
  },
  }),
})