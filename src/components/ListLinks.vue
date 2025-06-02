<script setup lang="ts">
defineProps<{ links: Record<string, any[]> }>()

function slug(name: string) {
  return name.toLowerCase().replace(/[\s\\/]+/g, '-')
}
</script>

<template>
  <div class="max-w-300 mx-auto">
    <div
      v-for="key, cidx in Object.keys(links)" :key="key" slide-enter my10
      :style="{ '--enter-stage': cidx + 1 }"
    >
      <div
        :id="slug(key)"
        select-none h20 pointer-events-none slide-enter text-center
        :style="{
          '--enter-stage': cidx - 2,
          '--enter-step': '60ms',
        }"
      >
        <span text-1.5em font-bold>{{ key }}</span>
      </div>
      <div
        class="links-grid py-2 max-w-500 w-max mx-auto"
        grid="~ cols-1 md:cols-2 gap-4 lg:cols-3"
      >
        <a
          v-for="item, idx in links[key]"
          :key="idx"
          class="item relative flex items-center"
          :href="item.link"
          target="_blank"
          :title="item.name"
        >
          <div v-if="item.logo" class="pt-2 pr-5 flex-shrink-0">
            <img :src="item.logo" :alt="item.name" class="w15 h15 object-cover rounded-sm">
          </div>
          <div class="w-200px flex-auto text-truncate">
            <div class="text-normal text-truncate">{{ item.name }}</div>
            <div class="desc text-sm opacity-50 font-normal text-truncate" v-html="item.desc" />
          </div>
        </a>
      </div>
    </div>
    <div class="prose pb5 mx-auto mt20">
      <blockquote op75>
        <p class="font-bold text-18px">
          欢迎各位提交友链，请按照以下格式提交 <i class="i-twemoji-winking-face-with-tongue" />
        </p>
        <pre class="overflow-auto"><code>name: '喵落阁 (站点名称)'</code>
<code>link: 'https://blog-v3.kemeow.top (站点链接)'</code>
<code>desc: '愿你看清一切真相后，依旧热爱你的家人和朋友。 (站点描述)'</code>
<code>logo: 'https://cn.cravatar.com/avatar/1F6C8947D35A8186A1647009BA8BC5F2?size=256 (站点图标)'</code></pre>
      </blockquote>
    </div>
  </div>
  <div>
    <div class="table-of-contents">
      <div class="table-of-contents-anchor">
        <div class="i-ri-menu-2-fill" />
      </div>
      <ul>
        <li v-for="key of Object.keys(links)" :key="key">
          <a :href="`#${slug(key)}`">{{ key }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.links-grid a.item {
  background: transparent;
  font-size: 1.1rem;
  width: 280px;
  max-width: 100%;
  padding: 0.5rem 0.875rem 0.875rem;
  border-radius: 6px;
}

.links-grid a.item:hover {
  background: #88888811;
}

/* 确保代码块文字颜色在白天模式为深灰色 */
.prose pre code {
  color: #333 !important;
}

/* 修复深色模式支持 */
:root.dark .prose pre code {
  color: #fff !important;
}

@media (prefers-color-scheme: dark) {
  .prose pre code {
    color: #fff !important;
  }
}
</style>
