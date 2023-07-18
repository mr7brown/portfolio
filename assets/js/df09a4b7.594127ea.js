"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4380],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4609:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_label:"Advanced Git Commands",sidebar_position:3,tags:["Git","Github","Linux","VS Code","HBO"]},o=void 0,l={unversionedId:"Developer/Git/advanced-git",id:"Developer/Git/advanced-git",title:"advanced-git",description:"Git Shortcuts",source:"@site/docs/Developer/Git/advanced-git.md",sourceDirName:"Developer/Git",slug:"/Developer/Git/advanced-git",permalink:"/portfolio/docs/Developer/Git/advanced-git",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Developer/Git/advanced-git.md",tags:[{label:"Git",permalink:"/portfolio/docs/tags/git"},{label:"Github",permalink:"/portfolio/docs/tags/github"},{label:"Linux",permalink:"/portfolio/docs/tags/linux"},{label:"VS Code",permalink:"/portfolio/docs/tags/vs-code"},{label:"HBO",permalink:"/portfolio/docs/tags/hbo"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Advanced Git Commands",sidebar_position:3,tags:["Git","Github","Linux","VS Code","HBO"]},sidebar:"tutorialSidebar",previous:{title:"Getting Started with Git",permalink:"/portfolio/docs/Developer/Git/git-setup"},next:{title:"Mastering Git",permalink:"/portfolio/docs/Developer/Git/master-git"}},s={},c=[{value:"Git Shortcuts",id:"git-shortcuts",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"General",id:"general",level:3},{value:"Branching",id:"branching",level:3}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"git-shortcuts"},"Git Shortcuts"),(0,a.kt)("p",null,"Her is a small list of Git shortcuts that developers use daily."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git add .")," - Adds all files in the working directory. Only use this command if you know exactly what you are adding.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you are unsure what you are adding, run ",(0,a.kt)("inlineCode",{parentName:"li"},"git status"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'git commit -am "<enter commit message"')," - If you already have files previously tracked and commited, running this command combines the ",(0,a.kt)("inlineCode",{parentName:"li"},"git add")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"git commit")," commands."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git checkout -b <enter-branch-name>")," - This command combines the ",(0,a.kt)("inlineCode",{parentName:"li"},'git branch "<enter-branch-name>')," and ",(0,a.kt)("inlineCode",{parentName:"li"},"git checkout <enter-branch-name>")," commands.")),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("p",null,"The last section of the Git Commands collection is Best Practices. While the list is not exhaustive, it does contain some commonm best practices when working with Git."),(0,a.kt)("h3",{id:"general"},"General"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Frequently check the status and branch. As projects become complex it is easy to update the wrong branch or be working on a branch that isn't current."),(0,a.kt)("li",{parentName:"ol"},"When working on projects with multiple contributors, it is a good practice to run ",(0,a.kt)("inlineCode",{parentName:"li"},"git pull")," on the ",(0,a.kt)("inlineCode",{parentName:"li"},"master")," branch before creating a new branch and making updates. This helps eliminate merge conflicts."),(0,a.kt)("li",{parentName:"ol"},"Write good commit messages. Writing a good commit message can help you and other contributors quickly scan commit messages to identify where a bug or issue was introduced. It can also help maintainers correctly assign reviewers.")),(0,a.kt)("h3",{id:"branching"},"Branching"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When working with branches, it is importantant to delete your branches after they have been fully merged to the ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," branch. By design, branches are not always up to date with the ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," branch. So, to avoid future merge conflicts be sure to delete your merged branches."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Delete both the remote (Github) branch and the local branch ",(0,a.kt)("inlineCode",{parentName:"li"},"git branch -d <branch-name>"),". Note: You can't delete a branch you are currently on."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Categorize your branches. If you have code-based updates and text-based updates, seperate them into multiple branches. This makes it easier to review and you will likely run into situations where one commit is approved and one is rejected due to an error."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"One exception is if the text-based updates require the code-based updates to render properly. If this occurs, be sure to communicate this with the developer responsible for merging updates.")))))}p.isMDXComponent=!0}}]);