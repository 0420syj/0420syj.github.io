"use strict";(self.webpackChunk_0420_syj_github_io=self.webpackChunk_0420_syj_github_io||[]).push([[1060],{5620:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(557),r=(n(6687),n(5620));const o={slug:"nuxt-upgrade",title:"Nuxt build \uc624\ub958 \ud83c\udf10",description:'The "name" argument must be specified \uc624\ub958 \ud574\uacb0\ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4',image:"./images/preview.png",authors:["wannysim"],tags:["nuxt","node","github","codespaces","troubleshooting"],enableComments:!0},i=void 0,s={permalink:"/blog/nuxt-upgrade",editUrl:"https://github.com/0420syj/0420syj.github.io/tree/master/blog/2023-05-09-nuxt-upgrade/index.md",source:"@site/blog/2023-05-09-nuxt-upgrade/index.md",title:"Nuxt build \uc624\ub958 \ud83c\udf10",description:'The "name" argument must be specified \uc624\ub958 \ud574\uacb0\ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4',date:"2023-05-09T00:00:00.000Z",formattedDate:"2023\ub144 5\uc6d4 9\uc77c",tags:[{label:"nuxt",permalink:"/blog/tags/nuxt"},{label:"node",permalink:"/blog/tags/node"},{label:"github",permalink:"/blog/tags/github"},{label:"codespaces",permalink:"/blog/tags/codespaces"},{label:"troubleshooting",permalink:"/blog/tags/troubleshooting"}],readingTime:1.57,hasTruncateMarker:!0,authors:[{name:"\uc2ec\uc644",title:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 @ HandHug",url:"https://github.com/0420syj",imageURL:"https://avatars.githubusercontent.com/u/22449484",key:"wannysim"}],frontMatter:{slug:"nuxt-upgrade",title:"Nuxt build \uc624\ub958 \ud83c\udf10",description:'The "name" argument must be specified \uc624\ub958 \ud574\uacb0\ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4',image:"./images/preview.png",authors:["wannysim"],tags:["nuxt","node","github","codespaces","troubleshooting"],enableComments:!0},nextItem:{title:"(JS) Event Loop\uc640 \ube44\ub3d9\uae30 \ud83d\udd01",permalink:"/blog/js-event-loop"}},l={image:n(5626).Z,authorsImageUrls:[void 0]},u=[{value:"\uc624\ub958 \ub2f9\uc2dc \ud658\uacbd",id:"\uc624\ub958-\ub2f9\uc2dc-\ud658\uacbd",level:3},{value:"\ud574\uacb0\ubc29\ubc95",id:"\ud574\uacb0\ubc29\ubc95",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Github Codespaces\ub85c \uc791\uc5c5 \uc911, nuxt build \uacfc\uc815\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},'The "name" argument must be specified')," \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc624\ub958-\ub2f9\uc2dc-\ud658\uacbd"},"\uc624\ub958 \ub2f9\uc2dc \ud658\uacbd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node \ubc84\uc804 : v19.9.0"),(0,r.kt)("li",{parentName:"ul"},"Nuxt \ubc84\uc804 : v3.3.1")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"error-log",src:n(3693).Z,title:"error-log",width:"1216",height:"536"})),(0,r.kt)("p",null,"\ub85c\uadf8\ub97c \ud655\uc778\ud574\ubcf4\ub2c8 nuxt\uc5d0 \ubb38\uc81c\uac00 \uc788\uc5b4\ubcf4\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},'# This file contains the result of Yarn building a package (admin@workspace:apps/admin)\n# Script name: postinstall\n\nNuxi 3.3.1\n\n ERROR  The "name" argument must be specified\n\n  at new NodeError (node:internal/errors:399:5)\n  at Performance.mark (node:internal/perf/performance:125:13)\n  at normalizedModule (/workspaces/vinami/node_modules/@nuxt/kit/dist/index.mjs:168:30)\n  at async installModule (/workspaces/vinami/node_modules/@nuxt/kit/dist/index.mjs:451:15)\n  at async initNuxt (/workspaces/vinami/node_modules/nuxt/dist/index.mjs:2469:7)\n  at async loadNuxt (/workspaces/vinami/node_modules/nuxt/dist/index.mjs:2523:5)\n  at async loadNuxt (/workspaces/vinami/node_modules/@nuxt/kit/dist/index.mjs:539:19)\n  at async Object.invoke (/workspaces/vinami/node_modules/nuxi/dist/chunks/prepare.mjs:37:18)\n  at async _main (/workspaces/vinami/node_modules/nuxi/dist/cli.mjs:49:20)\n')),(0,r.kt)("p",null,"\uad6c\uae00\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},'ERROR  The "name" argument must be specified'),"\ub85c \uac80\uc0c9\ud574\ubcf4\ub2c8 \ub2e4\ud589\ud788 nuxt github\uc5d0 \uc774\ubbf8 \ub204\uad70\uac00 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nuxt/nuxt/issues/19682"},"\uc774\uc288"),"\ub97c \ub4f1\ub85d\ud574\ub480\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ud574\uacb0\ubc29\ubc95"},"\ud574\uacb0\ubc29\ubc95"),(0,r.kt)("p",null,"\uc608\uc0c1\ub300\ub85c nuxt\uc640 Node v19 \uac04\uc5d0 \ubb38\uc81c\uac00 \uc788\uc73c\ub2c8, Node\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\ub2e4\uc6b4\uadf8\ub808\uc774\ub4dc"),"\ud558\ub77c\uace0 \ud569\ub2c8\ub2e4. \uc774\uc288\uac00 \ub4f1\ub85d\ub41c \uc2dc\uc810\uc73c\ub85c \ubd80\ud130 1\ub2ec \ub118\uac8c \uc9c0\ub0ac\uc73c\ub2c8, \ucc28\ub77c\ub9ac nuxt\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uc5c5\uadf8\ub808\uc774\ub4dc"),"\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uac8c\uc2dc\uae00 \uc791\uc131\uc2dc\uc810 \uae30\uc900 \uacf5\uc2dd \ud648\ud398\uc774\uc9c0\uc5d0 ",(0,r.kt)("a",{parentName:"p",href:"https://nuxt.com/blog/v3-4"},"3.4 \ubc84\uc804"),"\uc774 \ub098\uc654\ub2e4\ub294 \uc18c\uc2dd\uc774 \uc788\ub124\uc694."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"nuxt CLI\ub97c \uc9c0\uc6d0\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"nuxi")," \uc124\uce58")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D nuxi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"nuxt \uc5c5\uadf8\ub808\uc774\ub4dc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn nuxi upgrade --force\n")),(0,r.kt)("p",null,"Nuxt v3.4.0\uc744 \uc0ac\uc6a9\ud558\ub2c8, Node v19.9.0\uc5d0\uc11c\ub3c4 \uc798 \ub3d9\uc791\ud569\ub2c8\ub2e4 \ud83c\udf89"))}m.isMDXComponent=!0},3693:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/error-log-8479cc3cf9857fc11ff3f803bf42dc8a.png"},5626:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/preview-dd4b2869b42bd84f7c3336a9153b6163.png"}}]);