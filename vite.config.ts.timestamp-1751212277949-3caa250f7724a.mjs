// vite.config.ts
import { Buffer } from "node:buffer";
import { basename, dirname, resolve } from "node:path";
import MarkdownItShiki from "file:///D:/kemiao-isyangs/node_modules/.pnpm/@shikijs+markdown-it@1.22.2/node_modules/@shikijs/markdown-it/dist/index.mjs";
import { rendererRich, transformerTwoslash } from "file:///D:/kemiao-isyangs/node_modules/.pnpm/@shikijs+twoslash@1.22.2_typescript@5.6.3/node_modules/@shikijs/twoslash/dist/index.mjs";
import Vue from "file:///D:/kemiao-isyangs/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.10_@types+node@22.8.6_terser@5.36.0__vue@3.5.12_typescript@5.6.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import fs from "file:///D:/kemiao-isyangs/node_modules/.pnpm/fs-extra@11.2.0/node_modules/fs-extra/lib/index.js";
import matter from "file:///D:/kemiao-isyangs/node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter/index.js";
import anchor from "file:///D:/kemiao-isyangs/node_modules/.pnpm/markdown-it-anchor@9.2.0_@types+markdown-it@14.1.2_markdown-it@14.1.0/node_modules/markdown-it-anchor/dist/markdownItAnchor.js";
import GitHubAlerts from "file:///D:/kemiao-isyangs/node_modules/.pnpm/markdown-it-github-alerts@0.3.0_markdown-it@14.1.0/node_modules/markdown-it-github-alerts/dist/index.mjs";
import LinkAttributes from "file:///D:/kemiao-isyangs/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js";
import MarkdownItMagicLink from "file:///D:/kemiao-isyangs/node_modules/.pnpm/markdown-it-magic-link@0.1.4_patch_hash=62c4qteoe6irwa6fplon47zw5e/node_modules/markdown-it-magic-link/dist/index.mjs";
import UnoCSS from "file:///D:/kemiao-isyangs/node_modules/.pnpm/unocss@0.63.6_postcss@8.4.47_rollup@4.24.3_typescript@5.6.3_vite@5.4.10_@types+node@22.8.6_terser@5.36.0_/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///D:/kemiao-isyangs/node_modules/.pnpm/unplugin-auto-import@0.18.3_@vueuse+core@11.2.0_vue@3.5.12_typescript@5.6.3___rollup@4.24.3/node_modules/unplugin-auto-import/dist/vite.js";
import IconsResolver from "file:///D:/kemiao-isyangs/node_modules/.pnpm/unplugin-icons@0.19.3_@vue+compiler-sfc@3.5.12/node_modules/unplugin-icons/dist/resolver.js";
import Icons from "file:///D:/kemiao-isyangs/node_modules/.pnpm/unplugin-icons@0.19.3_@vue+compiler-sfc@3.5.12/node_modules/unplugin-icons/dist/vite.js";
import Components from "file:///D:/kemiao-isyangs/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.26.2_rollup@4.24.3_vue@3.5.12_typescript@5.6.3_/node_modules/unplugin-vue-components/dist/vite.js";
import Markdown from "file:///D:/kemiao-isyangs/node_modules/.pnpm/unplugin-vue-markdown@0.26.2_rollup@4.24.3_vite@5.4.10_@types+node@22.8.6_terser@5.36.0_/node_modules/unplugin-vue-markdown/dist/vite.js";
import { VueRouterAutoImports } from "file:///D:/kemiao-isyangs/node_modules/.pnpm/unplugin-vue-router@0.10.8_rollup@4.24.3_vue-router@4.2.5_vue@3.5.12_typescript@5.6.3___vue@3.5.12_typescript@5.6.3_/node_modules/unplugin-vue-router/dist/index.js";
import VueRouter from "file:///D:/kemiao-isyangs/node_modules/.pnpm/unplugin-vue-router@0.10.8_rollup@4.24.3_vue-router@4.2.5_vue@3.5.12_typescript@5.6.3___vue@3.5.12_typescript@5.6.3_/node_modules/unplugin-vue-router/dist/vite.js";
import { defineConfig } from "file:///D:/kemiao-isyangs/node_modules/.pnpm/vite@5.4.10_@types+node@22.8.6_terser@5.36.0/node_modules/vite/dist/node/index.js";
import Inspect from "file:///D:/kemiao-isyangs/node_modules/.pnpm/vite-plugin-inspect@0.8.7_rollup@4.24.3_vite@5.4.10_@types+node@22.8.6_terser@5.36.0_/node_modules/vite-plugin-inspect/dist/index.mjs";
import Exclude from "file:///D:/kemiao-isyangs/node_modules/.pnpm/vite-plugin-optimize-exclude@0.0.1_vite@5.4.10_@types+node@22.8.6_terser@5.36.0_/node_modules/vite-plugin-optimize-exclude/dist/index.mjs";
import SVG from "file:///D:/kemiao-isyangs/node_modules/.pnpm/vite-svg-loader@5.1.0_vue@3.5.12_typescript@5.6.3_/node_modules/vite-svg-loader/index.js";
import TOC from "file:///D:/kemiao-isyangs/node_modules/.pnpm/markdown-it-table-of-contents@0.8.0/node_modules/markdown-it-table-of-contents/index.js";
import sharp from "file:///D:/kemiao-isyangs/node_modules/.pnpm/sharp@0.32.6/node_modules/sharp/lib/index.js";

// scripts/slugify.ts
import { remove } from "file:///D:/kemiao-isyangs/node_modules/.pnpm/diacritics@1.3.0/node_modules/diacritics/index.js";
var rControl = /[\u0000-\u001F]/g;
var rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g;
function slugify(str) {
  return remove(str).replace(rControl, "").replace(rSpecial, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
}

// vite.config.ts
var __vite_injected_original_dirname = "D:\\kemiao-isyangs";
var promises = [];
var vite_config_default = defineConfig({
  resolve: {
    alias: [
      { find: "~/", replacement: `${resolve(__vite_injected_original_dirname, "src")}/` }
    ]
  },
  optimizeDeps: {
    include: [
      "vue",
      "vue-router",
      "@vueuse/core",
      "dayjs",
      "dayjs/plugin/localizedFormat"
    ]
  },
  plugins: [
    UnoCSS(),
    VueRouter({
      extensions: [".vue", ".md"],
      routesFolder: "pages",
      logs: true,
      extendRoute(route) {
        const path = route.components.get("default");
        if (!path)
          return;
        if (!path.includes("projects.md") && path.endsWith(".md")) {
          const { data } = matter(fs.readFileSync(path, "utf-8"));
          route.addToMeta({
            frontmatter: data
          });
        }
      }
    }),
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({
      wrapperComponent: "WrapperPost",
      wrapperClasses: (id, code) => code.includes("@layout-full-width") ? "" : "prose m-auto slide-enter-content",
      headEnabled: true,
      exportFrontmatter: false,
      exposeFrontmatter: false,
      exposeExcerpt: false,
      markdownItOptions: {
        quotes: `""''`
      },
      async markdownItSetup(md) {
        md.use(await MarkdownItShiki({
          themes: {
            dark: "vitesse-dark",
            light: "vitesse-light"
          },
          defaultColor: false,
          cssVariablePrefix: "--s-",
          transformers: [
            transformerTwoslash({
              explicitTrigger: true,
              renderer: rendererRich()
            })
          ]
        }));
        md.use(anchor, {
          slugify,
          permalink: anchor.permalink.linkInsideHeader({
            symbol: "#",
            renderAttrs: () => ({ "aria-hidden": "true" })
          })
        });
        md.use(LinkAttributes, {
          matcher: (link) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        });
        md.use(TOC, {
          includeLevel: [1, 2, 3, 4],
          slugify,
          containerHeaderHtml: '<div class="table-of-contents-anchor"><div class="i-ri-menu-2-fill" /></div>'
        });
        md.use(MarkdownItMagicLink, {
          linksMap: {
            VueUse: "https://github.com/vueuse/vueuse",
            UnoCSS: "https://github.com/unocss/unocss",
            Vue: "https://github.com/vuejs/core",
            Vite: "https://github.com/vitejs/vite",
            ESLint: "https://github.com/eslint/eslint",
            TypeScript: "https://www.typescriptlang.org",
            Electron: "https://github.com/electron/electron",
            Homebrew: "https://brew.sh",
            VSCode: "https://code.visualstudio.com",
            OhMyZsh: "https://ohmyz.sh",
            iTerm2: "https://iterm2.com",
            MacOS: "https://www.apple.com/macos",
            Node: "https://nodejs.org",
            PNPM: "https://pnpm.io",
            Git: "https://git-scm.com",
            GitHub: "https://github.com",
            \u98DE\u4E66: "https://feishu.cn",
            \u817E\u8BAF\u4F1A\u8BAE: "https://meeting.tencent.com",
            SQLite: { link: "https://www.sqlite.org", imageUrl: "https://api.iconify.design/vscode-icons:file-type-sqlite.svg" },
            Vercel: { link: "https://vercel.com", imageUrl: "https://github.com/vercel.png" },
            \u53BB\u56FE\u56FE\u5E8A: { link: "https://7tu.top", imageUrl: "https://7.isyangs.cn/1/6553112f89de6-1.png" }
          },
          imageOverrides: [
            ["https://github.com/vuejs/core", "https://vuejs.org/logo.svg"],
            ["https://github.com/nuxt/nuxt", "https://nuxt.com/assets/design-kit/icon-green.svg"],
            ["https://github.com/vitejs/vite", "https://vitejs.dev/logo.svg"],
            ["https://github.com/sponsors", "https://github.com/github.png"],
            ["https://nuxtlabs.com", "https://github.com/nuxtlabs.png"],
            [/opencollective\.com\/vite/, "https://github.com/vitejs.png"],
            [/opencollective\.com\/elk/, "https://github.com/elk-zone.png"]
          ]
        });
        md.use(GitHubAlerts);
      },
      frontmatterPreprocess(frontmatter, options, id, defaults) {
        (() => {
          if (!id.endsWith(".md"))
            return;
          const route = basename(id, ".md");
          if (route === "index" || frontmatter.image || !frontmatter.title)
            return;
          const path = `og/${route}.png`;
          promises.push(
            fs.existsSync(`${id.slice(0, -3)}.png`) ? fs.copy(`${id.slice(0, -3)}.png`, `public/${path}`) : generateOg(frontmatter.title.replace(/\s-\s.*$/, "").trim(), `public/${path}`)
          );
          frontmatter.image = `https://isyangs.cn/${path}`;
        })();
        const head = defaults(frontmatter, options);
        return { head, frontmatter };
      }
    }),
    AutoImport({
      imports: [
        "vue",
        VueRouterAutoImports,
        "@vueuse/core"
      ]
    }),
    Components({
      extensions: ["vue", "md"],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: ""
        })
      ]
    }),
    Inspect(),
    Icons({
      defaultClass: "inline",
      defaultStyle: "vertical-align: sub;"
    }),
    SVG({
      svgo: false,
      defaultImport: "url"
    }),
    Exclude(),
    {
      name: "await",
      async closeBundle() {
        await Promise.all(promises);
      }
    }
  ],
  build: {
    rollupOptions: {
      onwarn(warning, next) {
        if (warning.code !== "UNUSED_EXTERNAL_IMPORT")
          next(warning);
      }
    }
  },
  ssgOptions: {
    formatting: "minify"
  }
});
var ogSVg = fs.readFileSync("./scripts/og-template.svg", "utf-8");
async function generateOg(title, output) {
  if (fs.existsSync(output))
    return;
  await fs.mkdir(dirname(output), { recursive: true });
  const lines = title.trim().split(/(.{0,30})(?:\s|$)/g).filter(Boolean);
  const data = {
    line1: lines[0],
    line2: lines[1],
    line3: lines[2]
  };
  const svg = ogSVg.replace(/\{\{([^}]+)\}\}/g, (_, name) => data[name] || "");
  console.log(`Generating ${output}`);
  try {
    await sharp(Buffer.from(svg)).resize(1200 * 1.1, 630 * 1.1).png().toFile(output);
  } catch (e) {
    console.error("Failed to generate og image", e);
  }
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic2NyaXB0cy9zbHVnaWZ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxca2VtaWFvLWlzeWFuZ3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGtlbWlhby1pc3lhbmdzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9rZW1pYW8taXN5YW5ncy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IEJ1ZmZlciB9IGZyb20gJ25vZGU6YnVmZmVyJ1xuaW1wb3J0IHsgYmFzZW5hbWUsIGRpcm5hbWUsIHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgTWFya2Rvd25JdFNoaWtpIGZyb20gJ0BzaGlraWpzL21hcmtkb3duLWl0J1xuaW1wb3J0IHsgcmVuZGVyZXJSaWNoLCB0cmFuc2Zvcm1lclR3b3NsYXNoIH0gZnJvbSAnQHNoaWtpanMvdHdvc2xhc2gnXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInXG5pbXBvcnQgYW5jaG9yIGZyb20gJ21hcmtkb3duLWl0LWFuY2hvcidcbmltcG9ydCBHaXRIdWJBbGVydHMgZnJvbSAnbWFya2Rvd24taXQtZ2l0aHViLWFsZXJ0cydcbmltcG9ydCBMaW5rQXR0cmlidXRlcyBmcm9tICdtYXJrZG93bi1pdC1saW5rLWF0dHJpYnV0ZXMnXG5pbXBvcnQgTWFya2Rvd25JdE1hZ2ljTGluayBmcm9tICdtYXJrZG93bi1pdC1tYWdpYy1saW5rJ1xuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tICd1bnBsdWdpbi1pY29ucy9yZXNvbHZlcidcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBNYXJrZG93biBmcm9tICd1bnBsdWdpbi12dWUtbWFya2Rvd24vdml0ZSdcbmltcG9ydCB7IFZ1ZVJvdXRlckF1dG9JbXBvcnRzIH0gZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlcidcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlci92aXRlJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBJbnNwZWN0IGZyb20gJ3ZpdGUtcGx1Z2luLWluc3BlY3QnXG5pbXBvcnQgRXhjbHVkZSBmcm9tICd2aXRlLXBsdWdpbi1vcHRpbWl6ZS1leGNsdWRlJ1xuaW1wb3J0IFNWRyBmcm9tICd2aXRlLXN2Zy1sb2FkZXInXG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgbWlzc2luZyB0eXBlc1xuaW1wb3J0IFRPQyBmcm9tICdtYXJrZG93bi1pdC10YWJsZS1vZi1jb250ZW50cydcbmltcG9ydCBzaGFycCBmcm9tICdzaGFycCdcbmltcG9ydCB7IHNsdWdpZnkgfSBmcm9tICcuL3NjcmlwdHMvc2x1Z2lmeSdcblxuY29uc3QgcHJvbWlzZXM6IFByb21pc2U8YW55PltdID0gW11cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7IGZpbmQ6ICd+LycsIHJlcGxhY2VtZW50OiBgJHtyZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpfS9gIH0sXG4gICAgXSxcbiAgfSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgaW5jbHVkZTogW1xuICAgICAgJ3Z1ZScsXG4gICAgICAndnVlLXJvdXRlcicsXG4gICAgICAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgICdkYXlqcycsXG4gICAgICAnZGF5anMvcGx1Z2luL2xvY2FsaXplZEZvcm1hdCcsXG4gICAgXSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIFVub0NTUygpLFxuXG4gICAgVnVlUm91dGVyKHtcbiAgICAgIGV4dGVuc2lvbnM6IFsnLnZ1ZScsICcubWQnXSxcbiAgICAgIHJvdXRlc0ZvbGRlcjogJ3BhZ2VzJyxcbiAgICAgIGxvZ3M6IHRydWUsXG4gICAgICBleHRlbmRSb3V0ZShyb3V0ZSkge1xuICAgICAgICBjb25zdCBwYXRoID0gcm91dGUuY29tcG9uZW50cy5nZXQoJ2RlZmF1bHQnKVxuICAgICAgICBpZiAoIXBhdGgpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgaWYgKCFwYXRoLmluY2x1ZGVzKCdwcm9qZWN0cy5tZCcpICYmIHBhdGguZW5kc1dpdGgoJy5tZCcpKSB7XG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBtYXR0ZXIoZnMucmVhZEZpbGVTeW5jKHBhdGgsICd1dGYtOCcpKVxuICAgICAgICAgIHJvdXRlLmFkZFRvTWV0YSh7XG4gICAgICAgICAgICBmcm9udG1hdHRlcjogZGF0YSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgVnVlKHtcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC5tZCQvXSxcbiAgICB9KSxcblxuICAgIE1hcmtkb3duKHtcbiAgICAgIHdyYXBwZXJDb21wb25lbnQ6ICdXcmFwcGVyUG9zdCcsXG4gICAgICB3cmFwcGVyQ2xhc3NlczogKGlkLCBjb2RlKSA9PiBjb2RlLmluY2x1ZGVzKCdAbGF5b3V0LWZ1bGwtd2lkdGgnKVxuICAgICAgICA/ICcnXG4gICAgICAgIDogJ3Byb3NlIG0tYXV0byBzbGlkZS1lbnRlci1jb250ZW50JyxcbiAgICAgIGhlYWRFbmFibGVkOiB0cnVlLFxuICAgICAgZXhwb3J0RnJvbnRtYXR0ZXI6IGZhbHNlLFxuICAgICAgZXhwb3NlRnJvbnRtYXR0ZXI6IGZhbHNlLFxuICAgICAgZXhwb3NlRXhjZXJwdDogZmFsc2UsXG4gICAgICBtYXJrZG93bkl0T3B0aW9uczoge1xuICAgICAgICBxdW90ZXM6ICdcIlwiXFwnXFwnJyxcbiAgICAgIH0sXG4gICAgICBhc3luYyBtYXJrZG93bkl0U2V0dXAobWQpIHtcbiAgICAgICAgbWQudXNlKGF3YWl0IE1hcmtkb3duSXRTaGlraSh7XG4gICAgICAgICAgdGhlbWVzOiB7XG4gICAgICAgICAgICBkYXJrOiAndml0ZXNzZS1kYXJrJyxcbiAgICAgICAgICAgIGxpZ2h0OiAndml0ZXNzZS1saWdodCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWZhdWx0Q29sb3I6IGZhbHNlLFxuICAgICAgICAgIGNzc1ZhcmlhYmxlUHJlZml4OiAnLS1zLScsXG4gICAgICAgICAgdHJhbnNmb3JtZXJzOiBbXG4gICAgICAgICAgICB0cmFuc2Zvcm1lclR3b3NsYXNoKHtcbiAgICAgICAgICAgICAgZXhwbGljaXRUcmlnZ2VyOiB0cnVlLFxuICAgICAgICAgICAgICByZW5kZXJlcjogcmVuZGVyZXJSaWNoKCksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSlcblxuICAgICAgICBtZC51c2UoYW5jaG9yLCB7XG4gICAgICAgICAgc2x1Z2lmeSxcbiAgICAgICAgICBwZXJtYWxpbms6IGFuY2hvci5wZXJtYWxpbmsubGlua0luc2lkZUhlYWRlcih7XG4gICAgICAgICAgICBzeW1ib2w6ICcjJyxcbiAgICAgICAgICAgIHJlbmRlckF0dHJzOiAoKSA9PiAoeyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSksXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pXG5cbiAgICAgICAgbWQudXNlKExpbmtBdHRyaWJ1dGVzLCB7XG4gICAgICAgICAgbWF0Y2hlcjogKGxpbms6IHN0cmluZykgPT4gL15odHRwcz86XFwvXFwvLy50ZXN0KGxpbmspLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgICAgICAgICAgcmVsOiAnbm9vcGVuZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG5cbiAgICAgICAgbWQudXNlKFRPQywge1xuICAgICAgICAgIGluY2x1ZGVMZXZlbDogWzEsIDIsIDMsIDRdLFxuICAgICAgICAgIHNsdWdpZnksXG4gICAgICAgICAgY29udGFpbmVySGVhZGVySHRtbDogJzxkaXYgY2xhc3M9XCJ0YWJsZS1vZi1jb250ZW50cy1hbmNob3JcIj48ZGl2IGNsYXNzPVwiaS1yaS1tZW51LTItZmlsbFwiIC8+PC9kaXY+JyxcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBUT0RPOiBcdTRGMThcdTUzMTZcdTYzODkgTWFya2Rvd25JdE1hZ2ljTGlua1xuICAgICAgICBtZC51c2UoTWFya2Rvd25JdE1hZ2ljTGluaywge1xuICAgICAgICAgIGxpbmtzTWFwOiB7XG4gICAgICAgICAgICBWdWVVc2U6ICdodHRwczovL2dpdGh1Yi5jb20vdnVldXNlL3Z1ZXVzZScsXG4gICAgICAgICAgICBVbm9DU1M6ICdodHRwczovL2dpdGh1Yi5jb20vdW5vY3NzL3Vub2NzcycsXG4gICAgICAgICAgICBWdWU6ICdodHRwczovL2dpdGh1Yi5jb20vdnVlanMvY29yZScsXG4gICAgICAgICAgICBWaXRlOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpdGVqcy92aXRlJyxcbiAgICAgICAgICAgIEVTTGludDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lc2xpbnQvZXNsaW50JyxcbiAgICAgICAgICAgIFR5cGVTY3JpcHQ6ICdodHRwczovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcnLFxuICAgICAgICAgICAgRWxlY3Ryb246ICdodHRwczovL2dpdGh1Yi5jb20vZWxlY3Ryb24vZWxlY3Ryb24nLFxuICAgICAgICAgICAgSG9tZWJyZXc6ICdodHRwczovL2JyZXcuc2gnLFxuICAgICAgICAgICAgVlNDb2RlOiAnaHR0cHM6Ly9jb2RlLnZpc3VhbHN0dWRpby5jb20nLFxuICAgICAgICAgICAgT2hNeVpzaDogJ2h0dHBzOi8vb2hteXouc2gnLFxuICAgICAgICAgICAgaVRlcm0yOiAnaHR0cHM6Ly9pdGVybTIuY29tJyxcbiAgICAgICAgICAgIE1hY09TOiAnaHR0cHM6Ly93d3cuYXBwbGUuY29tL21hY29zJyxcbiAgICAgICAgICAgIE5vZGU6ICdodHRwczovL25vZGVqcy5vcmcnLFxuICAgICAgICAgICAgUE5QTTogJ2h0dHBzOi8vcG5wbS5pbycsXG4gICAgICAgICAgICBHaXQ6ICdodHRwczovL2dpdC1zY20uY29tJyxcbiAgICAgICAgICAgIEdpdEh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbScsXG4gICAgICAgICAgICBcdTk4REVcdTRFNjY6ICdodHRwczovL2ZlaXNodS5jbicsXG4gICAgICAgICAgICBcdTgxN0VcdThCQUZcdTRGMUFcdThCQUU6ICdodHRwczovL21lZXRpbmcudGVuY2VudC5jb20nLFxuICAgICAgICAgICAgU1FMaXRlOiB7IGxpbms6ICdodHRwczovL3d3dy5zcWxpdGUub3JnJywgaW1hZ2VVcmw6ICdodHRwczovL2FwaS5pY29uaWZ5LmRlc2lnbi92c2NvZGUtaWNvbnM6ZmlsZS10eXBlLXNxbGl0ZS5zdmcnIH0sXG4gICAgICAgICAgICBWZXJjZWw6IHsgbGluazogJ2h0dHBzOi8vdmVyY2VsLmNvbScsIGltYWdlVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC5wbmcnIH0sXG4gICAgICAgICAgICBcdTUzQkJcdTU2RkVcdTU2RkVcdTVFOEE6IHsgbGluazogJ2h0dHBzOi8vN3R1LnRvcCcsIGltYWdlVXJsOiAnaHR0cHM6Ly83LmlzeWFuZ3MuY24vMS82NTUzMTEyZjg5ZGU2LTEucG5nJyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW1hZ2VPdmVycmlkZXM6IFtcbiAgICAgICAgICAgIFsnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL2NvcmUnLCAnaHR0cHM6Ly92dWVqcy5vcmcvbG9nby5zdmcnXSxcbiAgICAgICAgICAgIFsnaHR0cHM6Ly9naXRodWIuY29tL251eHQvbnV4dCcsICdodHRwczovL251eHQuY29tL2Fzc2V0cy9kZXNpZ24ta2l0L2ljb24tZ3JlZW4uc3ZnJ10sXG4gICAgICAgICAgICBbJ2h0dHBzOi8vZ2l0aHViLmNvbS92aXRlanMvdml0ZScsICdodHRwczovL3ZpdGVqcy5kZXYvbG9nby5zdmcnXSxcbiAgICAgICAgICAgIFsnaHR0cHM6Ly9naXRodWIuY29tL3Nwb25zb3JzJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIucG5nJ10sXG4gICAgICAgICAgICBbJ2h0dHBzOi8vbnV4dGxhYnMuY29tJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9udXh0bGFicy5wbmcnXSxcbiAgICAgICAgICAgIFsvb3BlbmNvbGxlY3RpdmVcXC5jb21cXC92aXRlLywgJ2h0dHBzOi8vZ2l0aHViLmNvbS92aXRlanMucG5nJ10sXG4gICAgICAgICAgICBbL29wZW5jb2xsZWN0aXZlXFwuY29tXFwvZWxrLywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9lbGstem9uZS5wbmcnXSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KVxuXG4gICAgICAgIG1kLnVzZShHaXRIdWJBbGVydHMpXG4gICAgICB9LFxuICAgICAgZnJvbnRtYXR0ZXJQcmVwcm9jZXNzKGZyb250bWF0dGVyLCBvcHRpb25zLCBpZCwgZGVmYXVsdHMpIHtcbiAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICBpZiAoIWlkLmVuZHNXaXRoKCcubWQnKSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIGNvbnN0IHJvdXRlID0gYmFzZW5hbWUoaWQsICcubWQnKVxuICAgICAgICAgIGlmIChyb3V0ZSA9PT0gJ2luZGV4JyB8fCBmcm9udG1hdHRlci5pbWFnZSB8fCAhZnJvbnRtYXR0ZXIudGl0bGUpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICBjb25zdCBwYXRoID0gYG9nLyR7cm91dGV9LnBuZ2BcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKFxuICAgICAgICAgICAgZnMuZXhpc3RzU3luYyhgJHtpZC5zbGljZSgwLCAtMyl9LnBuZ2ApXG4gICAgICAgICAgICAgID8gZnMuY29weShgJHtpZC5zbGljZSgwLCAtMyl9LnBuZ2AsIGBwdWJsaWMvJHtwYXRofWApXG4gICAgICAgICAgICAgIDogZ2VuZXJhdGVPZyhmcm9udG1hdHRlci50aXRsZSEucmVwbGFjZSgvXFxzLVxccy4qJC8sICcnKS50cmltKCksIGBwdWJsaWMvJHtwYXRofWApLFxuICAgICAgICAgIClcbiAgICAgICAgICAvLyBUT0RPOiBcdTUxQ0ZcdTVDMTFcdTk4NzlcdTc2RUVcdTU3REZcdTU0MERcdTUxOTdcdTRGNTlcbiAgICAgICAgICBmcm9udG1hdHRlci5pbWFnZSA9IGBodHRwczovL2lzeWFuZ3MuY24vJHtwYXRofWBcbiAgICAgICAgfSkoKVxuICAgICAgICBjb25zdCBoZWFkID0gZGVmYXVsdHMoZnJvbnRtYXR0ZXIsIG9wdGlvbnMpXG4gICAgICAgIHJldHVybiB7IGhlYWQsIGZyb250bWF0dGVyIH1cbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgIFZ1ZVJvdXRlckF1dG9JbXBvcnRzLFxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgIF0sXG4gICAgfSksXG5cbiAgICBDb21wb25lbnRzKHtcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXG4gICAgICBkdHM6IHRydWUsXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIEljb25zUmVzb2x2ZXIoe1xuICAgICAgICAgIGNvbXBvbmVudFByZWZpeDogJycsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9KSxcblxuICAgIEluc3BlY3QoKSxcblxuICAgIEljb25zKHtcbiAgICAgIGRlZmF1bHRDbGFzczogJ2lubGluZScsXG4gICAgICBkZWZhdWx0U3R5bGU6ICd2ZXJ0aWNhbC1hbGlnbjogc3ViOycsXG4gICAgfSksXG5cbiAgICBTVkcoe1xuICAgICAgc3ZnbzogZmFsc2UsXG4gICAgICBkZWZhdWx0SW1wb3J0OiAndXJsJyxcbiAgICB9KSxcblxuICAgIEV4Y2x1ZGUoKSxcblxuICAgIHtcbiAgICAgIG5hbWU6ICdhd2FpdCcsXG4gICAgICBhc3luYyBjbG9zZUJ1bmRsZSgpIHtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG5cbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvbndhcm4od2FybmluZywgbmV4dCkge1xuICAgICAgICBpZiAod2FybmluZy5jb2RlICE9PSAnVU5VU0VEX0VYVEVSTkFMX0lNUE9SVCcpXG4gICAgICAgICAgbmV4dCh3YXJuaW5nKVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIHNzZ09wdGlvbnM6IHtcbiAgICBmb3JtYXR0aW5nOiAnbWluaWZ5JyxcbiAgfSxcbn0pXG5cbi8vIFRPRE86IFx1NEYxOFx1NTMxNiBvZyBcdTZBMjFcdTY3N0ZcbmNvbnN0IG9nU1ZnID0gZnMucmVhZEZpbGVTeW5jKCcuL3NjcmlwdHMvb2ctdGVtcGxhdGUuc3ZnJywgJ3V0Zi04JylcblxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVPZyh0aXRsZTogc3RyaW5nLCBvdXRwdXQ6IHN0cmluZykge1xuICBpZiAoZnMuZXhpc3RzU3luYyhvdXRwdXQpKVxuICAgIHJldHVyblxuXG4gIGF3YWl0IGZzLm1rZGlyKGRpcm5hbWUob3V0cHV0KSwgeyByZWN1cnNpdmU6IHRydWUgfSlcbiAgLy8gYnJlYWtsaW5lIGV2ZXJ5IDMwIGNoYXJzXG4gIGNvbnN0IGxpbmVzID0gdGl0bGUudHJpbSgpLnNwbGl0KC8oLnswLDMwfSkoPzpcXHN8JCkvZykuZmlsdGVyKEJvb2xlYW4pXG5cbiAgY29uc3QgZGF0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICBsaW5lMTogbGluZXNbMF0sXG4gICAgbGluZTI6IGxpbmVzWzFdLFxuICAgIGxpbmUzOiBsaW5lc1syXSxcbiAgfVxuICBjb25zdCBzdmcgPSBvZ1NWZy5yZXBsYWNlKC9cXHtcXHsoW159XSspXFx9XFx9L2csIChfLCBuYW1lKSA9PiBkYXRhW25hbWVdIHx8ICcnKVxuXG4gIGNvbnNvbGUubG9nKGBHZW5lcmF0aW5nICR7b3V0cHV0fWApXG4gIHRyeSB7XG4gICAgYXdhaXQgc2hhcnAoQnVmZmVyLmZyb20oc3ZnKSlcbiAgICAgIC5yZXNpemUoMTIwMCAqIDEuMSwgNjMwICogMS4xKVxuICAgICAgLnBuZygpXG4gICAgICAudG9GaWxlKG91dHB1dClcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZW5lcmF0ZSBvZyBpbWFnZScsIGUpXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxca2VtaWFvLWlzeWFuZ3NcXFxcc2NyaXB0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxca2VtaWFvLWlzeWFuZ3NcXFxcc2NyaXB0c1xcXFxzbHVnaWZ5LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9rZW1pYW8taXN5YW5ncy9zY3JpcHRzL3NsdWdpZnkudHNcIjsvLyBzdHJpbmcuanMgc2x1Z2lmeSBkcm9wcyBub24gYXNjaWkgY2hhcnMgc28gd2UgaGF2ZSB0b1xuLy8gdXNlIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uIGhlcmVcbmltcG9ydCB7IHJlbW92ZSB9IGZyb20gJ2RpYWNyaXRpY3MnXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG5jb25zdCByQ29udHJvbCA9IC9bXFx1MDAwMC1cXHUwMDFGXS9nXG5jb25zdCByU3BlY2lhbCA9IC9bXFxzfmAhQCMkJV4mKigpXFwtXys9W1xcXXt9fFxcXFw7OlwiJzw+LC4/L10rL2dcblxuZXhwb3J0IGZ1bmN0aW9uIHNsdWdpZnkoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gKFxuICAgIHJlbW92ZShzdHIpXG4gICAgICAvLyBSZW1vdmUgY29udHJvbCBjaGFyYWN0ZXJzXG4gICAgICAucmVwbGFjZShyQ29udHJvbCwgJycpXG4gICAgICAvLyBSZXBsYWNlIHNwZWNpYWwgY2hhcmFjdGVyc1xuICAgICAgLnJlcGxhY2UoclNwZWNpYWwsICctJylcbiAgICAgIC8vIFJlbW92ZSBjb250aW51b3Mgc2VwYXJhdG9yc1xuICAgICAgLnJlcGxhY2UoLy17Mix9L2csICctJylcbiAgICAgIC8vIFJlbW92ZSBwcmVmaXhpbmcgYW5kIHRyYWlsaW5nIHNlcGFydG9yc1xuICAgICAgLnJlcGxhY2UoL14tK3wtKyQvZywgJycpXG4gICAgICAvLyBlbnN1cmUgaXQgZG9lc24ndCBzdGFydCB3aXRoIGEgbnVtYmVyICgjMTIxKVxuICAgICAgLnJlcGxhY2UoL14oXFxkKS8sICdfJDEnKVxuICAgICAgLy8gbG93ZXJjYXNlXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlPLFNBQVMsY0FBYztBQUNoUSxTQUFTLFVBQVUsU0FBUyxlQUFlO0FBQzNDLE9BQU8scUJBQXFCO0FBQzVCLFNBQVMsY0FBYywyQkFBMkI7QUFDbEQsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sUUFBUTtBQUNmLE9BQU8sWUFBWTtBQUNuQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxvQkFBb0I7QUFDM0IsT0FBTyx5QkFBeUI7QUFDaEMsT0FBTyxZQUFZO0FBQ25CLE9BQU8s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
