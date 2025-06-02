import type { FeedOptions, Item } from 'feed'
import { dirname } from 'node:path'
import fg from 'fast-glob'
import { Feed } from 'feed'
import fs from 'fs-extra'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

// TODO: 减少配置冗余
// TODO: 参考纸鹿的 Feed 生成逻辑重构
// https://github.com/L33Z22L11/blog-v3/blob/main/server/routes/atom.xml.get.ts
const DOMAIN = 'https://blog-v3.kemiaosw.top'
const AUTHOR = {
  name: '克喵爱吃卤面',
  email: 'me@kemiaosw.top',
  link: DOMAIN,
}
const markdown = MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
})

async function run() {
  await buildBlogFeed()
}

async function buildBlogFeed() {
  const files = await fg('pages/posts/*.md')

  const options = {
    title: '克喵爱吃卤面',
    description: '喵落阁',
    id: 'https://blog-v3.kemiaosw.top/',
    link: 'https://blog-v3.kemiaosw.top/',
    copyright: 'CC BY-NC-SA 4.0 2025 © 克喵爱吃卤面',
    feedLinks: {
      atom: 'https://blog-v3.kemiaosw.top/feed.xml',
    },
  }
  const posts: any[] = (
    await Promise.all(
      files.filter(i => !i.includes('index'))
        .map(async (i) => {
          const raw = await fs.readFile(i, 'utf-8')
          const { data, content } = matter(raw)

          const html = markdown.render(content)
            .replace('src="/', `src="${DOMAIN}/`)

          if (data.image?.startsWith('/'))
            data.image = DOMAIN + data.image

          return {
            ...data,
            date: new Date(data.date),
            content: html,
            author: [AUTHOR],
            link: DOMAIN + i.replace(/^pages(.+)\.md$/, '$1'),
          }
        }),
    ))
    .filter(Boolean)

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  await writeFeed('feed', options, posts)
}

async function writeFeed(name: string, options: FeedOptions, items: Item[]) {
  options.author = AUTHOR
  options.image = 'https://wsrv.nl/?url=github.com/Kemeow815.png'
  options.favicon = 'https://wsrv.nl/?url=github.com/Kemeow815.png%3fsize=96&mask=circle'

  const feed = new Feed(options)

  items.forEach(item => feed.addItem(item))
  // items.forEach(i=> console.log(i.title, i.date))

  await fs.ensureDir(dirname(`./dist/${name}`))
  await fs.writeFile(`./dist/${name}.xml`, feed.atom1(), 'utf-8')
}

run()
