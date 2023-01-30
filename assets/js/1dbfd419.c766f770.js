"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[1913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Mastering Git",sidebar_position:3,tags:["Git","Github","Linux","VS Code","HBO"]},i="Overview",l={unversionedId:"developer-docs/git/master-git",id:"developer-docs/git/master-git",title:"Overview",description:"At this point in the Git Collection you should understand what Git is and how to use it. This post takes all the lessons learned so far and takes them a step further by looking at branching (which is typical for projects with multiple contributors).",source:"@site/docs/developer-docs/git/master-git.md",sourceDirName:"developer-docs/git",slug:"/developer-docs/git/master-git",permalink:"/portfolio/docs/developer-docs/git/master-git",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/developer-docs/git/master-git.md",tags:[{label:"Git",permalink:"/portfolio/docs/tags/git"},{label:"Github",permalink:"/portfolio/docs/tags/github"},{label:"Linux",permalink:"/portfolio/docs/tags/linux"},{label:"VS Code",permalink:"/portfolio/docs/tags/vs-code"},{label:"HBO",permalink:"/portfolio/docs/tags/hbo"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Mastering Git",sidebar_position:3,tags:["Git","Github","Linux","VS Code","HBO"]},sidebar:"tutorialSidebar",previous:{title:"Advanced Git Commands",permalink:"/portfolio/docs/developer-docs/git/advanced-git"},next:{title:"Technical Specifications",permalink:"/portfolio/docs/technical-specifications/"}},s={},p=[{value:"Branching",id:"branching",level:2},{value:"Branching Example",id:"branching-example",level:3},{value:"Creating a Branch",id:"creating-a-branch",level:3},{value:"Edit, Push, Merge, and Pull New Branch",id:"edit-push-merge-and-pull-new-branch",level:2},{value:"Edit",id:"edit",level:3},{value:"Push",id:"push",level:3},{value:"Merge",id:"merge",level:3},{value:"Pull",id:"pull",level:3},{value:"Closing Thoughts",id:"closing-thoughts",level:2}],c={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"At this point in the Git Collection you should understand what Git is and how to use it. This post takes all the lessons learned so far and takes them a step further by looking at branching (which is typical for projects with multiple contributors)."),(0,r.kt)("h2",{id:"branching"},"Branching"),(0,r.kt)("p",null,"When working on a team with multiple contributors a best practice is to work with branches. By default, there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch that is used for the ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD"),". Essentially, branching allows you to work independently, while not impacting the main source of the information or code. First, let's look at an example of how this works at HBO (and most companies), then we will go through an exercise."),(0,r.kt)("h3",{id:"branching-example"},"Branching Example"),(0,r.kt)("p",null,"At HBO, I am responsible for all content updates to our Partner Hub (a site where 3rd-party partners can see our delivery requirements), and I am also responsible for front-end development/maintenance of the Partner Hub. However, there is also an Application Architecture team that is responsible for deployments, security, compliance, etc., and two other full-stack developers that also contribute to the code base."),(0,r.kt)("p",null,"At any given time, we are all working on something that impacts the code and the prod. site. For this reason, and many others, we cannot work on the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch."),(0,r.kt)("p",null,"Instead, we create branches so that we can all work independently of each other. And once we are finished updating, we push our changes to GitLab and create a merge request. A merge request basically means that an update was made in a new branch, call it ",(0,r.kt)("strong",{parentName:"p"},"branch-a"),", and those updates are ready to be reviewed and then merged into the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch."),(0,r.kt)("h3",{id:"creating-a-branch"},"Creating a Branch"),(0,r.kt)("p",null,"Let's start creating branches!"),(0,r.kt)("admonition",{title:"Note:",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A good way to gain experience is to create branches and merge them into your personal Github account.")),(0,r.kt)("p",null,"We will start with the project created in the ",(0,r.kt)("em",{parentName:"p"},"Getting Started with Git")," excercise. Alternatively, if you have an existing Git repo, skip to ",(0,r.kt)("strong",{parentName:"p"},"Step 3"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open a new terminal window and navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"<new-git-repo>")," folder:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cd desktop/new-git-repo\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"A good practice when starting a new terminal session in a folder is to check the status:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Checking the status tells you if files need to be commited, tracked, etc.\n$ git status\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prior to creating a new branch you should make sure that you have a clean working directory to avoid merge conflicts or lost work.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Check to see which branch you are on:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# The asterisk '*' shows you the branch you are currently on\n$ git branch\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Since you have not created additional branches, you should only see ",(0,r.kt)("inlineCode",{parentName:"li"},"*master"))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Create a new branch:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Portfolio is only place holder, you can enter any name for the branch\n$ git branch portfolio\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Switch from the ",(0,r.kt)("inlineCode",{parentName:"li"},"master")," branch to the ",(0,r.kt)("inlineCode",{parentName:"li"},"portfolio")," branch:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git checkout portfolio\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A shortcut for creating a branch ",(0,r.kt)("inlineCode",{parentName:"li"},"git branch <branch name>")," and switching to the branch ",(0,r.kt)("inlineCode",{parentName:"li"},"git checkout <branch name>")," is to write ",(0,r.kt)("inlineCode",{parentName:"li"},"git checkout -b <branch name>"),". This creates a new branch and switches to the branch in one command.")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Check to see that you are on the ",(0,r.kt)("inlineCode",{parentName:"li"},"portfolio")," branch:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# The asterisk should be next to 'portfolio'\n$ git branch\n")),(0,r.kt)("h2",{id:"edit-push-merge-and-pull-new-branch"},"Edit, Push, Merge, and Pull New Branch"),(0,r.kt)("p",null,"Now that you have created a new branch and your terminal is pointed to the branch, you can create files, edit files, etc."),(0,r.kt)("p",null,"Before moving on to the rest of this section, try refering back to how to create, add, and commit updates to the repository. Don't worry if you don't remember or if you need to refer to the previous post. The steps are below as well."),(0,r.kt)("h3",{id:"edit"},"Edit"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check to see which branch you are on:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git branch\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Even though this was the last command entered, I am making this step one to establish a habit - if/when you work on complex projects with multiple branches, it is easy to forget which branch you are on and update the wrong branch.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create a new file ",(0,r.kt)("inlineCode",{parentName:"li"},"portfolio.md"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ touch portfolio.md\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can also create a file and add some text.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Check to see the update:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git status\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Tell Git to track the file and add it to the ",(0,r.kt)("inlineCode",{parentName:"li"},"index"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git add portfolio.md\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Commit changes:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ git commit -m "<enter descriptive mesage>"\n')),(0,r.kt)("h3",{id:"push"},"Push"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Push commit:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git push --set-upstream origin portfolio\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When adding a new branch to Github, you need to enter ",(0,r.kt)("inlineCode",{parentName:"li"},"--set-upstream origin <branch name>")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"git push"),". Subsequent pushes do not require ",(0,r.kt)("inlineCode",{parentName:"li"},"--set upstream origin"),", only ",(0,r.kt)("inlineCode",{parentName:"li"},"git push"),".")),(0,r.kt)("h3",{id:"merge"},"Merge"),(0,r.kt)("p",null,"Before the updates can be seen on Github, you need to merge the changes from the ",(0,r.kt)("inlineCode",{parentName:"p"},"portfolio")," branch to the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch on Github."),(0,r.kt)("p",null,"To begin, Go to the Github repo for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<new-git-repo>"),". You should see a ",(0,r.kt)("strong",{parentName:"p"},"Compare & pull request")," button near the top of the page:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Compare and pull request")," button."),(0,r.kt)("li",{parentName:"ol"},"Enter a descriptive title for the commit, as well as a detailed description of what is in the commit - then click the ",(0,r.kt)("strong",{parentName:"li"},"Create pull request")," button."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Merge pull request")," button, followed by the ",(0,r.kt)("strong",{parentName:"li"},"Confirm merge request")," button.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You won't have merge conflicts since you are not merging multiple branches.")),(0,r.kt)("p",null,"You should now see a success message, which means that your branch has successfully been merged to the master branch on Github. Last step is to ",(0,r.kt)("inlineCode",{parentName:"p"},"pull")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," on Github into the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," on your local directory."),(0,r.kt)("h3",{id:"pull"},"Pull"),(0,r.kt)("p",null,"To ensure that your local ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch is in sync with the remote Github branch, you need to create a pull request. This request essentially takes the master branch from Github and compares it to your local ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch. If there are updates on the remote branch, the ",(0,r.kt)("inlineCode",{parentName:"p"},"pull")," request makes the same updates to your local ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("inlineCode",{parentName:"li"},"<new-git-repo>"),", check the status and branch:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git status\n$ git branch\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You should have a clean directory and be on the ",(0,r.kt)("inlineCode",{parentName:"li"},"portfolio")," branch.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Switch to the master directory:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git checkout master\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Pull the remote Github ",(0,r.kt)("inlineCode",{parentName:"li"},"master")," branch into your local ",(0,r.kt)("inlineCode",{parentName:"li"},"working directory"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git pull\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check the status:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git status\n")),(0,r.kt)("p",null,"You should now have a local file system for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<new-git-repo>")," that matches what is on Github."),(0,r.kt)("h2",{id:"closing-thoughts"},"Closing Thoughts"),(0,r.kt)("p",null,"That's it! You have just worked through the typical lifecycle of a docs as code project."))}h.isMDXComponent=!0}}]);