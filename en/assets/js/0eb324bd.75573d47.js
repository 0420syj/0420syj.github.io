"use strict";(self.webpackChunk_0420_syj_github_io=self.webpackChunk_0420_syj_github_io||[]).push([[3247],{5620:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||i;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(557),r=(n(6687),n(5620));const i={sidebar_position:2},l="\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8(Execution Context)\uc640 \ud074\ub85c\uc800(Closure)",o={unversionedId:"javascript/execution-context-and-closure",id:"javascript/execution-context-and-closure",title:"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8(Execution Context)\uc640 \ud074\ub85c\uc800(Closure)",description:"Javascript \uc5d4\uc9c4\uc740 Memory Heap\uacfc Call Stack\uc73c\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. Memory Heap\uc740 \uba54\ubaa8\ub9ac \ud560\ub2f9\uc774 \uc77c\uc5b4\ub098\ub294 \uacf3\uc774\uace0, Call Stack\uc740 \ucf54\ub4dc \uc2e4\ud589\uc5d0 \ub530\ub77c \ud638\ucd9c \uc2a4\ud0dd\uc774 \uc313\uc774\ub294 \uacf3\uc785\ub2c8\ub2e4.",source:"@site/docs/javascript/execution-context-and-closure.md",sourceDirName:"javascript",slug:"/javascript/execution-context-and-closure",permalink:"/en/docs/javascript/execution-context-and-closure",draft:!1,editUrl:"https://github.com/0420syj/0420syj.github.io/tree/master/docs/javascript/execution-context-and-closure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Javascript Essentials \ud83e\udd5a",permalink:"/en/docs/javascript/javascript-essentials"}},p={},u=[{value:"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8 \uae30\ubcf8 \uac1c\ub150",id:"\uc2e4\ud589-\ucee8\ud14d\uc2a4\ud2b8-\uae30\ubcf8-\uac1c\ub150",level:2},{value:"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc758 \uc720\ud615",id:"\uc2e4\ud589-\ucee8\ud14d\uc2a4\ud2b8\uc758-\uc720\ud615",level:2},{value:"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc758 \uad6c\uc131 \uc694\uc18c",id:"\uc2e4\ud589-\ucee8\ud14d\uc2a4\ud2b8\uc758-\uad6c\uc131-\uc694\uc18c",level:2},{value:"Variable Environment(\ubcc0\uc218 \ud658\uacbd)",id:"variable-environment\ubcc0\uc218-\ud658\uacbd",level:3},{value:"Lexical Environment(\ub809\uc2dc\uceec \ud658\uacbd)",id:"lexical-environment\ub809\uc2dc\uceec-\ud658\uacbd",level:3},{value:"This Binding(this \ubc14\uc778\ub529)",id:"this-bindingthis-\ubc14\uc778\ub529",level:3},{value:"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc758 \uc0dd\uc131\uacfc \uc2e4\ud589 \uacfc\uc815",id:"\uc2e4\ud589-\ucee8\ud14d\uc2a4\ud2b8\uc758-\uc0dd\uc131\uacfc-\uc2e4\ud589-\uacfc\uc815",level:2},{value:"Closure(\ud074\ub85c\uc800)",id:"closure\ud074\ub85c\uc800",level:2},{value:"\ud074\ub85c\uc800\uc758 \uc608\uc81c",id:"\ud074\ub85c\uc800\uc758-\uc608\uc81c",level:3},{value:"\ud65c\uc6a9",id:"\ud65c\uc6a9",level:3},{value:"\ud074\ub85c\uc800\uc758 \uba54\ubaa8\ub9ac \uad00\ub9ac",id:"\ud074\ub85c\uc800\uc758-\uba54\ubaa8\ub9ac-\uad00\ub9ac",level:3},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:2}],c={toc:u},m="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\uc2e4\ud589-\ucee8\ud14d\uc2a4\ud2b8execution-context\uc640-\ud074\ub85c\uc800closure"},"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8(Execution Context)\uc640 \ud074\ub85c\uc800(Closure)"),(0,r.kt)("p",null,"Javascript \uc5d4\uc9c4\uc740 ",(0,r.kt)("strong",{parentName:"p"},"Memory Heap"),"\uacfc ",(0,r.kt)("strong",{parentName:"p"},"Call Stack"),"\uc73c\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. Memory Heap\uc740 \uba54\ubaa8\ub9ac \ud560\ub2f9\uc774 \uc77c\uc5b4\ub098\ub294 \uacf3\uc774\uace0, Call Stack\uc740 \ucf54\ub4dc \uc2e4\ud589\uc5d0 \ub530\ub77c \ud638\ucd9c \uc2a4\ud0dd\uc774 \uc313\uc774\ub294 \uacf3\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub54c, ",(0,r.kt)("strong",{parentName:"p"},"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8 = Call Stack\uc5d0 \uc313\uc774\ub294 \uac1d\uccb4"),"\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"Javascript\ub294 \uc2f1\uae00 \uc2a4\ub808\ub4dc \uae30\ubc18\uc758 \uc5b8\uc5b4\uc785\ub2c8\ub2e4. \uc774\ub294 ",(0,r.kt)("strong",{parentName:"p"},"Call Stack\uc774 \ud558\ub098"),"\ub77c\ub294 \uc758\ubbf8\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud55c \ubc88\uc5d0 \ud558\ub098\uc758 \uc791\uc5c5\ub9cc \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uc2e4\ud589-\ucee8\ud14d\uc2a4\ud2b8-\uae30\ubcf8-\uac1c\ub150"},"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8 \uae30\ubcf8 \uac1c\ub150"),(0,r.kt)("p",null,"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8(Execution Context)\ub294 JavaScript\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"\ucf54\ub4dc\uac00 \uc2e4\ud589\ub418\uace0 \ud3c9\uac00\ub418\ub294 \ud658\uacbd \ub610\ub294 \ubc94\uc704"),"\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub294 \ucf54\ub4dc\uc758 \uc2e4\ud589 \uc21c\uc11c\ub97c \uad00\ub9ac\ud558\uace0, \ubcc0\uc218, \ud568\uc218, \uac1d\uccb4 \ub4f1\uc758 \uc815\ubcf4\ub97c \uc800\uc7a5\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uc2e4\ud589-\ucee8\ud14d\uc2a4\ud2b8\uc758-\uc720\ud615"},"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc758 \uc720\ud615"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Global Execution Context(\uc804\uc5ed \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8)"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"JavaScript \ucf54\ub4dc\uac00 \ucc98\uc74c \uc2e4\ud589\ub420 \ub54c \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc804\uc5ed \ubcc0\uc218\uc640 \ud568\uc218\uac00 \uc5ec\uae30\uc5d0 \ud3ec\ud568\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc804\uc5ed \uac1d\uccb4(",(0,r.kt)("inlineCode",{parentName:"li"},"window")," \ub610\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"globalThis"),")\uc640 \uc5f0\uacb0\ub429\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Function Execution Context(\ud568\uc218 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8)"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud568\uc218\uac00 \ud638\ucd9c\ub420 \ub54c\ub9c8\ub2e4 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud568\uc218 \ub0b4\ubd80\uc758 \ubcc0\uc218\uc640 \ub9e4\uac1c\ubcc0\uc218, ",(0,r.kt)("inlineCode",{parentName:"li"},"this")," \uac12\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Eval Execution Context(eval \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8)"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eval()")," \ud568\uc218\uac00 \uc2e4\ud589\ub420 \ub54c \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eval()")," \ud568\uc218\uc758 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4.")))),(0,r.kt)("h2",{id:"\uc2e4\ud589-\ucee8\ud14d\uc2a4\ud2b8\uc758-\uad6c\uc131-\uc694\uc18c"},"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc758 \uad6c\uc131 \uc694\uc18c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Variable Environment(\ubcc0\uc218 \ud658\uacbd)"),": \ubcc0\uc218, \ud568\uc218 \uc120\uc5b8, \ud568\uc218 \ub9e4\uac1c\ubcc0\uc218 \ub4f1\uc758 \uc2dd\ubcc4\uc790\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Lexical Environment(\ub809\uc2dc\uceec \ud658\uacbd)"),": \ubcc0\uc218 \ud658\uacbd\uacfc \uc720\uc0ac\ud558\uc9c0\ub9cc, Lexical Scope\uc5d0 \ub530\ub77c \uc2dd\ubcc4\uc790\uc640 \uad00\ub828 \uc815\ubcf4\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"This Binding(this \ubc14\uc778\ub529)"),": \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \ucc38\uc870\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"this")," \uac12\uc785\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"variable-environment\ubcc0\uc218-\ud658\uacbd"},"Variable Environment(\ubcc0\uc218 \ud658\uacbd)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"environmentRecord(\uc2dd\ubcc4\uc790 \uc815\ubcf4)")," : \ud604\uc7ac \ucee8\ud14d\uc2a4\ud2b8 \ub0b4\uc758 \uc2dd\ubcc4\uc790(\ubcc0\uc218)\ub4e4\uc5d0 \ub300\ud55c \uc815\ubcf4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"outerEnvironmentReference(\uc678\ubd80 \ud658\uacbd \uc815\ubcf4)")," : \uc678\ubd80 \ud658\uacbd\uc5d0 \ub300\ud55c \ucc38\uc870"),(0,r.kt)("li",{parentName:"ul"},"\ubcc0\uacbd \uc0ac\ud56d\uc774 \uc2e4\uc2dc\uac04\uc73c\ub85c \ubc18\uc601\ub418\uc9c0 \uc54a\uc74c"),(0,r.kt)("li",{parentName:"ul"},"\uc2a4\ub0c5\uc0f7\uc744 \ucc0d\uc5b4\ub193\uc740 \uac83\uacfc \uac19\uc74c")),(0,r.kt)("h3",{id:"lexical-environment\ub809\uc2dc\uceec-\ud658\uacbd"},"Lexical Environment(\ub809\uc2dc\uceec \ud658\uacbd)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucd08\uae30\uc5d0\ub294 ",(0,r.kt)("strong",{parentName:"li"},"Variable Environment"),"\uc640 \ub3d9\uc77c"),(0,r.kt)("li",{parentName:"ul"},"\ubcc0\uacbd \uc0ac\ud56d\uc774 \uc2e4\uc2dc\uac04\uc73c\ub85c \ubc18\uc601\ub428")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h3",{parentName:"admonition",id:"lexical-environment\ub809\uc2dc\uceec-\ud658\uacbd\uacfc-lexical-scope\ub809\uc2dc\uceec-\uc2a4\ucf54\ud504"},"Lexical Environment(\ub809\uc2dc\uceec \ud658\uacbd)\uacfc Lexical Scope(\ub809\uc2dc\uceec \uc2a4\ucf54\ud504)"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Lexical Environment\ub294 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc758 \uad6c\uc131 \uc694\uc18c \uc911 \ud558\ub098\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Lexical Scope\ub294 \ud568\uc218\uac00 \uc120\uc5b8\ub41c \uc704\uce58\uc5d0 \ub530\ub77c \uacb0\uc815\ub418\ub294 \uc2a4\ucf54\ud504\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{parentName:"admonition",id:"lexical-scope"},"Lexical Scope"),(0,r.kt)("p",{parentName:"admonition"},"\ub809\uc2dc\uceec \uc2a4\ucf54\ud504\ub294 \ud568\uc218\ub97c \uc5b4\ub514\uc5d0 \uc120\uc5b8\ud558\uc600\ub294\uc9c0\uc5d0 \ub530\ub77c \uc0c1\uc704 \uc2a4\ucf54\ud504\uac00 \uacb0\uc815\ub418\ub294 \uac83\uc744 \ub9d0\ud569\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ud3ec\ud568\ud55c \ub300\ubd80\ubd84\uc758 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub294 \ub809\uc2dc\uceec \uc2a4\ucf54\ud504\ub97c \ub530\ub974\uba70, \uc774\ub97c \uc815\uc801 \uc2a4\ucf54\ud504(Static Scope)\ub77c\uace0\ub3c4 \ud569\ub2c8\ub2e4."),(0,r.kt)("h4",{parentName:"admonition",id:"\uc0c1\uc704-\uc2a4\ucf54\ud504\ub97c-\uacb0\uc815\ud558\ub294-\ubc29\ubc95"},"\uc0c1\uc704 \uc2a4\ucf54\ud504\ub97c \uacb0\uc815\ud558\ub294 \ubc29\ubc95"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Lexical scope/Static scope(\ub809\uc2dc\uceec \uc2a4\ucf54\ud504)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud568\uc218\ub97c \uc5b4\ub514\uc11c \uc120\uc5b8 \ud558\uc600\ub294\uc9c0\uc5d0 \ub530\ub77c \uc0c1\uc704 \uc2a4\ucf54\ud504\ub97c \uacb0\uc815"),(0,r.kt)("li",{parentName:"ul"},"JavaScript \ubc0f \ub300\ubd80\ubd84\uc758 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dynamic Scope(\ub3d9\uc801 \uc2a4\ucf54\ud504)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud568\uc218\ub97c \uc5b4\ub514\uc11c \ud638\ucd9c \ud558\uc600\ub294\uc9c0\uc5d0 \ub530\ub77c \uc0c1\uc704 \uc2a4\ucf54\ud504\ub97c \uacb0\uc815"))))),(0,r.kt)("h3",{id:"this-bindingthis-\ubc14\uc778\ub529"},"This Binding(this \ubc14\uc778\ub529)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"this \ubc14\uc778\ub529\uc740 \ud568\uc218 \ud638\ucd9c \ud328\ud134\uc5d0 \ub530\ub77c \ub3d9\uc801\uc73c\ub85c \uacb0\uc815\ub429\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"\uc2e4\ud589-\ucee8\ud14d\uc2a4\ud2b8\uc758-\uc0dd\uc131\uacfc-\uc2e4\ud589-\uacfc\uc815"},"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc758 \uc0dd\uc131\uacfc \uc2e4\ud589 \uacfc\uc815"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uc0dd\uc131 \ub2e8\uacc4"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"environmentRecord \uc0dd\uc131: \ud604\uc7ac \ucee8\ud14d\uc2a4\ud2b8 \ub0b4\uc758 \uc2dd\ubcc4\uc790 \uc815\ubcf4\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"outerEnvironmentReference \uc0dd\uc131: \uc678\ubd80 \ud658\uacbd\uc5d0 \ub300\ud55c \ucc38\uc870\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"this \ubc14\uc778\ub529: this \uac12\uc744 \uacb0\uc815\ud569\ub2c8\ub2e4.")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("h3",{parentName:"admonition",id:"\ud638\uc774\uc2a4\ud305hoisting"},"\ud638\uc774\uc2a4\ud305(Hoisting)"),(0,r.kt)("p",{parentName:"admonition"},"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc758 \uc0dd\uc131 \ub2e8\uacc4\uc5d0\uc11c\ub294 \ubcc0\uc218\uc640 \ud568\uc218 \uc120\uc5b8\ubb38\uc744 \uba3c\uc800 \uc218\uc9d1\ud569\ub2c8\ub2e4. \uc774\ub54c, \ubcc0\uc218 \uc120\uc5b8\ubb38\uc740 \uc120\uc5b8\ubd80\ub9cc \uc218\uc9d1\ud558\uace0, \ud560\ub2f9\uc740 \ubb34\uc2dc\ud569\ub2c8\ub2e4. \ud568\uc218 \uc120\uc5b8\ubb38\uc740 \ud568\uc218 \uc804\uccb4\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},"\uadf8\ub9ac\ud558\uc5ec \uac19\uc740 \ucee8\ud14d\uc2a4\ud2b8 \ub0b4\uc5d0\uc11c\ub294 \ud638\uc774\uc2a4\ud305\ub41c \ubcc0\uc218\uac00 \ud560\ub2f9\ub418\uae30 \uc804\uc5d0 \ucc38\uc870\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ub9d0\ud574 \ud638\uc774\uc2a4\ud305\uc758 '\ub04c\uc5b4\uc62c\ub9ac\ub2e4'\ub294 \uc2dd\ubcc4\uc790 \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\ub294 \uacfc\uc815\uc744 \uc774\ud574\ud558\uae30 \uc27d\uac8c \ud45c\ud604\ud55c \uac83\uc785\ub2c8\ub2e4.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\uc2e4\ud589 \ub2e8\uacc4"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucf54\ub4dc \uc2e4\ud589: \ud568\uc218 \ub0b4\ubd80 \ub610\ub294 \uc804\uc5ed \ucf54\ub4dc\ub97c \uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589\ud569\ub2c8\ub2e4.")))),(0,r.kt)("h2",{id:"closure\ud074\ub85c\uc800"},"Closure(\ud074\ub85c\uc800)"),(0,r.kt)("p",null,"\ud074\ub85c\uc800\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ud568\uc218\uc640 \uadf8 \ud568\uc218\uac00 \uc120\uc5b8\ub420 \ub2f9\uc2dc\uc758 \ub809\uc2dc\uceec \ud658\uacbd\uc758 \uc870\ud569"),"\uc785\ub2c8\ub2e4.\n\ud568\uc218\uac00 \uc678\ubd80 \ub809\uc2dc\uceec \ud658\uacbd\uc5d0 \ub300\ud55c \ucc38\uc870\ub97c \uc720\uc9c0\ud568\uc73c\ub85c\uc368, \ud074\ub85c\uc800\uac00 \ud615\uc131\ub429\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ub0b4\ubd80 \ud568\uc218\uac00 \uc678\ubd80 \ud568\uc218\uc758 \ubcc0\uc218\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function outerFunction() {\n  let outerVar = \"\uc678\ubd80 \ubcc0\uc218\";\n\n  function innerFunction() {\n    console.log(outerVar); // '\uc678\ubd80 \ubcc0\uc218'\n  }\n\n  return innerFunction;\n}\n\nconst inner = outerFunction();\ninner(); // '\uc678\ubd80 \ubcc0\uc218'\n")),(0,r.kt)("p",null,"\uc774 \uc608\uc81c\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"innerFunction"),"\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"outerFunction"),"\uc758 \ub809\uc2dc\uceec \ud658\uacbd\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"innerFunction"),"\uc774 \uc0dd\uc131\ub420 \ub54c, \uadf8 \ub809\uc2dc\uceec \ud658\uacbd\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"outerFunction"),"\uc758 \ub809\uc2dc\uceec \ud658\uacbd\uc744 \ucc38\uc870\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ud074\ub85c\uc800\uc758-\uc608\uc81c"},"\ud074\ub85c\uc800\uc758 \uc608\uc81c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function createCounter() {\n  let count = 0;\n  return function () {\n    count += 1;\n    return count;\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n")),(0,r.kt)("p",null,"\uc774 \uc608\uc81c\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"createCounter")," \ud568\uc218\ub294 \ub0b4\ubd80 \ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \uc774 \ub0b4\ubd80 \ud568\uc218\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"createCounter")," \ud568\uc218\uc758 \ub809\uc2dc\uceec \ud658\uacbd(\uc5ec\uae30\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," \ubcc0\uc218)\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"createCounter")," \ud568\uc218\uc758 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \uc885\ub8cc\ub41c \ud6c4\uc5d0\ub3c4, \ubc18\ud658\ub41c \ub0b4\ubd80 \ud568\uc218\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," \ubcc0\uc218\uc5d0 \uc811\uadfc\ud558\uc5ec \uac12\uc744 \ubcc0\uacbd\ud558\uace0 \ubc18\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc774 \ubc14\ub85c \ud074\ub85c\uc800\uc758 \ud575\uc2ec\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ud65c\uc6a9"},"\ud65c\uc6a9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc0c1\ud0dc\ub97c \uc548\uc804\ud558\uac8c \uc740\ub2c9\ud558\uace0, \uba54\ubaa8\ub9ac \ub0b4\uc5d0 \ub370\uc774\ud130\ub97c \uc720\uc9c0\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud074\ub85c\uc800\ub294 JavaScript\uc758 \ud575\uc2ec\uc801\uc778 \ud2b9\uc131\uc73c\ub85c, \ubaa8\ub4c8 \ud328\ud134, \uace0\ucc28 \ud568\uc218, \ucf5c\ubc31 \ub4f1 \ub2e4\uc591\ud55c \uacf3\uc5d0\uc11c \ud65c\uc6a9\ub429\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\ud074\ub85c\uc800\uc758-\uba54\ubaa8\ub9ac-\uad00\ub9ac"},"\ud074\ub85c\uc800\uc758 \uba54\ubaa8\ub9ac \uad00\ub9ac"),(0,r.kt)("p",null,"\ud074\ub85c\uc800\ub294 \uc678\ubd80 \ud568\uc218\uc758 \ubcc0\uc218\ub97c \ucc38\uc870\ud558\ubbc0\ub85c, \uc678\ubd80 \ud568\uc218\uc758 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \uc885\ub8cc\ub418\uc5b4\ub3c4 \uc678\ubd80 \ud568\uc218\uc758 \ubcc0\uc218\uac00 \uba54\ubaa8\ub9ac\uc5d0 \uc720\uc9c0\ub429\ub2c8\ub2e4. \uc774\ub294 \uba54\ubaa8\ub9ac \ub204\uc218\uc758 \uc6d0\uc778\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc778\uc704\uc801\uc73c\ub85c \ud074\ub85c\uc800\ub97c \ud574\uc81c\ud558\ub294 \ubc29\ubc95\uc740 \uc5c6\uc9c0\ub9cc, \ud074\ub85c\uc800\ub97c \ucc38\uc870\ud558\ub294 \ubcc0\uc218\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\ub85c \ud560\ub2f9\ud558\uc5ec \ucc38\uc870\ub97c \uc81c\uac70\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://junilhwang.github.io/TIL/Javascript/Domain/Execution-Context/"},"https://junilhwang.github.io/TIL/Javascript/Domain/Execution-Context/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gamguma.dev/post/2022/04/js_execution_context"},"https://gamguma.dev/post/2022/04/js_execution_context")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://velog.io/@chojs28/%EB%A0%89%EC%8B%9C%EC%BB%AC-%EC%8A%A4%EC%BD%94%ED%94%84%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%80-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EC%BB%A4%EB%A7%81"},"https://velog.io/@chojs28/%EB%A0%89%EC%8B%9C%EC%BB%AC-%EC%8A%A4%EC%BD%94%ED%94%84%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%80-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EC%BB%A4%EB%A7%81"))))}s.isMDXComponent=!0}}]);