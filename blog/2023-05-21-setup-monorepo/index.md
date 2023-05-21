---
slug: setup-monorepo
title: Yarn workspace로 Monorepo 구성하기 (Next.js + Storybook) 🌐
description: "Yarn workspace로 Monorepo 구성하기 (Next.js + Storybook) 🌐"
image: "./images/preview.png"
authors: [wannysim]
tags: [yarn, monorepo, nextjs, storybook]
enableComments: true
---

Yarn workspace를 이용해서 Monorepo 프로젝트르 만들어봅니다.

<!-- truncate -->

## Yarn workspace란? 🤔

Yarn workspace는 여러 프로젝트를 하나의 프로젝트로 관리할 수 있도록 도와주는 기능입니다.

## 시작하기 🚀

### 1. yarn init

yarn으로 프로젝트를 생성합니다.

```bash
mkdir frontend-template
cd frontend-template
yarn init
code . # vscode 실행
```

### 2. yarn berry(PnP)로 변경

yarn berry로 변경합니다.

```bash
yarn set version berry
yarn dlx @yarnpkg/sdks vscode # vscode 설정
yarn # yarn install
```

### 3. .gitignore 설정

```.gitignore title=".gitignore"
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
node_modules # node_modules는 무시
```

### 4. yarn workspace 설정

구조는 아래와 같습니다.

```bash
. # root
├── apps
│   └── app1 # 프로젝트 (Next.js)
└── common
    └── ui # 공통으로 사용하는 모듈 (@storybook/nextjs)
```

#### 4-1. root package.json 수정

root 디렉토리에 `package.json`을 아래와 같이 수정합니다.

```json title="package.json" {8}
{
  "name": "frontend-template",
  "version": "1.0.0",
  "author": "Wan Sim",
  "license": "MIT",
  "private": true,
  "packageManager": "yarn@3.5.1",
  "workspaces": ["apps/*", "common/*"]
}
```

`apps`와 `common` 디렉토리를 yarn workspace로 관리할 수 있습니다.

#### 4.2 apps/app1 생성

root 디렉토리에서 아래 명령어를 실행합니다.

```bash
mkdir apps
cd apps
npx create-next-app@latest # Next.js 프로젝트 생성
yarn
```

#### 4.3 common/ui 생성

root 디렉토리에서 아래 명령어를 실행합니다.

```bash
mkdir common
cd common
npx create-next-app@latest # Next.js 프로젝트 생성 (프로젝트명 : ui)
cd ui
npx storybook@latest init # storybook 프로젝트 생성
```

### 4.4 yarn workspace scripts 추가

```json title="package.json" {9-12}
{
  "name": "frontend-template",
  "version": "1.0.0",
  "author": "Wan Sim",
  "license": "MIT",
  "private": true,
  "packageManager": "yarn@3.5.1",
  "workspaces": ["apps/*", "common/*"],
  "scripts": {
    "app1": "yarn workspace app1",
    "ui": "yarn workspace ui"
  }
}
```

위 설정을 추가하면, root 디렉토리에서 아래 명령어를 실행할 수 있습니다.

```bash
yarn app1 dev # app1 프로젝트 실행
yarn ui storybook # ui 프로젝트 실행
```

### 5. yarn workspace dependency 설정

storybook에서 제공하는 Button 컴포넌트를 `apps/app1`에서 사용할 수 있도록 설정합니다.

#### 5.1 common/ui 설정

storybook에서 제공하는 Button 컴포넌트를 client component로 사용할 수 있도록 설정합니다.

```tsx title="common/ui/stories/Button.tsx" {1}
"use client";

import React from "react";
// 나머지 코드 생략
```

common/ui의 root 디렉토리에 `main.ts`를 생성하고, 아래 코드를 추가합니다.

```ts title="common/ui/main.ts"
export * from "./stories/Button";
```

다음으로 common/ui의 `package.json`를 아래와 같이 수정합니다.

```json title="common/ui/package.json" {2-3}
{
  "name": "@frontend-template/ui",
  "main": "main.ts"
  // 나머지 코드 생략
}
```

#### 5.2 apps/app1 설정

먼저 `apps/app1`의 `package.json`에 아래 코드를 추가합니다.

```json title="apps/app1/package.json" {2-4}
{
  "dependencies": {
    "@frontend-template/ui": "workspace:common/ui"
  }
  // 나머지 코드 생략
}
```

다음으로 `apps/app1`의 `next.config.js`를 아래와 같이 수정합니다.

```js title="apps/app1/next.config.js"
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@frontend-template/ui"],
};

module.exports = nextConfig;
```

이는 `apps/app1`에서 `@frontend-template/ui`를 사전에 transpile 하도록 설정하는 것입니다.

### 6. `commoon/ui`에서 Button 컴포넌트 import

`apps/app1`에 새로운 페이지를 만들어, `@frontend-template/ui`의 Button 컴포넌트를 사용해봅니다.

```tsx title="apps/app1/src/app/app1/page.tsx"
+import { Button } from "@frontend-template/ui";

export default function Page() {
  return (
    <>
      <p>Hello World</p>
      <Button label="Button" primary />
    </>
  );
}
```

### 7. 실행

`apps/app1`에서 아래 명령어를 실행합니다.

```bash
yarn dev
```

`http://localhost:3000/app1`에서 결과를 확인할 수 있습니다.
