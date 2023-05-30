import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'Chenyz的博客',
  description: "Welcome to Chenyz's Blog",
  theme: defaultTheme({
    logo: '/images/navimg.png',
    // 在这里进行配置
    navbar: [
      {
        text: '我的',
        children: [{
          text: 'GitHub',
          link: 'https://github.com/xxxCcyzzZ',
        }, {
          text: 'Gitee',
          link: 'https://gitee.com/cyzsGitee',
        }]
      },
      {
        text: '笔记记录',
        link: '/Blog/'
      },
      {
        text: '资源',
        children: [{
          text: '资料',
          link: '/404',
        }, {
          text: '软件/工具',
          link: '/404',
        }]
      },
      {
        text: '首页',
        link: '/'
      },
    ],
    sidebar: {
      '/Blog/': [
        {
          text: '笔记',
          collapsible: true,
          children: [{
            text: '测试笔记',
            link: '/Blog/Notes/demo'
          }],
        },
      ],
    },
  }),
})
