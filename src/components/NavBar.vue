<script setup lang="ts">
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const { y: scroll } = useWindowScroll()
</script>

<template>
  <header class="header z-40">
    <RouterLink class="w-12 h-12 absolute xl:fixed m-5 select-none outline-none" to="/" focusable="false">
      <Logo />
    </RouterLink>
    <button
      title="Scroll to top" fixed right-3 bottom-3 w-10 h-10 hover:op100 rounded-full hover-bg-hex-8883 transition
      duration-300 z-100 print:hidden :class="scroll > 300 ? 'op30' : 'op0! pointer-events-none'" @click="toTop()"
    >
      <div i-ri-arrow-up-line />
    </button>
    <nav class="nav">
      <div class="spacer" />
      <div class="right" print:op0>
        <RouterLink to="/posts" title="文章">
          <span class="lt-md:hidden">文章</span>
          <div i-ri-article-line md:hidden />
        </RouterLink>
        <RouterLink to="/projects" title="项目">
          <span class="lt-md:hidden">项目</span>
          <div i-ri-lightbulb-line class="md:hidden" />
        </RouterLink>
        <RouterLink to="/links" title="友链">
          <span class="lt-md:hidden">友链</span>
          <div i-ri-links-line class="md:hidden" />
        </RouterLink>
        <a href="https://t.me/KemiaoJun" target="_blank" title="Telegram" class="lt-md:hidden">
          <div i-streamline-telegram />
        </a>
        <a href="mailto:me@kemiaosw.top" target="_blank" title="邮箱" class="lt-md:hidden">
          <div i-fontisto-email />
        </a>
        <a href="https://github.com/Kemeow815" target="_blank" title="GitHub" class="lt-md:hidden">
          <div i-ph-github-logo-bold />
        </a>
        <a href="/feed.xml" target="_blank" title="订阅源" class="lt-md:hidden">
          <div i-ph-rss-simple-bold />
        </a>
        <ToggleTheme />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
