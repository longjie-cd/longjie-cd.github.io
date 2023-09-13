import {defineUserConfig} from 'vuepress'
import {defaultTheme} from 'vuepress'
import {searchPlugin} from '@vuepress/plugin-search'
import {backToTopPlugin} from '@vuepress/plugin-back-to-top'
import {nprogressPlugin} from '@vuepress/plugin-nprogress'
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
export default defineUserConfig({
    lang: 'zh-CN',
    title: '龙杰的博客',
    description: '这是我的第一个 VuePress 站点',
    // 插件配置
    plugins: [
        // 代码复制
        copyCodePlugin(),
        // 返回顶部
        backToTopPlugin(),
        // 页面切换进度条
        nprogressPlugin(),
        // 搜索
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索',
                }
            },
            // 排除首页
            isSearchable: (page) => page.path !== '/',
            // 允许搜索 Frontmatter 中的 `tags`
            getExtraFields: (page) => page.frontmatter.tags ?? [],
        }),
    ],
    // 主题配置
    theme: defaultTheme({
        sidebarDepth: 0,
        // 首页地址
        home: '/',
        // 更新时间
        lastUpdatedText: '更新时间',
        // 作者
        contributorsText: '作者',

        // 404配置
        notFound: ['页面不存在'],
        backToHome: '返回首页',

        // 编辑此页信息配置
        // 项目地址
        docsRepo: 'https://github.com/longjie-cd/longjie-cd.github.io',
        // 分支
        docsBranch: 'main',
        // 文件存放地址
        docsDir: 'docs',
        // 页面规则
        editLinkPattern: ':repo/edit/:branch/:path',
        // 编辑此页的文案
        editLinkText: '编辑此页',

        // 顶栏
        navbar: [
            {
                text: '博客主页',
                link: '/',
            }, {
                text: '产品相关',
                link: '/pm/',
            }, {
                text: '开发相关',
                children: [
                    {
                        text: 'php',
                        link: '/php/',
                    },
                    {
                        text: 'python',
                        link: '/python/',
                    },
                    {
                        text: 'vue',
                        link: '/vue/',
                    }
                ],
            }, {
                text: '人工智能',
                children: [
                    {
                        text: 'opencv',
                        link: '/opencv/',
                    }
                ],
            }, {
                text: '通用技术',
                link: '/common/',
            }, {
                text: '常用命令',
                link: '/command.html',
            },
        ],

        // 侧栏
        sidebar: {
            '/guide/': [
                {
                    text: 'Guide',
                    children: ['/guide/README.md', '/guide/getting-started.md'],
                },
            ],
            '/reference/': [
                {
                    text: 'Reference',
                    children: ['/reference/cli.md', '/reference/config.md'],
                },
            ],
        },
    }),
})