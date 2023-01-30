"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3062],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(o),g=r,f=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return o?n.createElement(f,i(i({ref:t},p),{},{components:o})):n.createElement(f,i({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},2317:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_label:"Configure Developer Account and Account Settings",sidebar_position:1,tags:["Account Configuration","Google Assistant SDK","VS Code","Google"]},i="Configure Developer Account and Account Settings",l={unversionedId:"Developer/SDK/developer-account",id:"Developer/SDK/developer-account",title:"Configure Developer Account and Account Settings",description:"For this doc, I was the sole author. To write this Raspberry Pi configuration doc, I worked directly with Google engineers to test and configure the Pi to configuire and test the USB microphone/speaker.",source:"@site/docs/Developer/SDK/developer-account.md",sourceDirName:"Developer/SDK",slug:"/Developer/SDK/developer-account",permalink:"/portfolio/docs/Developer/SDK/developer-account",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Developer/SDK/developer-account.md",tags:[{label:"Account Configuration",permalink:"/portfolio/docs/tags/account-configuration"},{label:"Google Assistant SDK",permalink:"/portfolio/docs/tags/google-assistant-sdk"},{label:"VS Code",permalink:"/portfolio/docs/tags/vs-code"},{label:"Google",permalink:"/portfolio/docs/tags/google"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Configure Developer Account and Account Settings",sidebar_position:1,tags:["Account Configuration","Google Assistant SDK","VS Code","Google"]},sidebar:"tutorialSidebar",previous:{title:"Configure and Test Audio",permalink:"/portfolio/docs/Developer/SDK/hardware-and-network"},next:{title:"Register the Device Model",permalink:"/portfolio/docs/Developer/SDK/register-device"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Configure developer account settings",id:"configure-developer-account-settings",level:2},{value:"Set activity controls for your account",id:"set-activity-controls-for-your-account",level:3}],p={toc:s};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure-developer-account-and-account-settings"},"Configure Developer Account and Account Settings"),(0,r.kt)("admonition",{title:"Note:",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For this doc, I was the sole author. To write this Raspberry Pi configuration doc, I worked directly with Google engineers to test and configure the Pi to configuire and test the USB microphone/speaker."),(0,r.kt)("p",{parentName:"admonition"},"The software and tools used to complete this doc can be found under ",(0,r.kt)("strong",{parentName:"p"},"Tags")," at the end of the doc.")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"To access to Google Assistant SDK, developers need to configure a project\nand their developer account settings in the Actions Console. These are the last\nsteps required before installing the SDK."),(0,r.kt)("h2",{id:"configure-developer-account-settings"},"Configure developer account settings"),(0,r.kt)("p",null,"To enable access to the Google Assistant API, complete the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("a",{parentName:"p",href:"https://console.actions.google.com/"},"Actions Console"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add/import project"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To create a new project, Enter your project's name in the ",(0,r.kt)("strong",{parentName:"p"},"Project Name")," field, then click ",(0,r.kt)("strong",{parentName:"p"},"CREATE PROJECT"),"."),(0,r.kt)("p",{parentName:"li"},"Alternatively, if you already have an existing Google Cloud Platform project,\nyou can select that project and import it.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you created a new project, click the ",(0,r.kt)("strong",{parentName:"p"},"Device registration")," box near the bottom of the page."),(0,r.kt)("p",{parentName:"li"},"If you imported a previously-created project, this box will not be displayed. Instead, select the ",(0,r.kt)("strong",{parentName:"p"},"Device Registration")," tab (under ",(0,r.kt)("strong",{parentName:"p"},"ADVANCED OPTIONS"),") from the left navbar."))),(0,r.kt)("p",null,"Keep this browser tab open. You will use it to register a device model in a later step."),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enable the Google Assistant API on the project you selected. You need to do this in the Cloud Platform Console.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("a",{parentName:"p",href:"https://console.developers.google.com/apis/api/embeddedassistant.googleapis.com/overview"},"Enable API"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You must configure the OAuth consent screen for your project in the Cloud Platform Console. Note that most fields on this page are optional."))),(0,r.kt)("h3",{id:"set-activity-controls-for-your-account"},"Set activity controls for your account"),(0,r.kt)("p",null,"To use the Google Assistant, you must share certain activity data with Google. The Google Assistant needs this data to function properly and is not specific to the SDK."),(0,r.kt)("p",null,"Open the Activity Controls page for the Google account that you want to use with the Assistant. You can use any Google account, it does not need to be your developer account."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ensure the following toggle switches are enabled (blue):")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Web & App Activity",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Be sure to select the ",(0,r.kt)("strong",{parentName:"li"},"Include Chrome history and activity from sites, apps, and devices that use Google services")," checkbox."))),(0,r.kt)("li",{parentName:"ul"},"Device Information"),(0,r.kt)("li",{parentName:"ul"},"Voice & Audio Activity")))}u.isMDXComponent=!0}}]);