"use strict";(self.webpackChunkconstrix_docs=self.webpackChunkconstrix_docs||[]).push([[820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},a="Setting up environment",l={unversionedId:"Official-page/Setup environment",id:"Official-page/Setup environment",title:"Setting up environment",description:"Firstly, you must have Node.js, git and vscode installed.",source:"@site/docs/Official-page/Setup environment.md",sourceDirName:"Official-page",slug:"/Official-page/Setup environment",permalink:"/docs/Official-page/Setup environment",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Official-page/Setup environment.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Constrix - Official page",permalink:"/docs/category/constrix---official-page"},next:{title:"Cloning repo",permalink:"/docs/Official-page/cloning-repo"}},p={},s=[{value:"Windows user",id:"windows-user",level:2},{value:"Linux user",id:"linux-user",level:2},{value:"Debian",id:"debian",level:3},{value:"Arch linux",id:"arch-linux",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-up-environment"},"Setting up environment"),(0,i.kt)("p",null,"Firstly, you must have ",(0,i.kt)("inlineCode",{parentName:"p"},"Node.js"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"vscode")," installed."),(0,i.kt)("p",null,"We have utilized Tailwind CSS and daisyUI to design the website, showcasing a modern look."),(0,i.kt)("h2",{id:"windows-user"},"Windows user"),(0,i.kt)("p",null,"download git on here:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"https://nodejs.org/en/download"))),(0,i.kt)("p",null,"download git on here:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/download/win"},"https://git-scm.com/download/win"))),(0,i.kt)("p",null,"download vscode on here:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"https://code.visualstudio.com/")," ")),(0,i.kt)("h2",{id:"linux-user"},"Linux user"),(0,i.kt)("p",null,"For linux user just simply run a command."),(0,i.kt)("h3",{id:"debian"},"Debian"),(0,i.kt)("p",null,"This installation method is applicable to any Linux distribution that uses ",(0,i.kt)("inlineCode",{parentName:"p"},"apt-get"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt-get install nodejs npm git -y\n")),(0,i.kt)("h3",{id:"arch-linux"},"Arch linux"),(0,i.kt)("p",null,"This installation method is applicable to any Linux distribution that uses ",(0,i.kt)("inlineCode",{parentName:"p"},"pacman"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo pacman install nodejs npm git\n")),(0,i.kt)("p",null,"After the installation, entering ",(0,i.kt)("inlineCode",{parentName:"p"},"npm --version"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"node --version")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"git --version")," in the terminal should return your respective versions."))}d.isMDXComponent=!0}}]);