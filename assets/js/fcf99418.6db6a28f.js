"use strict";(self.webpackChunk_0420_syj_github_io=self.webpackChunk_0420_syj_github_io||[]).push([[3956],{5620:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>g});var a=t(6687);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},o=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return t?a.createElement(g,i(i({ref:n},o),{},{components:t})):a.createElement(g,i({ref:n},o))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4437:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=t(557),r=(t(6687),t(5620));const l={slug:"typescript-basic",title:"TypeScript \uae30\ucd08\ud83d\udc24",description:"TypeScript\uc758 \uae30\ucd08\uc801\uc778 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4.",image:"./images/preview.png",authors:["wannysim"],tags:["typescript"],enableComments:!0},i=void 0,s={permalink:"/blog/typescript-basic",editUrl:"https://github.com/0420syj/0420syj.github.io/tree/master/blog/2023-04-16-typescript-basic/index.md",source:"@site/blog/2023-04-16-typescript-basic/index.md",title:"TypeScript \uae30\ucd08\ud83d\udc24",description:"TypeScript\uc758 \uae30\ucd08\uc801\uc778 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4.",date:"2023-04-16T00:00:00.000Z",formattedDate:"2023\ub144 4\uc6d4 16\uc77c",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:8.84,hasTruncateMarker:!0,authors:[{name:"\uc2ec\uc644",title:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 @ HandHug",url:"https://github.com/0420syj",imageURL:"https://avatars.githubusercontent.com/u/22449484",key:"wannysim"}],frontMatter:{slug:"typescript-basic",title:"TypeScript \uae30\ucd08\ud83d\udc24",description:"TypeScript\uc758 \uae30\ucd08\uc801\uc778 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4.",image:"./images/preview.png",authors:["wannysim"],tags:["typescript"],enableComments:!0},prevItem:{title:"(JS) Closure\uc640 Method Chaining \ud83d\udd17",permalink:"/blog/js-closure-and-method-chaining"},nextItem:{title:"Copilot for CLI \uccb4\ud5d8\uae30 \ud83e\udd16",permalink:"/blog/github-copilot-cli"}},p={image:t(747).Z,authorsImageUrls:[void 0]},u=[{value:"Typescript \uc18c\uac1c",id:"typescript-\uc18c\uac1c",level:2},{value:"\ubaa9\ucc28",id:"\ubaa9\ucc28",level:2},{value:"\uae30\ubcf8 \ubb38\ubc95\uacfc \uc720\ud615",id:"\uae30\ubcf8-\ubb38\ubc95\uacfc-\uc720\ud615",level:2},{value:"array",id:"array",level:3},{value:"tuple",id:"tuple",level:3},{value:"enum",id:"enum",level:3},{value:"any",id:"any",level:3},{value:"function",id:"function",level:3},{value:"void",id:"void",level:3},{value:"null\uacfc undefined",id:"null\uacfc-undefined",level:3},{value:"never",id:"never",level:3},{value:"object",id:"object",level:3},{value:"Typesciprt \uac1c\ub150",id:"typesciprt-\uac1c\ub150",level:2},{value:"Type Inference",id:"type-inference",level:3},{value:"Type Assertions",id:"type-assertions",level:3},{value:"Literal Narrowing",id:"literal-narrowing",level:3},{value:"Union Types",id:"union-types",level:3},{value:"Type Guards",id:"type-guards",level:3},{value:"Type Compatibility",id:"type-compatibility",level:3},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Interface\uc640 Class",id:"interface\uc640-class",level:2},{value:"Interface",id:"interface",level:3},{value:"Class",id:"class",level:3},{value:"Module\uacfc Namespace",id:"module\uacfc-namespace",level:2},{value:"Module",id:"module",level:3},{value:"Namespace",id:"namespace",level:3}],o={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TypeScript\uc758 \uae30\ucd08\uc801\uc778 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"typescript-\uc18c\uac1c"},"Typescript \uc18c\uac1c"),(0,r.kt)("p",null,"Typescript\ub294 Javascript\uc758 superset\uc73c\ub85c, \uc815\uc801 type\uc744 \ucd94\uac00\ud558\uc5ec Javascript\uc758 \uae30\ub2a5\uc744 \ud655\uc7a5\ud569\ub2c8\ub2e4. Typescript\ub294 \uae30\uc874 Javascript \ucf54\ub4dc\uc640 \ud638\ud658\ub418\uba74\uc11c\ub3c4 \ub300\uaddc\ubaa8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub354 \uc27d\uac8c \uc791\uc131\ud558\uace0 \uc720\uc9c0\ubcf4\uc218\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ubaa9\ucc28"},"\ubaa9\ucc28"),(0,r.kt)("p",null,"\ud06c\uac8c 4\uac00\uc9c0\ub85c \ub098\ub204\uc5b4 \uc815\ub9ac\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95%EA%B3%BC-%EC%9C%A0%ED%98%95"},"\uae30\ubcf8 \ubb38\ubc95\uacfc \uc720\ud615")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#typesciprt-%EA%B0%9C%EB%85%90"},"Typescript \uac1c\ub150")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#interface%EC%99%80-class"},"Interface\uc640 Class")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module%EA%B3%BC-namespace"},"Module\uacfc Namespace"))),(0,r.kt)("h2",{id:"\uae30\ubcf8-\ubb38\ubc95\uacfc-\uc720\ud615"},"\uae30\ubcf8 \ubb38\ubc95\uacfc \uc720\ud615"),(0,r.kt)("p",null,"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\ub294 \ubcc0\uc218\uc5d0 \ud0c0\uc785 \uc5b4\ub178\ud14c\uc774\uc158\uc744 \ucd94\uac00\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uba87 \uac00\uc9c0 \uae30\ubcf8 \ud0c0\uc785\uc774 \uc788\uc2b5\ub2c8\ub2e4:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \uc22b\uc790"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \ud14d\uc2a4\ud2b8"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \ucc38 \ub610\ub294 \uac70\uc9d3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"any"),": \ubaa8\ub4e0 \uc720\ud615, \uc720\ud615\uc744 \uc9c0\uc815\ud558\uc9c0 \uc54a\uc73c\ub824\ub294 \uacbd\uc6b0")),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \ud0c0\uc785 \uc5b4\ub178\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubcc0\uc218\ub97c \uc120\uc5b8\ud558\ub294 \ubc29\ubc95\uc758 \uc608\uc2dc\uc785\ub2c8\ub2e4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'let firstName: string = "John";\nlet age: number = 30;\nlet isStudent: boolean = false;\n')),(0,r.kt)("h3",{id:"array"},"array"),(0,r.kt)("p",null,"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c array\uc740 \ub2e4\uc74c\uacfc \uac19\uc774 \uc791\uc131\ub429\ub2c8\ub2e4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'let numbers: number[] = [1, 2, 3];\nlet names: string[] = ["John", "Jane", "Bob"];\n\n// \ub610\ub294\n\nlet numbers: Array<number> = [1, 2, 3];\n')),(0,r.kt)("h3",{id:"tuple"},"tuple"),(0,r.kt)("p",null,"tuple\uc740 \uace0\uc815\ub41c \uae38\uc774\uc758 array\uc785\ub2c8\ub2e4. \uac01 \uc694\uc18c\ub294 \ud2b9\uc815 \ud0c0\uc785\uc744 \uac00\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'let person: [string, number] = ["John", 30];\n')),(0,r.kt)("h3",{id:"enum"},"enum"),(0,r.kt)("p",null,"enum\uc740 \uc774\ub984\uc774 \uc788\ub294 \uc0c1\uc218 \uc9d1\ud569\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"enum Color {\n  Red,\n  Green,\n  Blue,\n}\n\nlet c: Color = Color.Green;\n")),(0,r.kt)("h3",{id:"any"},"any"),(0,r.kt)("p",null,"any\ub294 \ubaa8\ub4e0 \uc720\ud615\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4. any\ub294 \ud0c0\uc785 \uac80\uc0ac\ub97c \uac74\ub108\ub6f0\uae30 \ub54c\ubb38\uc5d0, \ud0c0\uc785 \uc548\uc804\uc131\uc744 \uc783\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'let notSure: any = 4;\n\nnotSure = "maybe a string instead";\n\nnotSure = false; // okay, definitely a boolean\n')),(0,r.kt)("h3",{id:"function"},"function"),(0,r.kt)("p",null,"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c function\uc740 \ub2e4\uc74c\uacfc \uac19\uc774 \uc791\uc131\ub429\ub2c8\ub2e4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function add(a: number, b: number): number {\n  return a + b;\n}\n")),(0,r.kt)("h3",{id:"void"},"void"),(0,r.kt)("p",null,"void\ub294 \ubc18\ud658 \uac12\uc774 \uc5c6\ub294 \ud568\uc218\uc758 \ubc18\ud658 \ud0c0\uc785\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'function warnUser(): void {\n  console.log("This is my warning message");\n}\n')),(0,r.kt)("h3",{id:"null\uacfc-undefined"},"null\uacfc undefined"),(0,r.kt)("p",null,"null\uacfc undefined\ub294 \uac01\uac01 \uc790\uc2e0\uc758 \ud0c0\uc785\uc744 \uac00\uc9d1\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c null\uacfc undefined\ub294 \ubaa8\ub4e0 \ud0c0\uc785\uc758 \ud558\uc704 \ud0c0\uc785\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let u: undefined = undefined;\n\nlet n: null = null;\n")),(0,r.kt)("h3",{id:"never"},"never"),(0,r.kt)("p",null,"never\ub294 \uc808\ub300 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294 \uac12\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4. never\ub294 \ud568\uc218\uc758 \ubc18\ud658 \ud0c0\uc785\uc73c\ub85c \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function error(message: string): never {\n  throw new Error(message);\n}\n")),(0,r.kt)("h3",{id:"object"},"object"),(0,r.kt)("p",null,"object\ub294 \uc6d0\uc2dc \ud0c0\uc785\uc744 \uc81c\uc678\ud55c \ubaa8\ub4e0 \ud0c0\uc785\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'declare function create(o: object | null): void;\n\ncreate({ prop: 0 }); // OK\n\ncreate(null); // OK\n\ncreate(42); // Error\n\ncreate("string"); // Error\n\ncreate(false); // Error\n\ncreate(undefined); // Error\n')),(0,r.kt)("h2",{id:"typesciprt-\uac1c\ub150"},"Typesciprt \uac1c\ub150"),(0,r.kt)("h3",{id:"type-inference"},"Type Inference"),(0,r.kt)("p",null,"Type Inference\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uac00 \ud0c0\uc785\uc744 \ucd94\ub860\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ubcc0\uc218\uc758 \ud0c0\uc785\uc744 \uc9c0\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 \ubcc0\uc218\uc758 \ud0c0\uc785\uc744 \ucd94\ub860\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'let a = 1 + 2; // a\ub294 number \ud0c0\uc785\uc73c\ub85c \ucd94\ub860\ub429\ub2c8\ub2e4.\n\nlet b = [1, null]; // b\ub294 (number | null)[] \ud0c0\uc785\uc73c\ub85c \ucd94\ub860\ub429\ub2c8\ub2e4.\n\nlet c = "abc".substr(1); // c\ub294 string \ud0c0\uc785\uc73c\ub85c \ucd94\ub860\ub429\ub2c8\ub2e4.\n')),(0,r.kt)("h3",{id:"type-assertions"},"Type Assertions"),(0,r.kt)("p",null,"Type Assertions\ub294 \ucef4\ud30c\uc77c\ub7ec\uc5d0\uac8c \ud2b9\uc815 \ud0c0\uc785\uc73c\ub85c \ud0c0\uc785\uc744 \uc9c0\uc815\ud558\ub3c4\ub85d \uc9c0\uc2dc\ud569\ub2c8\ub2e4. Typescript\ub294 \uac1c\ubc1c\uc790\uac00 \ud0c0\uc785\uc744 \uc9c0\uc815\ud558\ub294 \uac83\uc744 \ud5c8\uc6a9\ud558\uc9c0\ub9cc, \ud0c0\uc785\uc744 \uc9c0\uc815\ud558\ub294 \uac83\uc740 \uac1c\ubc1c\uc790\uc758 \ucc45\uc784\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,'\ub2e4\uc2dc \ub9d0\ud574, \ucef4\ud30c\uc77c\ub7ec\uc5d0\uac8c "\ub0b4\uac00 \uc2dc\ud0a4\ub294 \ub300\ub85c \ud558\ub77c"\ub77c\uace0 \ub2e8\uc5b8(assert)\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'let someValue: any = "this is a string";\n\nlet strLength: number = (someValue as string).length; // as \ubb38\ubc95\n\n// \ub610\ub294\n\nlet strLength: number = (<string>someValue).length; // JSX \ubb38\ubc95\uc5d0\uc11c\ub294 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n')),(0,r.kt)("h3",{id:"literal-narrowing"},"Literal Narrowing"),(0,r.kt)("p",null,"Literal Narrowing\uc740 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uac00 \ub9ac\ud130\ub7f4 \ud0c0\uc785\uc744 \ucd95\uc18c\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. \ub9ac\ud130\ub7f4 \ud0c0\uc785\uc740 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \ud2b9\uc815\ud55c \uac12\uc744 \ub098\ud0c0\ub0b4\ub294 \ud0c0\uc785\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let x: 10 = 10; // x\ub294 10\uc774\ub77c\ub294 \ub9ac\ud130\ub7f4 \ud0c0\uc785\uc744 \uac00\uc9d1\ub2c8\ub2e4.\n")),(0,r.kt)("h3",{id:"union-types"},"Union Types"),(0,r.kt)("p",null,"Union Types\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uac00 \uc5ec\ub7ec \ud0c0\uc785\uc744 \ud558\ub098\uc758 \ud0c0\uc785\uc73c\ub85c \ud569\uce58\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let x: number | string = 10; // x\ub294 number \ub610\ub294 string \ud0c0\uc785\uc744 \uac00\uc9d1\ub2c8\ub2e4.\n")),(0,r.kt)("h3",{id:"type-guards"},"Type Guards"),(0,r.kt)("p",null,"Type Guards\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uac00 \ud0c0\uc785\uc744 \ud655\uc778\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. \ud0c0\uc785\uc744 \ud655\uc778\ud558\ub294 \ubc29\ubc95\uc740 \ub450 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"typeof"),(0,r.kt)("li",{parentName:"ul"},"instanceof")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2,6,11,15}","{2,6,11,15}":!0},'function isNumber(x: any): x is number {\n  return typeof x === "number"; // return x instanceof Number;\n}\n\nfunction isString(x: any): x is string {\n  return typeof x === "string"; // return x instanceof String;\n}\n\nfunction padLeft(value: string, padding: string | number) {\n  // "number"\n  if (isNumber(padding)) {\n    return Array(padding + 1).join(" ") + value;\n  }\n  // "string"\n  if (isString(padding)) {\n    return padding + value;\n  }\n  throw new Error(`Expected string or number, got \'${padding}\'.`);\n}\n')),(0,r.kt)("h3",{id:"type-compatibility"},"Type Compatibility"),(0,r.kt)("p",null,"Type Compatibility\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uac00 \ud0c0\uc785\uc744 \ud638\ud658\ub418\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. \ud0c0\uc785 \ud638\ud658\uc131\uc740 \uad6c\uc870\uc801 \ud0c0\uc774\ud551(structural typing)\uc744 \uae30\ubc18\uc73c\ub85c \ud569\ub2c8\ub2e4. \uad6c\uc870\uc801 \ud0c0\uc774\ud551\uc740 \ud0c0\uc785\uc774 \uad6c\uc870\uc801\uc73c\ub85c \uac19\uc73c\uba74 \ud638\ud658\ub41c\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Named {\n  name: string; // name \ud504\ub85c\ud37c\ud2f0\uac00 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4.\n}\n\nclass Person {\n  name: string; // name \ud504\ub85c\ud37c\ud2f0\uac00 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4.\n}\n\nlet p: Named;\n\n// \uad6c\uc870\uc801 \ud0c0\uc774\ud551\uc774 string \ud0c0\uc785\uc744 \uac00\uc9c4 name \ud504\ub85c\ud37c\ud2f0\ub97c \uac00\uc9c0\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud638\ud658\ub429\ub2c8\ub2e4.\n\np = new Person();\n")),(0,r.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("p",null,"Type Aliases\ub294 \ud0c0\uc785\uc744 \uc0c8\ub85c\uc6b4 \uc774\ub984\uc73c\ub85c \uc815\uc758\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'type Name = string;\n\ntype NameResolver = () => string;\n\ntype NameOrResolver = Name | NameResolver;\n\nfunction getName(n: NameOrResolver): Name {\n  if (typeof n === "string") {\n    return n;\n  } else {\n    return n();\n  }\n}\n')),(0,r.kt)("h2",{id:"interface\uc640-class"},"Interface\uc640 Class"),(0,r.kt)("h3",{id:"interface"},"Interface"),(0,r.kt)("p",null,"Interface\ub294 \uac1d\uccb4\uc758 \ubaa8\uc591\uc744 \uc815\uc758\ud558\uc5ec \ud2b9\uc815 \uc694\uad6c \uc0ac\ud56d\uc744 \ucda9\uc871\ud558\ub3c4\ub85d \ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nconst user: User = {\n  id: 1,\n  name: "John Doe",\n  email: "john@example.com",\n};\n')),(0,r.kt)("h3",{id:"class"},"Class"),(0,r.kt)("p",null,"Class\ub294 \ud2b9\uc815 \uad6c\uc870\uc640 \ub3d9\uc791\uc744 \uac00\uc9c4 \uac1d\uccb4\ub97c \ub9cc\ub4dc\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'class Animal {\n  name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n\n  speak(): void {\n    console.log(`My name is ${this.name}`);\n  }\n}\n\nconst dog = new Animal("Buddy");\ndog.speak(); // \ucd9c\ub825 : My name is Buddy\n')),(0,r.kt)("h2",{id:"module\uacfc-namespace"},"Module\uacfc Namespace"),(0,r.kt)("h3",{id:"module"},"Module"),(0,r.kt)("p",null,"Module\uc740 \ucf54\ub4dc\ub97c \uad6c\uc131\ud558\uace0 \ucea1\uc290\ud654\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4. Module\uc740 \ubcc0\uc218, \ud568\uc218, \ud074\ub798\uc2a4 \ub4f1\uc744 \ud3ec\ud568\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="math.ts"',title:'"math.ts"'},"export function add(a: number, b: number): number {\n  return a + b;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="subtraction.ts"',title:'"subtraction.ts"'},"export function subtract(a: number, b: number): number {\n  return a - b;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=index.ts",title:"index.ts"},'import { add } from "./math";\nimport { subtract } from "./subtraction";\n\nconsole.log(add(1, 2)); // \ucd9c\ub825 : 3\nconsole.log(subtract(5, 3)); // \ucd9c\ub825 : 2\n')),(0,r.kt)("h3",{id:"namespace"},"Namespace"),(0,r.kt)("p",null,"Namespace\ub294 \ucf54\ub4dc\ub97c \uad6c\uc131\ud558\ub294 \ub610 \ub2e4\ub978 \ubc29\ubc95\uc785\ub2c8\ub2e4. Namespace\ub294 \uc774\ub984 \ucda9\ub3cc\uc744 \ubc29\uc9c0\ud558\uace0 \uad00\ub828 \uae30\ub2a5\uc744 \ud568\uaed8 \uadf8\ub8f9\ud654\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"namespace Geometry {\n  export interface Point {\n    x: number;\n    y: number;\n  }\n\n  export function calculateDistance(p1: Point, p2: Point): number {\n    const dx = p1.x - p2.x;\n    const dy = p1.y - p2.y;\n    return Math.sqrt(dx * dx + dy * dy);\n  }\n}\n\nconst point1: Geometry.Point = { x: 0, y: 0 };\nconst point2: Geometry.Point = { x: 3, y: 4 };\nconst distance: number = Geometry.calculateDistance(point1, point2);\n\nconsole.log(distance); // Output: 5\n")))}m.isMDXComponent=!0},747:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/preview-3be9bb8cbd34d15da2730cea25895f50.png"}}]);