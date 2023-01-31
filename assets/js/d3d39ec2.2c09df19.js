"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[6783],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var i=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,i,r=function(e,t){if(null==e)return{};var o,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(o),h=r,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||n;return o?i.createElement(m,a(a({ref:t},d),{},{components:o})):i.createElement(m,a({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,a=new Array(n);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<n;c++)a[c]=o[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}h.displayName="MDXCreateElement"},8026:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=o(7462),r=(o(7294),o(3905));const n={sidebar_label:"Register the Device Model",sidebar_position:3,tags:["Raspberry Pi","Git","Github","Linux","Google Assistant SDK","VS Code","Google"]},a="Register the Device Model",l={unversionedId:"Developer/SDK/register-device",id:"Developer/SDK/register-device",title:"Register the Device Model",description:"In order for the Google Assistant to respond to commands appropriate to your device and the given context, the Assistant needs information about your particular device. You provide this information, which includes fields like device type and manufacturer, as a device model. You can think of this model as a general class of device -- such as a light, speaker, or toy robot.",source:"@site/docs/Developer/SDK/register-device.md",sourceDirName:"Developer/SDK",slug:"/Developer/SDK/register-device",permalink:"/portfolio/docs/Developer/SDK/register-device",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Developer/SDK/register-device.md",tags:[{label:"Raspberry Pi",permalink:"/portfolio/docs/tags/raspberry-pi"},{label:"Git",permalink:"/portfolio/docs/tags/git"},{label:"Github",permalink:"/portfolio/docs/tags/github"},{label:"Linux",permalink:"/portfolio/docs/tags/linux"},{label:"Google Assistant SDK",permalink:"/portfolio/docs/tags/google-assistant-sdk"},{label:"VS Code",permalink:"/portfolio/docs/tags/vs-code"},{label:"Google",permalink:"/portfolio/docs/tags/google"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Register the Device Model",sidebar_position:3,tags:["Raspberry Pi","Git","Github","Linux","Google Assistant SDK","VS Code","Google"]},sidebar:"tutorialSidebar",previous:{title:"Configure Developer Account and Account Settings",permalink:"/portfolio/docs/Developer/SDK/developer-account"},next:{title:"Install the SDK and Sample Code",permalink:"/portfolio/docs/Developer/SDK/install-sdk"}},s={},c=[{value:"Use the registration UI",id:"use-the-registration-ui",level:2},{value:"Create model",id:"create-model",level:2},{value:"Download credentials",id:"download-credentials",level:2},{value:"Specify traits",id:"specify-traits",level:2},{value:"Edit the model",id:"edit-the-model",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"register-the-device-model"},"Register the Device Model"),(0,r.kt)("p",null,"In order for the Google Assistant to respond to commands appropriate to your device and the given context, the Assistant needs information about your particular device. You provide this information, which includes fields like device type and manufacturer, as a device model. You can think of this model as a general class of device -- such as a light, speaker, or toy robot."),(0,r.kt)("p",null,"This information is then accessible to the Assistant and is associated with your Actions Console project. No other projects have access to your model and device information."),(0,r.kt)("h2",{id:"use-the-registration-ui"},"Use the registration UI"),(0,r.kt)("p",null,"Use the registration UI in the Actions Console to register a device model."),(0,r.kt)("admonition",{title:"Note:",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The registration UI will not appear if you did not click the Device registration box when creating the project (see the previous step).")),(0,r.kt)("p",null,"Click the ",(0,r.kt)("strong",{parentName:"p"},"REGISTER MODEL")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Device models tab",src:o(1205).Z,width:"800",height:"393"})),(0,r.kt)("h2",{id:"create-model"},"Create model"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fill out all of the fields for your device. Select any device type, such as Light. See the device model JSON reference for more information on these fields."),(0,r.kt)("li",{parentName:"ol"},"When you are finished, click ",(0,r.kt)("strong",{parentName:"li"},"REGISTER MODEL"),".")),(0,r.kt)("h2",{id:"download-credentials"},"Download credentials"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"client*secret*<client-id>"),".json file must be located on the device. This file contains a client ID and client secret, but no access token. Later, you will run an authorization tool and reference this file in order to authorize the Google Assistant SDK sample to make Google Assistant queries (see the OAuth 2.0 documentation for more information). Do not rename this file."),(0,r.kt)("p",null,"Download this file and transfer it to the device. Click ",(0,r.kt)("strong",{parentName:"p"},"NEXT"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Download credentials",src:o(3345).Z,width:"425",height:"413"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For the Raspberry Pi only")),(0,r.kt)("p",null,"Make sure this file is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/pi"),". If you want to upload the file to the device, do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open a new terminal window. Run the following command in this new terminal:")),(0,r.kt)("admonition",{title:"Note:",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Do not run the following command in an SSH session connected to the device. This command transfers the JSON file from a directory on your development machine to the device. An SSH session cannot access your local directories.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scp ~/Downloads/client_secret_client-id.json pi@raspberry-pi-ip-address:/home/pi/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"password: <password-for-device>\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Close this terminal window.")),(0,r.kt)("h2",{id:"specify-traits"},"Specify traits"),(0,r.kt)("p",null,"Later, you will specify the different abilities that your device supports on this screen. But for now, click the ",(0,r.kt)("strong",{parentName:"p"},"SKIP")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Download credentials",src:o(9262).Z,width:"425",height:"354"})),(0,r.kt)("h2",{id:"edit-the-model"},"Edit the model"),(0,r.kt)("p",null,"If you need to edit the model, click its row in the list. Make sure to click SAVE after any edits."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Download credentials",src:o(4890).Z,width:"800",height:"109"})),(0,r.kt)("p",null,"If you need to download the credentials file again, click the ellipses. You can delete the model from this menu as well."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Download credentials",src:o(916).Z,width:"600",height:"202"})))}p.isMDXComponent=!0},1205:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/google-device1-c36cb746398e653300078496b04c0144.png"},3345:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/google-device2-5ac86bb6798c24311d4ed8ebcc50646c.png"},9262:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/google-device3-88949fc488c8e7cfc31e063488575ffd.png"},4890:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/google-device4-9a6ea0aa9d527a737959132b9945273d.png"},916:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/google-device5-4dc35bc6f15035ab9a1d5a5107268566.png"}}]);