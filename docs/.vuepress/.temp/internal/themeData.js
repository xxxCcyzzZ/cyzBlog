export const themeData = JSON.parse("{\"logo\":\"/images/navimg.png\",\"navbar\":[{\"text\":\"我的\",\"children\":[{\"text\":\"GitHub\",\"link\":\"https://github.com/xxxCcyzzZ\"},{\"text\":\"Gitee\",\"link\":\"https://gitee.com/cyzsGitee\"}]},{\"text\":\"笔记记录\",\"link\":\"/Blog/\"},{\"text\":\"资源\",\"children\":[{\"text\":\"资料\",\"link\":\"/404\"},{\"text\":\"软件/工具\",\"link\":\"/404\"}]},{\"text\":\"首页\",\"link\":\"/\"}],\"sidebar\":{\"/Blog/\":[{\"text\":\"笔记\",\"collapsible\":true,\"children\":[{\"text\":\"测试笔记\",\"link\":\"/Blog/Notes/demo\"}]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
