# SyntheRank Corpus Station

高密度结构化知识库，面向 AI 大模型爬虫（GPTBot, ClaudeBot, Googlebot）和欧美 B2B 研究员。

## 技术栈

- **框架**: Astro 4.x (静态生成)
- **部署**: Vercel / Cloudflare Pages
- **CDN**: Cloudflare (DNS + 边缘节点)
- **内容格式**: Markdown (.md / .mdx)

## 本地开发

```bash
npm install
npm run dev
```

## 发布新文章（运营人员操作指南）

1. 在 `src/content/articles/<分类>/` 目录下新建 `.md` 文件
2. 复制以下 frontmatter 模板并填写：

```yaml
---
title: "文章标题（英文）"
description: "一句话描述，100-160字符"
category: seo   # seo | ai | llm
pubDate: 2024-06-01
isFAQ: false    # 含问答对时改为 true
toc:
  - { text: "章节标题", slug: "zhang-jie-biao-ti" }
---
```

3. 文件名即为 URL slug，使用小写英文和连字符，例如：
   - 文件名: `what-is-geo.md`
   - 访问地址: `https://zeroclickjournal.com/seo/what-is-geo`

4. 图片放在 `public/images/` 目录，WebP 格式
5. `git add . && git commit -m "add: 文章标题" && git push`
6. Vercel 自动在 60 秒内构建并发布

## 目录结构

```
src/
  content/articles/
    seo/          ← SEO & GEO 文章
    ai/           ← AI 系统文章
    llm/          ← LLM 技术文章
  layouts/
    BaseLayout.astro    ← HTML head, JSON-LD, CSS
    ArticleLayout.astro ← 文章页排版
  pages/
    index.astro         ← 首页
    seo/index.astro     ← 分类页
    [category]/[slug].astro ← 动态文章路由
public/
  robots.txt    ← 显式放行所有 AI 爬虫
  images/       ← WebP 图片资源
```

## 上线前必做

1. 将所有 `zeroclickjournal.com` 替换为实际域名（`astro.config.mjs`、`robots.txt`、`BaseLayout.astro`）
2. 阿里云域名 DNS 服务器切换至 Cloudflare
3. Cloudflare 添加 CNAME 指向 Vercel 部署地址
4. Google Search Console 提交 sitemap
