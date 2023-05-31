"use strict";(self.webpackChunk_0420_syj_github_io=self.webpackChunk_0420_syj_github_io||[]).push([[4946],{5620:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(6687);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return t?a.createElement(k,l(l({ref:n},d),{},{components:t})):a.createElement(k,l({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(557),r=(t(6687),t(5620));const i={slug:"solid-with-typescript",title:"Typescript\ub85c \uc0dd\uac01\ud574\ubcf4\ub294 SOLID \uc6d0\uce59 \u2696\ufe0f",description:"Typesciprt\ub97c \ud1b5\ud574 SOLID \uc6d0\uce59\uc5d0 \ub300\ud574 \uc815\ub9ac\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4.",image:"./images/preview.png",authors:["wannysim"],tags:["typescript","solid","coupling","cohesion"],enableComments:!0},l=void 0,o={permalink:"/blog/solid-with-typescript",editUrl:"https://github.com/0420syj/0420syj.github.io/tree/master/blog/2023-04-19-solid-with-typescript/index.md",source:"@site/blog/2023-04-19-solid-with-typescript/index.md",title:"Typescript\ub85c \uc0dd\uac01\ud574\ubcf4\ub294 SOLID \uc6d0\uce59 \u2696\ufe0f",description:"Typesciprt\ub97c \ud1b5\ud574 SOLID \uc6d0\uce59\uc5d0 \ub300\ud574 \uc815\ub9ac\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4.",date:"2023-04-19T00:00:00.000Z",formattedDate:"2023\ub144 4\uc6d4 19\uc77c",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"solid",permalink:"/blog/tags/solid"},{label:"coupling",permalink:"/blog/tags/coupling"},{label:"cohesion",permalink:"/blog/tags/cohesion"}],readingTime:12.945,hasTruncateMarker:!0,authors:[{name:"\uc2ec\uc644",title:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 @ HandHug",url:"https://github.com/0420syj",imageURL:"https://avatars.githubusercontent.com/u/22449484",key:"wannysim"}],frontMatter:{slug:"solid-with-typescript",title:"Typescript\ub85c \uc0dd\uac01\ud574\ubcf4\ub294 SOLID \uc6d0\uce59 \u2696\ufe0f",description:"Typesciprt\ub97c \ud1b5\ud574 SOLID \uc6d0\uce59\uc5d0 \ub300\ud574 \uc815\ub9ac\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4.",image:"./images/preview.png",authors:["wannysim"],tags:["typescript","solid","coupling","cohesion"],enableComments:!0},prevItem:{title:"(JS) Event Loop\uc640 \ube44\ub3d9\uae30 \ud83d\udd01",permalink:"/blog/js-event-loop"},nextItem:{title:"(JS) Closure\uc640 Method Chaining \ud83d\udd17",permalink:"/blog/js-closure-and-method-chaining"}},s={image:t(991).Z,authorsImageUrls:[void 0]},p=[{value:"SOLID \uc6d0\uce59\uc740 \uc65c \uc911\uc694\ud560\uae4c? \ud83e\udd14",id:"solid-\uc6d0\uce59\uc740-\uc65c-\uc911\uc694\ud560\uae4c-",level:2},{value:"\uacb0\ud569\ub3c4(coupling) \u23ec",id:"\uacb0\ud569\ub3c4coupling-",level:3},{value:"\uc751\uc9d1\ub3c4(cohesion) \u23eb",id:"\uc751\uc9d1\ub3c4cohesion-",level:3},{value:"1. \ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59(SRP) \ud83e\udde9",id:"1-\ub2e8\uc77c-\ucc45\uc784-\uc6d0\uce59srp-",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:3},{value:"\uc124\uba85",id:"\uc124\uba85",level:3},{value:"2. \uac1c\ubc29/\ud3d0\uc1c4 \uc6d0\uce59(OCP)\ud83d\udeaa",id:"2-\uac1c\ubc29\ud3d0\uc1c4-\uc6d0\uce59ocp",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-1",level:3},{value:"\uc124\uba85",id:"\uc124\uba85-1",level:3},{value:"3. \ub9ac\uc2a4\ucf54\ud504 \uce58\ud658 \uc6d0\uce59(LSP) \ud83d\udd04",id:"3-\ub9ac\uc2a4\ucf54\ud504-\uce58\ud658-\uc6d0\uce59lsp-",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-2",level:3},{value:"\uc124\uba85",id:"\uc124\uba85-2",level:3},{value:"4. \uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac \uc6d0\uce59(ISP) \u2797",id:"4-\uc778\ud130\ud398\uc774\uc2a4-\ubd84\ub9ac-\uc6d0\uce59isp-",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-3",level:3},{value:"\uc124\uba85",id:"\uc124\uba85-3",level:3},{value:"5. \uc758\uc874\uc131 \uc5ed\uc804 \uc6d0\uce59(DIP) \ud83d\udd00",id:"5-\uc758\uc874\uc131-\uc5ed\uc804-\uc6d0\uce59dip-",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-4",level:3},{value:"\uc124\uba85",id:"\uc124\uba85-4",level:3},{value:"\ub9c8\uce58\uba70 \ud83c\udfc1",id:"\ub9c8\uce58\uba70-",level:2}],d={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Typesciprt\ub97c \ud1b5\ud574 SOLID \uc6d0\uce59\uc5d0 \ub300\ud574 \uc815\ub9ac\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"solid-\uc6d0\uce59\uc740-\uc65c-\uc911\uc694\ud560\uae4c-"},"SOLID \uc6d0\uce59\uc740 \uc65c \uc911\uc694\ud560\uae4c? \ud83e\udd14"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SOLID \uc6d0\uce59"),"\uc740 \uc720\uc9c0\ubcf4\uc218, \ud655\uc7a5 \ubc0f \uc774\ud574\ud558\uae30 \uc26c\uc6b4 \uad6c\uc870\ud654\ub41c \uc2dc\uc2a4\ud15c\uc744 \ub9cc\ub4dc\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ubbc0\ub85c SW \uc544\ud0a4\ud14d\ucc98\uc5d0\uc11c \ub9e4\uc6b0 \uc911\uc694\ud569\ub2c8\ub2e4. \ud2b9\ud788 \ubaa8\ub4e0 \uc544\ud0a4\ud14d\ucc98\uc758 \uac00\uc7a5 \uc911\uc694\ud55c 2\uac00\uc9c0 \uce21\uba74\uc778 ",(0,r.kt)("strong",{parentName:"p"},"\uacb0\ud569\ub3c4(coupling)\uc640 \uc751\uc9d1\ub3c4(cohesion)"),"\uc5d0 \uc9c1\uc811\uc801\uc778 \uc601\ud5a5\uc744 \ubbf8\uce69\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uacb0\ud569\ub3c4coupling-"},"\uacb0\ud569\ub3c4(coupling) \u23ec"),(0,r.kt)("p",null,"\ubaa8\ub4c8 \uac04\uc758 \uc0c1\ud638 \uc758\uc874\uc131\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uacb0\ud569\ub3c4\uac00 \ub192\ub2e4\ub294 \uac83\uc740 \ud55c \ubaa8\ub4c8\uc744 \ubcc0\uacbd\ud558\uba74 \ud574\ub2f9 \ubaa8\ub4c8\uc5d0 \uc758\uc874\ud558\ub294 \ub2e4\ub978 \ubaa8\ub4c8\ub3c4 \ubcc0\uacbd\ud574\uc57c \ud558\ub294 \uacbd\uc6b0\uac00 \ub9ce\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ubc18\uba74\uc5d0 \uacb0\ud569\ub3c4\uac00 \ub0ae\uc73c\uba74 \uac01 \ubaa8\ub4c8\uc774 \ub2e4\ub978 \ubaa8\ub4c8\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\uace0 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc218\uc815\ud558\uac70\ub098 \uad50\uccb4\ud560 \uc218 \uc788\ub294 \ubaa8\ub4c8\ud654 \ub41c \ucf54\ub4dc\uac00 \ub354 \ub9ce\ub2e4\ub294 \ub73b\uc785\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\uad00\ub828 SOLID \uc6d0\uce59",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc758\uc874\uc131 \uc5ed\uc804 \uc6d0\uce59(DIP)"),": \uad6c\uccb4\uc801\uc778 \uad6c\ud604\uc774 \uc544\ub2cc \ucd94\uc0c1\ud654\uc5d0 \uc758\uc874\ud568\uc73c\ub85c\uc368 \ubaa8\ub4c8\uc740 \uc11c\ub85c \ub354 \ub3c5\ub9bd\uc801\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc758\uc874 \uc694\uc18c\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\uace0 \ubaa8\ub4c8\uc744 \uad50\uccb4\ud558\uac70\ub098 \uc218\uc815\ud558\uae30\uac00 \ub354 \uc26c\uc6cc\uc9d1\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac \uc6d0\uce59(ISP)"),": \ub354 \uc791\uace0 \uc9d1\uc911\ub41c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\uba74 \ud074\ub798\uc2a4\ub294 \ud544\uc694\ud55c \uae30\ub2a5\uc5d0\ub9cc \uc758\uc874\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c \ubaa8\ub4c8 \uac04\uc758 \ubd88\ud544\uc694\ud55c \uc758\uc874\uc131\uc744 \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("h3",{id:"\uc751\uc9d1\ub3c4cohesion-"},"\uc751\uc9d1\ub3c4(cohesion) \u23eb"),(0,r.kt)("p",null,"\uc751\uc9d1\ub3c4\ub294 \ubaa8\ub4c8\uc758 \ucc45\uc784\uc774 \uc5bc\ub9c8\ub098 \ubc00\uc811\ud558\uac8c \uc5f0\uad00\ub418\uc5b4 \uc788\ub294\uc9c0\ub97c \ub9d0\ud569\ub2c8\ub2e4. \uc751\uc9d1\ub3c4\uac00 \ub192\ub2e4\ub294 \uac83\uc740 \ubaa8\ub4c8\uc5d0 \ub2e8\uc77c \ucc45\uc784\uc774 \uc788\uc5b4 \uc774\ud574\ud558\uace0 \uc720\uc9c0 \uad00\ub9ac\ud558\uae30 \uc27d\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc751\uc9d1\ub3c4\uac00 \ub0ae\uc73c\uba74 \ubaa8\ub4c8\uc5d0 \uc5ec\ub7ec \uac00\uc9c0 \ucc45\uc784\uc774 \uc788\uc5b4 \ucf54\ub4dc\uac00 \ubcf5\uc7a1\ud558\uace0 \uc720\uc9c0\ubcf4\uc218\uac00 \uc5b4\ub824\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\uad00\ub828 SOLID \uc6d0\uce59",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59(SRP)"),": \uac01 \ud074\ub798\uc2a4\uac00 \ud558\ub098\uc758 \ucc45\uc784\ub9cc \uac16\ub3c4\ub85d \ud568\uc73c\ub85c\uc368 \uac00\ub3c5\uc131, \uc720\uc9c0\ubcf4\uc218 \ubc0f \ud655\uc7a5\uc774 \ub354 \uc26c\uc6b4 \ubcf4\ub2e4 \uc9d1\uc911\uc801\uc774\uace0 \uc751\uc9d1\ub3c4 \uc788\ub294 \ubaa8\ub4c8\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uac1c\ubc29/\ud3d0\uc1c4 \uc6d0\uce59(OCP)"),": \ud074\ub798\uc2a4\ub97c \uc218\uc815 \uc5c6\uc774 \ud655\uc7a5\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4\ud558\uba74 \uc6d0\ub798 \ud074\ub798\uc2a4\uc758 \ud575\uc2ec \ucc45\uc784\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\uace0 \uc0c8\ub85c\uc6b4 \uae30\ub2a5\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \uae30\uc874 \ubaa8\ub4c8\uc758 \uc77c\uad00\uc131\uc744 \uc720\uc9c0\ud558\uba74\uc11c \uc0c8\ub85c\uc6b4 \uc694\uad6c \uc0ac\ud56d\uc744 \uc801\uc6a9\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("p",null,"SOLID \uc6d0\uce59\uc744 \ub530\ub974\uba74 \uacb0\ud569\ub3c4\ub294 \ub0ae\uace0 \uc751\uc9d1\ub3c4\ub294 \ub192\uc740 \uc544\ud0a4\ud14d\ucc98\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc73c\uba70, \uadf8 \uacb0\uacfc \uc720\uc9c0\ubcf4\uc218\uc640 \ud655\uc7a5\uc774 \uc27d\uace0, \uc720\uc5f0\ud55c \uc2dc\uc2a4\ud15c\uc744 \uad6c\ucd95\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud2b9\uc131\uc740 \ubcc0\ud654\ud558\ub294 \uc694\uad6c\uc0ac\ud56d\uc5d0 \uc27d\uac8c \uc801\uc751\ud558\uace0 \uc720\uc9c0\ubcf4\uc218 \ube44\uc6a9\uc744 \uc808\uac10\ud558\uba70 \uc804\ubc18\uc801\uc778 \ucf54\ub4dc \ud488\uc9c8\uc744 \uac1c\uc120\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc5d0 \ud544\uc218\uc801\uc785\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"1-\ub2e8\uc77c-\ucc45\uc784-\uc6d0\uce59srp-"},"1. \ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59(SRP) \ud83e\udde9"),(0,r.kt)("p",null,"\ud074\ub798\uc2a4\ub294 \ubcc0\uacbd\ud560 \uc774\uc720\uac00 \ud558\ub098\ub9cc \uc788\uc5b4\uc57c \ud558\uba70, \uc774\ub294 \ucc45\uc784\uc774 \ud558\ub098\ub9cc \uc788\uc5b4\uc57c \ud55c\ub2e4\ub294 \uc758\ubbf8\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="bad.ts"',title:'"bad.ts"'},"// Bad: \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\ub97c \ucc98\ub9ac\ud558\uace0 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5\ud558\ub294 \ub2e8\uc77c \ud074\ub798\uc2a4\nclass User {\n  name: string;\n  email: string;\n\n  constructor(name: string, email: string) {\n    this.name = name;\n    this.email = email;\n  }\n\n  saveToDatabase() {\n    // \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\ub97c DB\uc5d0 \uc800\uc7a5\ud558\ub294 \ucf54\ub4dc\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="good.ts"',title:'"good.ts"'},"// Good: \uc5ec\ub7ec \ud074\ub798\uc2a4\ub85c \ucc45\uc784 \ubd84\ub9ac\nclass User {\n  name: string;\n  email: string;\n\n  constructor(name: string, email: string) {\n    this.name = name;\n    this.email = email;\n  }\n}\n\nclass UserRepository {\n  save(user: User) {\n    // \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\ub97c DB\uc5d0 \uc800\uc7a5\ud558\ub294 \ucf54\ub4dc\n  }\n}\n")),(0,r.kt)("h3",{id:"\uc124\uba85"},"\uc124\uba85"),(0,r.kt)("p",null,"\uc774 \uc608\uc2dc\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"bad.ts"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \ud074\ub798\uc2a4\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uc0ac\uc6a9\uc790 \ub370\uc774\ud130 \uad00\ub9ac"),"\uc640 ",(0,r.kt)("strong",{parentName:"p"},"DB \uc800\uc7a5"),"\uc774\ub77c\ub294 2\uac00\uc9c0 \ucc45\uc784\uc744 \uac16\uc2b5\ub2c8\ub2e4. \uc774\ub294 SRP\ub97c \uc704\ubc18\ud558\ub294 \uac83\uc774\ubbc0\ub85c \uc774 2\uac00\uc9c0 \ucc45\uc784\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"User"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"UserRepository"),"\ub77c\ub294 2\uac1c\uc758 \ub2e4\ub978 \ud074\ub798\uc2a4\ub85c \ubd84\ub9ac\ub429\ub2c8\ub2e4. \uc774\uc81c \uac01 \ud074\ub798\uc2a4\ub294 \ud558\ub098\uc758 \ucc45\uc784\ub9cc \uac00\uc9c0\ubbc0\ub85c \uc720\uc9c0\ubcf4\uc218\uc640 \uac00\ub3c5\uc131\uc774 \ud5a5\uc0c1\ub429\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"2-\uac1c\ubc29\ud3d0\uc1c4-\uc6d0\uce59ocp"},"2. \uac1c\ubc29/\ud3d0\uc1c4 \uc6d0\uce59(OCP)\ud83d\udeaa"),(0,r.kt)("p",null,"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc694\uc18c\ub294 \ud655\uc7a5\uc5d0\ub294 \uc5f4\ub824 \uc788\uc5b4\uc57c \ud558\uace0, \ubcc0\uacbd\uc5d0\ub294 \ub2eb\ud600 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc608\uc2dc-1"},"\uc608\uc2dc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="bad.ts"',title:'"bad.ts"'},'// Bad: \uae30\uc874 \ud074\ub798\uc2a4\ub97c \uc218\uc815\ud558\uc5ec \uc0c8 \ub3c4\ud615 \ucd94\uac00\nclass AreaCalculator {\n  calculateArea(shape: "circle" | "square", size: number) {\n    if (shape === "circle") {\n      return Math.PI * size * size;\n    } else if (shape === "square") {\n      return size * size;\n    }\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="good.ts"',title:'"good.ts"'},"// Good: \ucd94\uc0c1\ud654 \ubc0f \uc0c1\uc18d\uc744 \uc0ac\uc6a9\ud558\uc5ec \uae30\ub2a5 \ud655\uc7a5\nabstract class Shape {\n  abstract calculateArea(): number;\n}\n\nclass Circle extends Shape {\n  radius: number;\n\n  constructor(radius: number) {\n    super();\n    this.radius = radius;\n  }\n\n  calculateArea(): number {\n    return Math.PI * this.radius * this.radius;\n  }\n}\n\nclass Square extends Shape {\n  side: number;\n\n  constructor(side: number) {\n    super();\n    this.side = side;\n  }\n\n  calculateArea(): number {\n    return this.side * this.side;\n  }\n}\n\nclass AreaCalculator {\n  calculateArea(shape: Shape): number {\n    return shape.calculateArea();\n  }\n}\n")),(0,r.kt)("h3",{id:"\uc124\uba85-1"},"\uc124\uba85"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bad.ts"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"AreaCalculator")," \ud074\ub798\uc2a4\ub294 if-else\ubb38\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc5ec\ub7ec \ub3c4\ud615\uc758 \uba74\uc801\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4. \uc0c8 \ub3c4\ud615\uc744 \ucd94\uac00\ud558\ub824\uba74 \uae30\uc874 \ud074\ub798\uc2a4\ub97c \uc218\uc815\ud574\uc57c \ud558\ub294\ub370, \uc774\ub294 OCP\ub97c \uc704\ubc18\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub9ac\ud329\ud1a0\ub9c1\ub41c ",(0,r.kt)("inlineCode",{parentName:"p"},"good.ts"),"\ub294 \ucd94\uc0c1\ud654 \ub41c ",(0,r.kt)("inlineCode",{parentName:"p"},"calculateArea()"),"\uac00 \uc788\ub294 \ucd94\uc0c1\ud654 \ub41c ",(0,r.kt)("inlineCode",{parentName:"p"},"Shape")," \ud074\ub798\uc2a4\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"Circle")," \ubc0f ",(0,r.kt)("inlineCode",{parentName:"p"},"Square")," \ud074\ub798\uc2a4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Shape"),"\uc5d0\uc11c \uc0c1\uc18d\ub418\uc5b4, ",(0,r.kt)("inlineCode",{parentName:"p"},"calculateArea()"),"\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4. \uc774\uc81c \uc0c8 \ub3c4\ud615\uc744 \ucd94\uac00\ud558\ub354\ub77c\ub3c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"AreaCalculator")," \ud074\ub798\uc2a4\ub97c \uc218\uc815\ud558\uc9c0 \uc54a\uace0, ",(0,r.kt)("inlineCode",{parentName:"p"},"Shape"),"\ub97c \ud655\uc7a5\ud558\ub294 \uc0c8 \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"3-\ub9ac\uc2a4\ucf54\ud504-\uce58\ud658-\uc6d0\uce59lsp-"},"3. \ub9ac\uc2a4\ucf54\ud504 \uce58\ud658 \uc6d0\uce59(LSP) \ud83d\udd04"),(0,r.kt)("p",null,"\uc0c1\uc704 \ud0c0\uc785\uc758 \uac1d\uccb4\ub97c \ud558\uc704 \ud0c0\uc785\uc758 \uac1d\uccb4\ub85c \uce58\ud658\ud574\ub3c4, \uc0c1\uc704 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc740 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud574\uc57c \ud55c\ub2e4."),(0,r.kt)("h3",{id:"\uc608\uc2dc-2"},"\uc608\uc2dc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="bad.ts"',title:'"bad.ts"'},'class Bird {\n  fly(): void {\n    console.log("I can fly");\n  }\n}\n\nclass Pigeon extends Bird {}\n\nclass Ostrich extends Bird {\n  fly(): never {\n    throw new Error("I can\'t fly");\n  }\n}\n\n// Bad: Ostrich\ub294 Bird\uc758 \ud558\uc704 \ud0c0\uc785\uc774 \ub420 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\nconst bird: Bird = new Ostrich();\nbird.fly(); // Throws an error\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="good.ts"',title:'"good.ts"'},'// Good: \ub3d9\uc791\uc5d0 \ub530\ub77c \uc5ec\ub7ec \ud074\ub798\uc2a4\ub85c \ubd84\ub9ac\nclass Bird {}\n\nclass FlyingBird extends Bird {\n  fly(): void {\n    console.log("I can fly");\n  }\n}\n\nclass NonFlyingBird extends Bird {}\n\nclass Pigeon extends FlyingBird {}\nclass Ostrich extends NonFlyingBird {}\n')),(0,r.kt)("h3",{id:"\uc124\uba85-2"},"\uc124\uba85"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bad.ts"),"\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Ostrich")," \ud074\ub798\uc2a4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"fly()"),"\uac00 \uc788\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Bird"),"\ub97c \uc0c1\uc18d\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 ",(0,r.kt)("inlineCode",{parentName:"p"},"Ostrich"),"\ub294 \ub0a0 \uc218 \uc5c6\uc73c\ubbc0\ub85c LSP\ub97c \uc704\ubc18\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub9ac\ud329\ud1a0\ub9c1\ub41c ",(0,r.kt)("inlineCode",{parentName:"p"},"good.ts"),"\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Bird")," \ud074\ub798\uc2a4\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"FlyingBird"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"NonFlyingBird"),"\ub85c \ubd84\ub9ac\ud569\ub2c8\ub2e4. \uc774\uc81c ",(0,r.kt)("inlineCode",{parentName:"p"},"Ostrich")," \ud074\ub798\uc2a4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Pigeon")," \ud074\ub798\uc2a4\ub97c \ud655\uc7a5\ud558\uace0, ",(0,r.kt)("inlineCode",{parentName:"p"},"Pigeon"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"Ostrich")," \ubaa8\ub450 \ubb38\uc81c\ub97c \uc77c\uc73c\ud0a4\uc9c0 \uc54a\uace0 \uac01\uac01\uc758 \uae30\ubcf8 \ud074\ub798\uc2a4\ub97c \ub300\uccb4\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c LSP\uac00 \uc720\uc9c0\ub429\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"4-\uc778\ud130\ud398\uc774\uc2a4-\ubd84\ub9ac-\uc6d0\uce59isp-"},"4. \uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac \uc6d0\uce59(ISP) \u2797"),(0,r.kt)("p",null,"\uc778\ud130\ud398\uc774\uc2a4\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uac8c \ud544\uc694\ud55c \uac83\ub9cc \uc81c\uacf5\ud574\uc57c \ud569\ub2c8\ub2e4. \uc989, \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc790\uc2e0\uc774 \uc0ac\uc6a9\ud558\ub294 \uba54\uc11c\ub4dc\uc5d0\ub9cc \uc758\uc874\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc608\uc2dc-3"},"\uc608\uc2dc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{22-24} title="bad.ts"',"{22-24}":!0,title:'"bad.ts"'},'// Bad: \uc5ec\ub7ec \ucc45\uc784\uc744 \ud558\ub098\uc758 \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ud3ec\ud568\ninterface Worker {\n  work(): void;\n  eat(): void;\n}\n\nclass Human implements Worker {\n  work(): void {\n    console.log("I am working");\n  }\n\n  eat(): void {\n    console.log("I am eating");\n  }\n}\n\nclass Robot implements Worker {\n  work(): void {\n    console.log("I am working");\n  }\n\n  eat(): void {\n    throw new Error("I can\'t eat");\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="good.ts"',title:'"good.ts"'},'// Good: \uc11c\ub85c \ub2e4\ub978 \uc778\ud130\ud398\uc774\uc2a4\ub85c \ucc45\uc784 \ubd84\ub9ac\ninterface Worker {\n  work(): void;\n}\n\ninterface Eater {\n  eat(): void;\n}\n\nclass Human implements Worker, Eater {\n  work(): void {\n    console.log("I am working");\n  }\n\n  eat(): void {\n    console.log("I am eating");\n  }\n}\n\nclass Robot implements Worker {\n  work(): void {\n    console.log("I am working");\n  }\n}\n')),(0,r.kt)("h3",{id:"\uc124\uba85-3"},"\uc124\uba85"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bat.ts"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"Worker")," \uc778\ud130\ud398\uc774\uc2a4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"work()"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"eat()"),"\ub97c \ub458 \ub2e4 \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub85c \uc778\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"Robot")," \ud074\ub798\uc2a4\ub294 \ud544\uc694\ud558\uc9c0 \uc54a\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"eat()"),"\uc744 \uac15\uc81c\ub85c \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub9ac\ud329\ud1a0\ub9c1\ub41c ",(0,r.kt)("inlineCode",{parentName:"p"},"good.ts"),"\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Worker")," \uc778\ud130\ud398\uc774\uc2a4\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"Worker"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"Eater"),"\ub77c\ub294 \ub450 \uac1c\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub85c \ubd84\ub9ac\ud569\ub2c8\ub2e4. \uc774\uc81c ",(0,r.kt)("inlineCode",{parentName:"p"},"Robot")," \ud074\ub798\uc2a4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Worker")," \uc778\ud130\ud398\uc774\uc2a4\ub9cc \uad6c\ud604\ud558\uba74 \ub418\uace0, ",(0,r.kt)("inlineCode",{parentName:"p"},"Human")," \ud074\ub798\uc2a4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Worker"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"Eater")," \uc778\ud130\ud398\uc774\uc2a4\ub97c \ubaa8\ub450 \uad6c\ud604\ud569\ub2c8\ub2e4. \uc774\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ub354 \uc774\uc0c1 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uba54\uc11c\ub4dc\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\ubbc0\ub85c ISP\ub97c \uc900\uc218\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"5-\uc758\uc874\uc131-\uc5ed\uc804-\uc6d0\uce59dip-"},"5. \uc758\uc874\uc131 \uc5ed\uc804 \uc6d0\uce59(DIP) \ud83d\udd00"),(0,r.kt)("p",null,"\uace0\uc218\uc900 \ubaa8\ub4c8\uc740 \uc800\uc218\uc900 \ubaa8\ub4c8\uc5d0 \uc758\uc874\ud574\uc11c\ub294 \uc548 \ub429\ub2c8\ub2e4. \ub458 \ub2e4 \ucd94\uc0c1\ud654\uc5d0 \uc758\uc874\ud574\uc57c \ud569\ub2c8\ub2e4. \ucd94\uc0c1\ud654\ub294 \uc800\uc218\uc900\uc5d0 \uc758\uc874\ud574\uc11c\ub294 \uc548 \ub418\uace0, \uc800\uc218\uc900\uc740 \ucd94\uc0c1\ud654\uc5d0 \uc758\uc874\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\uc6a9\uc5b4 \uc124\uba85",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\uace0\uc218\uc900 \ubaa8\ub4c8 : \uc778\ud130\ud398\uc774\uc2a4\uc640 \uac19\uc740 \uac1d\uccb4\uc758 \uc0c1\uc704 \uc218\uc900\uc5d0 \uc704\uce58\ud558\ub294 \ucd94\uc0c1\uc801\uc778 \ubaa8\ub4c8"),(0,r.kt)("li",{parentName:"ul"},"\uc800\uc218\uc900 \ubaa8\ub4c8 : \uad6c\uccb4\uc801\uc778 \uad6c\ud604\uc744 \ud3ec\ud568\ud558\ub294 \ubaa8\ub4c8"))),(0,r.kt)("h3",{id:"\uc608\uc2dc-4"},"\uc608\uc2dc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="bad.ts"',title:'"bad.ts"'},'// Bad: \uace0\uc218\uc900 \ubaa8\ub4c8(ContentProcessor)\uc774 \uc800\uc218\uc900 \ubaa8\ub4c8(FileReader)\uc5d0 \uc758\uc874\ud569\ub2c8\ub2e4. (DIP \uc704\ubc18)\nclass FileReader {\n  read(): string {\n    // Read from a file\n    return "file content";\n  }\n}\n\nclass ContentProcessor {\n  process(reader: FileReader): void {\n    const content = reader.read();\n    console.log("Processing:", content);\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="good.ts"',title:'"good.ts"'},'// Good: \uace0\uc218\uc900 \ubaa8\ub4c8(ContentProcessor)\uc774 \uc800\uc218\uc900 \ubaa8\ub4c8(FileReader)\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. (DIP \uc900\uc218)\ninterface IReader {\n  read(): string;\n}\n\nclass FileReader implements IReader {\n  read(): string {\n    // Read from a file\n    return "file content";\n  }\n}\n\nclass ContentProcessor {\n  process(reader: IReader): void {\n    const content = reader.read();\n    console.log("Processing:", content);\n  }\n}\n')),(0,r.kt)("h3",{id:"\uc124\uba85-4"},"\uc124\uba85"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bad.ts"),"\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"ContentProcessor")," \ud074\ub798\uc2a4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"FileReader")," \ud074\ub798\uc2a4\uc5d0 \uc758\uc874\ud569\ub2c8\ub2e4. \uc774\ub294 \uace0\uc218\uc900 \ubaa8\ub4c8\uc774 \uc800\uc218\uc900 \ubaa8\ub4c8\uc5d0 \uc758\uc874\ud558\ubbc0\ub85c DIP\ub97c \uc704\ubc18\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub9ac\ud329\ud1a0\ub9c1\ub41c ",(0,r.kt)("inlineCode",{parentName:"p"},"good.ts"),"\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"IReader")," \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc815\uc758\ud558\uace0, ",(0,r.kt)("inlineCode",{parentName:"p"},"FileReader")," \ud074\ub798\uc2a4\ub294 \uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4. \uc774\uc81c ",(0,r.kt)("inlineCode",{parentName:"p"},"ContentProcessor")," \ud074\ub798\uc2a4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"IReader")," \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \uc758\uc874\ud558\ubbc0\ub85c DIP\ub97c \uc900\uc218\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ub9c8\uce58\uba70-"},"\ub9c8\uce58\uba70 \ud83c\udfc1"),(0,r.kt)("p",null,"SOLID \uc6d0\uce59\uc740 \uac1d\uccb4\uc9c0\ud5a5 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c \uac00\uc7a5 \uc911\uc694\ud55c \uc6d0\uce59\uc785\ub2c8\ub2e4. \uc774 \uc6d0\uce59\uc744 \uc798 \uc9c0\ud0a4\uba74 \ucf54\ub4dc\uc758 \uc720\uc9c0\ubcf4\uc218\uc131\uc774 \ub192\uc544\uc9c0\uace0, \ucf54\ub4dc\uc758 \uc7ac\uc0ac\uc6a9\uc131\uc774 \ub192\uc544\uc9c0\uba70, \ucf54\ub4dc\uc758 \ud655\uc7a5\uc131\uc774 \ub192\uc544\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc800\ub3c4 \uc5ec\uc804\ud788 SOLID \uc6d0\uce59\uc744 \uc798 \uc9c0\ud0a4\uc9c0 \ubabb\ud558\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4. \uc774 \uae00\uc744 \uc4f0\uba74\uc11c\ub3c4 \ub9ce\uc774 \ubc18\uc131\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc55e\uc73c\ub85c \uacb0\ud569\ub3c4\uc640 \uc751\uc9d1\ub3c4\uc5d0 \ub300\ud574 \ud56d\uc0c1 \uace0\ubbfc\ud558\uace0, SOLID \uc6d0\uce59\uc744 \ub5a0\uc62c\ub9ac\uba70 \ucf54\ub4dc\ub97c \uc791\uc131\ud574\uc57c\uaca0\uc2b5\ub2c8\ub2e4!"))}m.isMDXComponent=!0},991:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/preview-c1551367fd078170779d3635558d7498.png"}}]);