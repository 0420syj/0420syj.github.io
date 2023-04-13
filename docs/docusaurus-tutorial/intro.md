---
sidebar_position: 1
---

# 시작하기

:::info

내용의 일부는 ChatGPT-4를 활용하여 생성되었습니다.

:::

지금 보고있는 블로그는 [Docusaurus](https://docusaurus.io)를 이용하여 만들어졌습니다.

Docusaurus는 Meta에서 만든 오픈소스 정적 웹 사이트를 생성하는 도구로, React 및 Markdown을 기반으로 합니다.
이 가이드에서는 Docusaurus를 사용하여 나만의 GitHub.io 블로그를 만드는 방법에 대해 설명합니다.

## 준비 사항

- [Node.js](https://nodejs.org/en/download) (v16.14 이상)
- [Yarn](https://classic.yarnpkg.com/lang/en/) (선택 사항, npm을 사용해도 괜찮습니다.)
- [GitHub](https://github.com/) 계정

## 1. Docusaurus 프로젝트 생성하기

첫 번째로, 터미널에서 다음 명령어를 실행하여 Docusaurus 프로젝트를 생성합니다.

```bash
npx create-docusaurus@latest my-blog classic
cd my-blog
```

`--typescript` 옵션을 사용하여 TypeScript를 사용할 수도 있습니다.

```bash
npx create-docusaurus@latest my-blog classic --typescript
cd my-blog
```

## 2. Docusaurus 프로젝트 구성하기

프로젝트 폴더에 있는 docusaurus.config.js 파일을 편집하여 웹 사이트의 메타데이터를 설정합니다.

```javascript
module.exports = {
  title: '내 블로그',
  tagline: 'Docusaurus로 만든 블로그',
  url: 'https://<your-github-username>.github.io',
  baseUrl: '/',
  ...
};
```

## 3. 블로그 포스트 작성하기

`my-blog/blog` 폴더에서 새로운 Markdown 파일을 작성하여 블로그 포스트를 추가할 수 있습니다.

예를 들어, `2023-04-13-my-first-post.md` 파일을 만들고 다음 내용을 추가합니다.

```markdown
---
title: "내 첫번째 포스트"
author: "홍길동"
author_url: "https://github.com/<your-github-username>"
author_image_url: "https://github.com/<your-github-username>.png"
tags: [hello, docusaurus]
date: 2023-04-13
---

첫 번째 블로그 포스트입니다! Docusaurus를 사용하여 GitHub.io에 블로그를 만들고 있습니다.
```

## 4. 블로그 로컬에서 실행하기

다음 명령어를 실행하여 로컬에서 블로그를 실행하고 브라우저에서 [http://localhost:3000](http://localhost:3000)로 접속할 수 있습니다.

```bash
yarn start
```
