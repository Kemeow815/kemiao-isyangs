---
title: Projects - 克喵爱吃老妈
display: 我的项目
description: 这是我的项目列表，你可以在这里找到我所有的项目。
plum: true
wrapperClass: 'text-center'
projects:
  '我的项目':
    - name: 'KeMiao Music'
      link: 'https://github.com/Kemeow815/HeoMusic'
      desc: '基于HeoMusic的自用版本，主打简洁美观'
      icon: 'i-mdi-light-music saturate-0'
    - name: 'KeMiao Blog'
      link: 'https://github.com/Kemeow815/blog-v3'
      desc: '基于 nuxt3 的自用博客，感谢纸鹿开源'
      icon: 'i-hugeicons-blogger s-3em'
    - name: 'KeMiao 资源分享'
      link: 'https://github.com/Kemeow815/kemiaofx'
      desc: '克喵的资源分享仓库'
      icon: 'i-lucide-store s-3em'
    - name: 'KeMiao 网站列表'
      link: 'https://github.com/Kemeow815/kemiao-s-links'
      desc: '克喵的网站列表'
      icon: 'i-gg-list s-3em'
    - name: 'KeMiao 影视播放器'
      link: 'https://github.com/Kemeow815/LibreTV-kemiao'
      desc: '基于 LibreTV 的影视播放器'
      icon: 'i-tabler-movie saturate-0'
    - name: 'KeMiao 热榜'
      link: 'https://github.com/Kemeow815/kemiao-news'
      desc: '克喵的每日热榜'
      icon: 'i-tabler-news s-3em'
    - name: 'KeMiao 本博客自改源码'
      link: 'https://github.com/Kemeow815/kemiao-isyangs'
      desc: '本博客的自改源码'
      icon: 'i-tabler-code s-3em'
    - name: 'KeMiao 网站监测'
      link: 'https://github.com/Kemeow815/Uptime-Status-kemiao'
      desc: '克喵的网站监测'
      icon: 'i-pajamas-status-health saturate-0'
---

<!-- @layout-full-width -->

<ListProjects :projects="frontmatter.projects" />
