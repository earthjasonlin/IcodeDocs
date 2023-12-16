module.exports = {
    title: "ICode Python 文档",
    description: "ICode.org Python 文档",
    head: [
        [
            "script",
            {},
            `
            var _paq = window._paq = window._paq || [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//matomo.loliquq.cn/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '17']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `,
        ],
    ],
    locales: {
        "/": {
            lang: "zh-CN",
            title: "ICode Python 文档",
            description: "ICode.org Python 文档",
        },
    },
    themeConfig: {
        // 导航栏链接
        nav: [
            {
                text: "意见反馈",
                link: "https://git.loliquq.cn/earthjasonlin/IcodeDocs/issues/new",
            },
        ],

        // 侧边栏
        sidebarDepth: 10,
        sidebar: [
            ["/Dev", "Dev 机器人"],
            ["/Spaceship", "Spaceship 飞船"],
            ["/ABOUT", "关于"],
        ],

        // Git 仓库和编辑链接
        repo: "https://git.loliquq.cn/earthjasonlin/IcodeDocs.git",
        repoLabel: "查看源码",
        editLinks: false,
        editLinkText: "帮助我们改善此页面！",

        // 页面滚动效果
        smoothScroll: true,

        // 最后更新时间
        lastUpdated: "最后更新",
    },
    markdown: {
        lineNumbers: true,
    },
};
