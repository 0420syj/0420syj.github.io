---
slug: monorepo-in-action
title: "Monorepo 실전연습"
description: "Monorepo를 현업에서 적용하기 위한 연습"
image: "./images/preview.svg"
authors: [wannysim]
tags: []
enableComments: true
draft: true
---

Monorepo를 현업에서 적용하기 위한 연습

<!-- truncate -->

## Monorepo 🆚 Polyrepo

여기에서 기존 Polyrepo 형태를 설명하며, Monorepo의 정의에 대해서 상세하게 설명한다.

### 장단점

둘의 장단점을 비교해보자

## 이런저런 추가정보

## Step-by-Step

### 1. root workspace 초기화
우선 이 프로젝트는 다음과 같은 환경에서 구성한다.
- Node v18.17.1
- Yarn Berry (with node-modules)
- Yarn Workspace

```
mkdir jellycrew-front
cd jellycrew-front
yarn init
code .
```

먼저 package.json 파일을 수정한다
```
{
	"name": "jellycrew-front",
	"description": "Jellycrew web front-end",
	"version": "1.0.0",
	"private": true
}
```

이제 Yarn Berry로 버전을 변경한다
```
yarn set version berry
yarn config set nodeLinker node-modules
yarn
```

package.json에 "packageManager" 속성을 통해 yarn 버전이 명시되고, 모듈 정보를 저장하는 .pnp.cjs가 생성된다. Node 패키지 linker로는 node-modules를 선택한다. 섣불리 Plug'n'Play를 적용했다간 골치가 아플 수 있다.

이제 .gitignore, .nvmrc를 생성한다
```
# .nvmrc

18.17.1
```

```
# .gitignore

# Yarn Berry with node-modules

.pnp.*

.yarn/*

!.yarn/patches

!.yarn/plugins

!.yarn/releases

!.yarn/sdks

!.yarn/versions

node_modules
```

명시한 버전에 맞는 node 버전을 설치하자
```
fvm use
```


### 2. yarn workspace 구성

지금까지 Root 설정이였다면, 본격적으로 workspace 설정을 해보자
구조는 아래와 같다

```
. # root
├── apps
│   └── jc-admin             # Next.js
│   └── jc-creator-dashboard # Next.js
│   └── jc-open-market       # Next.js
└── common
    └── jc-design        # Storybook
```

시작하기에 앞서 Root package.json 파일에 workspace 정보를 추가한다.
```
{
	"name": "jellycrew-front",
	"description": "Jellycrew web front-end",
	"version": "1.0.0",
	"private": true,
	"packageManager": "yarn@3.6.1",
	"workspaces": [
		"apps/*",
		"common/*"
	]
}
```

먼저 apps 하위 workspace를 구성한다
```
mkdir apps
cd apps
npx create-next-app@latest # Next.js 프로젝트 생성
```

다음으로 common 하위 workspace를 구성한다
먼저 vite를 사용하여 react 프로젝트를 생성한다
vite에서 제공하는 템플릿을 활용하여, swc와 typescript를 사용한다.
```
mkdir common
cd common
yarn create vite jc-design --template react-swc-ts
```

이어서 storybook을 설치한다
```
cd jc-design
npx storybook@latest init
```

편의를 위해 스토리북 실행 스크립트를 추가한다.
```
# jc-design > package.json
"sb": "storybook dev -p 6006"
```

Root package.json에도 편의를 위해 각 workspace를 지칭하도록 스크립트를 추가한다.
```
"scripts": {
	"admin": "yarn workspace jc-admin",
    "dashboard": "yarn workspace jc-creator-dashboard",
    "market": "yarn workspace jc-open-market",
    "design": "yarn workspace jc-design"
}
```
### 3. 중간 Trouble Shooting
앞에서 굳이 확인을 안 했는데, 이 시점에 apps 하위의 Next.js 프로젝트가 실행되지 않는 오류가 있었다. 각 프로젝트를 확인해보니, package-lock.json과 node_modules 폴더가 존재했다. 3개 프로젝트 모두에서 위 2가지를 삭제하고, root에서 다시 한 번 yarn을 실행하니 문제가 해결되었다.

이제 root 프로젝트에서 아래와 같은 명령어로 dev 서버나 storybook을 실행할 수 있다

```
yarn admin dev
yarn dashboard dev
yarn market dev
yarn desgin sb
```

### 4. yarn workspace dependency 설정


## 참고
https://techblog.woowahan.com/7976/
https://beomy.github.io/tech/etc/monorepo-yarn-berry/
https://monorepo.tools/