---
slug: nuxt-upgrade
title: (Nuxt) nuxt build 오류
description:
<!-- image: "./images/preview.png" -->
authors: [wannysim]
tags: [nuxt, troubleshooting]
enableComments: true
---

GitHub Codespaces로 작업 중에 nuxt build에 오류가 발생했습니다.

<!-- truncate -->

Node 버전은 v19였습니다.

![error-log](./images/error-log.png "error-log"")

로그를 확인해보니 nuxt 쪽에 문제가 있어보입니다.

```
# This file contains the result of Yarn building a package (admin@workspace:apps/admin)
# Script name: postinstall

Nuxi 3.3.1

 ERROR  The "name" argument must be specified

  at new NodeError (node:internal/errors:399:5)
  at Performance.mark (node:internal/perf/performance:125:13)
  at normalizedModule (/workspaces/vinami/node_modules/@nuxt/kit/dist/index.mjs:168:30)
  at async installModule (/workspaces/vinami/node_modules/@nuxt/kit/dist/index.mjs:451:15)
  at async initNuxt (/workspaces/vinami/node_modules/nuxt/dist/index.mjs:2469:7)
  at async loadNuxt (/workspaces/vinami/node_modules/nuxt/dist/index.mjs:2523:5)
  at async loadNuxt (/workspaces/vinami/node_modules/@nuxt/kit/dist/index.mjs:539:19)
  at async Object.invoke (/workspaces/vinami/node_modules/nuxi/dist/chunks/prepare.mjs:37:18)
  at async _main (/workspaces/vinami/node_modules/nuxi/dist/cli.mjs:49:20)
```

구글에 `ERROR  The "name" argument must be specified`로 검색해보니 다행히 nuxt github에 이미 누군가 [이슈](https://github.com/nuxt/nuxt/issues/19682)를 등록해뒀습니다.

예상대로 nuxt와 업데이트된 Node v19간에 문제가 있으니, Node를 다운그레이드하라고 합니다.
개인적인 성격상 다운그레이드는 참을 수가 없습니다.

이슈가 등록된 시점으로 부터 1달 넘게 지났으니, 차라리 nuxt를 업데이트하겠습니다.

게시글 작성시점 기준 공식 홈페이지에 [3.4 버전](https://nuxt.com/blog/v3-4)이 나왔다는 소식이 있네요.

1. nuxt CLI를 지원하는 nuxi 설치

```
yarn add -D nuxi
```

2. nuxt 업그레이드

```
yarn nuxi upgrade --force
```

다시 build 해보니 잘 됩니다!
