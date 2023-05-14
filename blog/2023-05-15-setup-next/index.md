---
slug: frontend-template
title: frontend-template 🌐
description: "frontend-template"
# image: "./images/preview.png"
authors: [wannysim]
tags: [yarn]
enableComments: true
---

frontend-template

<!-- truncate -->

## frontend-template

## 배경

- 프론트엔드 개발을 하면서, 프로젝트를 시작할 때마다 프로젝트 구조를 만들어야 했습니다.
- 그래서 프로젝트 구조를 만들어놓고, 프로젝트 시작할 때마다 복사해서 사용했습니다.

## 시작하기

### 1. yarn init

```bash
mkdir frontend-template
cd frontend-template
yarn init
code . # vscode 실행
```

### 2. yarn berry(PnP)로 변경

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

설정하기 앞서 template의 구조를 먼저 설계해야 합니다.

구조는 아래와 같다

```bash
. # root
├── apps
│   └── app1 # 프로젝트 (nextjs)
└── common
    └── ui # 공통으로 사용하는 모듈 (@storybook/nextjs)
```

#### 4-1. root package.json 수정

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

#### 4.2 apps/app1

root 디렉토리에서 아래 명령어를 실행합니다.

```bash
mkdir apps
cd apps
npx create-next-app@latest # Next.js 프로젝트 생성
yarn
```

#### 4.3 common/ui

root 디렉토리에서 아래 명령어를 실행합니다.

```bash
mkdir common
cd common
npx create-next-app@latest # Next.js 프로젝트 생성 (프로젝트명 : ui)
cd ui
npx storybook@latest init # storybook 프로젝트 생성
```

### 4.4 yarn workspace scripts 추가

````json title="package.json" {9-12}
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

위 설정을 추가하면, root 디렉토리에서 아래 명령어를 실행할 수 있습니다.

```bash
yarn app1 dev # app1 프로젝트 실행
````
