"use strict";(self.webpackChunk_0420_syj_github_io=self.webpackChunk_0420_syj_github_io||[]).push([[6905],{5620:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,d=u["".concat(c,".").concat(g)]||u[g]||m[g]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(557),a=(n(6687),n(5620));const i={slug:"js-closure-and-method-chaining",title:"(JS) Closure\uc640 Method Chaining \ud83d\udd17",description:"LG\uc720\ud50c\ub7ec\uc2a4\uc5d0\uc11c 1\ub144 4\uc6d4\ub3d9\uc548 \uc7ac\uc9c1\ud558\uba70, Javascript\uc758 \uac00\ub3c5\uc131\uc744 \ub192\uc774\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uace0\ubbfc\ud588\uc2b5\ub2c8\ub2e4.",image:"./images/preview.png",authors:["wannysim"],tags:["javascript","closure","method chaining","solid"],enableComments:!0},o=void 0,s={permalink:"/en/blog/js-closure-and-method-chaining",editUrl:"https://github.com/0420syj/0420syj.github.io/tree/master/blog/2023-04-18-js-closure-and-method-chaining/index.md",source:"@site/blog/2023-04-18-js-closure-and-method-chaining/index.md",title:"(JS) Closure\uc640 Method Chaining \ud83d\udd17",description:"LG\uc720\ud50c\ub7ec\uc2a4\uc5d0\uc11c 1\ub144 4\uc6d4\ub3d9\uc548 \uc7ac\uc9c1\ud558\uba70, Javascript\uc758 \uac00\ub3c5\uc131\uc744 \ub192\uc774\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uace0\ubbfc\ud588\uc2b5\ub2c8\ub2e4.",date:"2023-04-18T00:00:00.000Z",formattedDate:"April 18, 2023",tags:[{label:"javascript",permalink:"/en/blog/tags/javascript"},{label:"closure",permalink:"/en/blog/tags/closure"},{label:"method chaining",permalink:"/en/blog/tags/method-chaining"},{label:"solid",permalink:"/en/blog/tags/solid"}],readingTime:10.33,hasTruncateMarker:!0,authors:[{name:"Wan Sim",title:"Frontend Developer @ HandHug",url:"https://github.com/0420syj",imageURL:"https://avatars.githubusercontent.com/u/22449484",key:"wannysim"}],frontMatter:{slug:"js-closure-and-method-chaining",title:"(JS) Closure\uc640 Method Chaining \ud83d\udd17",description:"LG\uc720\ud50c\ub7ec\uc2a4\uc5d0\uc11c 1\ub144 4\uc6d4\ub3d9\uc548 \uc7ac\uc9c1\ud558\uba70, Javascript\uc758 \uac00\ub3c5\uc131\uc744 \ub192\uc774\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uace0\ubbfc\ud588\uc2b5\ub2c8\ub2e4.",image:"./images/preview.png",authors:["wannysim"],tags:["javascript","closure","method chaining","solid"],enableComments:!0},prevItem:{title:"Typescript\ub85c \uc0dd\uac01\ud574\ubcf4\ub294 SOLID \uc6d0\uce59 \u2696\ufe0f",permalink:"/en/blog/solid-with-typescript"},nextItem:{title:"TypeScript Basic\ud83d\udc24",permalink:"/en/blog/typescript-basic"}},c={image:n(8758).Z,authorsImageUrls:[void 0]},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"LG\uc720\ud50c\ub7ec\uc2a4\uc5d0\uc11c 1\ub144 4\uc6d4\ub3d9\uc548 \uc7ac\uc9c1\ud558\uba70, Javascript\uc758 \uac00\ub3c5\uc131\uc744 \ub192\uc774\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uace0\ubbfc\ud588\uc2b5\ub2c8\ub2e4."))}m.isMDXComponent=!0},8758:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/preview-e1f7537a0a642682e20c41b16849c562.png"}}]);