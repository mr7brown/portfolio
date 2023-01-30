"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(g,r(r({ref:t},p),{},{components:n})):o.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const a={sidebar_label:"HBO Gitlab-setup",sidebar_position:1,tags:["Git","Github","Linux","Google Assistant SDK","VS Code","HBO"]},r="Overview",l={unversionedId:"developer-docs/git/gitlab",id:"developer-docs/git/gitlab",title:"Overview",description:"This guide assumes that you have access to HBO's GitLab instance and have installed the Gatsby CLI.",source:"@site/docs/developer-docs/git/gitlab.md",sourceDirName:"developer-docs/git",slug:"/developer-docs/git/gitlab",permalink:"/portfolio/docs/developer-docs/git/gitlab",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/developer-docs/git/gitlab.md",tags:[{label:"Git",permalink:"/portfolio/docs/tags/git"},{label:"Github",permalink:"/portfolio/docs/tags/github"},{label:"Linux",permalink:"/portfolio/docs/tags/linux"},{label:"Google Assistant SDK",permalink:"/portfolio/docs/tags/google-assistant-sdk"},{label:"VS Code",permalink:"/portfolio/docs/tags/vs-code"},{label:"HBO",permalink:"/portfolio/docs/tags/hbo"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"HBO Gitlab-setup",sidebar_position:1,tags:["Git","Github","Linux","Google Assistant SDK","VS Code","HBO"]},sidebar:"tutorialSidebar",previous:{title:"Git/GitLab",permalink:"/portfolio/docs/developer-docs/git/"},next:{title:"Getting Started with Git",permalink:"/portfolio/docs/developer-docs/git/git-setup"}},s={},c=[{value:"Clone the Partner Hub Repo",id:"clone-the-partner-hub-repo",level:2},{value:"Working with GitLab and SSH keys",id:"working-with-gitlab-and-ssh-keys",level:2},{value:"SSH key generation",id:"ssh-key-generation",level:3},{value:"Adding SSH key to GitLab",id:"adding-ssh-key-to-gitlab",level:3},{value:"Testing connection",id:"testing-connection",level:2},{value:"Submit test commit",id:"submit-test-commit",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("admonition",{title:"Note:",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This guide assumes that you have access to HBO's GitLab instance and have installed the Gatsby CLI.")),(0,i.kt)("p",null,"This guide provides instructions for establishing a connection with the GitLab repo for the Partner Hub. By the end, you will:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone the ",(0,i.kt)("inlineCode",{parentName:"li"},"/partnerhub/web")," repo."),(0,i.kt)("li",{parentName:"ol"},"Validate SSH key pair."),(0,i.kt)("li",{parentName:"ol"},"Push a test commit.")),(0,i.kt)("p",null,"After successfully pushing a test commit, you can begin contributing to the Partner Hub."),(0,i.kt)("h2",{id:"clone-the-partner-hub-repo"},"Clone the Partner Hub Repo"),(0,i.kt)("p",null,"To begin, you need to clone the ",(0,i.kt)("inlineCode",{parentName:"p"},"/partnerhub/web")," repo. From your terminal, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git clone git@git.REDACTED:/partnerhub/web.git\n")),(0,i.kt)("p",null,"After cloning the repo, go to the Submit Test Commit section. If your account was provisioned correctly, you should be able to make commits without additional setup. If you are unable to make a test commit, continue to the next section to establish a key pair."),(0,i.kt)("h2",{id:"working-with-gitlab-and-ssh-keys"},"Working with GitLab and SSH keys"),(0,i.kt)("p",null,"HBO's GitLab instance requires an SSH connection instead of the traditional HTTPS connection. The following sections provide instructions for generating an SSH key and adding it to your GitLab profile."),(0,i.kt)("p",null,"Gitlab's ",(0,i.kt)("a",{parentName:"p",href:"https://git.wmedia.tech/help/ssh/README#generating-a-new-ssh-key-pair"},"SSH Key")," guideline contains more information on the commands behind key generation."),(0,i.kt)("h3",{id:"ssh-key-generation"},"SSH key generation"),(0,i.kt)("p",null,"To generate a new SSH key:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open a terminal and run:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'# Use your desktop account\n$ ssh-keygen -t ed25519 -C "email@example.com"\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Follow the prompts to continue (it is recommended that you enter a password for an extra layer of security).")),(0,i.kt)("h3",{id:"adding-ssh-key-to-gitlab"},"Adding SSH key to GitLab"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To copy your SSH key, run:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ pbcopy < ~/.ssh/id_ed25519.pub\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Navigate to ",(0,i.kt)("strong",{parentName:"li"},"SSH Keys")," (link has been redacted) in your GitLab ",(0,i.kt)("strong",{parentName:"li"},"User Settings"),"."),(0,i.kt)("li",{parentName:"ol"},"Paste your copied key in the text box, it should look something like this: ",(0,i.kt)("inlineCode",{parentName:"li"},"47:xf:71:x7:02:1x:7x:x9:9x:x3:xx:7x:xx:6x:0x:xx"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter a descriptive title and click ",(0,i.kt)("strong",{parentName:"li"},"Add key"),".")),(0,i.kt)("h2",{id:"testing-connection"},"Testing connection"),(0,i.kt)("p",null,"To test if you correctly added an SSH key to your GitLab profile, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# The actual GitLab instance has been redacted.\n$ ssh -T git@gitlab.com\n")),(0,i.kt)("p",null,"If this is the first time connecting to the GitLab instance you will be prompted with a message asking you to continue, answer ",(0,i.kt)("inlineCode",{parentName:"p"},"yes")," to add GitLab to the list of trusted hosts. If successful, you should receive a Welcome to GitLab, ",(0,i.kt)("inlineCode",{parentName:"p"},"@username"),"! message."),(0,i.kt)("p",null,"With the connection validated, you should be able to add commits to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/partnerhub/web")," repo. The last step is to submit a test commit!"),(0,i.kt)("h2",{id:"submit-test-commit"},"Submit test commit"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"src/content/test")," allows you to test your connection to the GitLab instance without impacting QA or Production environments. To test your connection:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git checkout -b test\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create a Markdown file with your username as the title ",(0,i.kt)("inlineCode",{parentName:"li"},"<user@hbo.md>")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"src/content/test/")," folder."),(0,i.kt)("li",{parentName:"ol"},"Commit changes :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ git add <filename>\n$ git commit -m "<commit message>"\n$ git push\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Once successful, use the link in the terminal to create a merge request. All merge requests should be assigned to ",(0,i.kt)("strong",{parentName:"li"},"REDACTED"),".")),(0,i.kt)("p",null,"Congratulations, you just made your first commit, and can now begin contributing to the HBO code base!"))}u.isMDXComponent=!0}}]);