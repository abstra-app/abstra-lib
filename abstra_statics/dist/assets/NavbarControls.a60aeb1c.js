import{b as i,ee as S,ef as q,d as w,f as j,e as C,o as s,c,w as o,Y as T,eb as G,u as l,a as Y,e9 as z,aS as M,bT as m,aG as f,ed as Q,cQ as H,S as x,a0 as $,dj as L,dc as X,de as J,X as Z,ah as K,aW as ee,eg as te,cv as ne}from"./index.e1ec3e10.js";import{L as O}from"./linters.9304e625.js";import{S as re}from"./workspaceStore.104b1723.js";import{A as D}from"./index.73a3b654.js";import{C as ae}from"./CloseCircleOutlined.c4ffadcd.js";import{A as le}from"./index.af5f8dc4.js";import{W as oe}from"./workspaces.90758c14.js";import{E as ie,u as se}from"./editor.1e355c7c.js";import{p as ue}from"./popupNotifcation.29a171ed.js";import{F as ce}from"./PhArrowSquareOut.vue.a4f55619.js";import{_ as de}from"./DocsButton.vue_vue_type_script_setup_true_lang.74d2d7e6.js";import{G as fe}from"./PhChats.vue.43012746.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="6e413909-d54e-4411-ba16-00e22e299b1c",n._sentryDebugIdIdentifier="sentry-dbid-6e413909-d54e-4411-ba16-00e22e299b1c")}catch{}})();var pe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M518.3 459a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z"}},{tag:"path",attrs:{d:"M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"}}]},name:"cloud-upload",theme:"outlined"};const me=pe;var ge={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"filled"};const ye=ge;var be={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M865.3 244.7c-.3-.3-61.1 59.8-182.1 180.6l-84.9-84.9 180.9-180.9c-95.2-57.3-217.5-42.6-296.8 36.7A244.42 244.42 0 00419 432l1.8 6.7-283.5 283.4c-6.2 6.2-6.2 16.4 0 22.6l141.4 141.4c6.2 6.2 16.4 6.2 22.6 0l283.3-283.3 6.7 1.8c83.7 22.3 173.6-.9 236-63.3 79.4-79.3 94.1-201.6 38-296.6z"}}]},name:"tool",theme:"filled"};const _e=be;var ve={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}}]},name:"warning",theme:"outlined"};const he=ve;function U(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){Oe(n,a,t[a])})}return n}function Oe(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var A=function(e,t){var r=U({},e,t.attrs);return i(S,U({},r,{icon:me}),null)};A.displayName="CloudUploadOutlined";A.inheritAttrs=!1;const k=A;function E(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){Ce(n,a,t[a])})}return n}function Ce(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var I=function(e,t){var r=E({},e,t.attrs);return i(S,E({},r,{icon:ye}),null)};I.displayName="GithubFilled";I.inheritAttrs=!1;const Se=I;function W(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){we(n,a,t[a])})}return n}function we(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var N=function(e,t){var r=W({},e,t.attrs);return i(S,W({},r,{icon:q}),null)};N.displayName="InfoCircleOutlined";N.inheritAttrs=!1;const Pe=N;function R(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){je(n,a,t[a])})}return n}function je(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var B=function(e,t){var r=R({},e,t.attrs);return i(S,R({},r,{icon:_e}),null)};B.displayName="ToolFilled";B.inheritAttrs=!1;const xe=B;function V(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){ke(n,a,t[a])})}return n}function ke(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var F=function(e,t){var r=V({},e,t.attrs);return i(S,V({},r,{icon:he}),null)};F.displayName="WarningOutlined";F.inheritAttrs=!1;const De=F,$e=w({__name:"Linter",emits:["issueFixed"],setup(n,{emit:e}){const t=j(()=>{var u,p;return(p=(u=O.asyncComputed.result.value)==null?void 0:u.flatMap(d=>d.issues))!=null?p:[]}),r=j(()=>{const u=t.value.map(p=>y(O.fromName(p.ruleName)));return u.includes("error")?"error":u.includes("warning")?"warning":"info"}),a=C(!1);async function _(u){a.value=!0;try{await u.fix(),e("issueFixed",u)}finally{a.value=!1}}function y(u){return u.type==="bug"?"warning":u.type==="security"?"error":"info"}return(u,p)=>t.value.length>0?(s(),c(l(H),{key:0,placement:"bottomRight"},{content:o(()=>[i(l(D),{direction:"vertical",style:{"max-height":"300px",overflow:"auto"}},{default:o(()=>[(s(!0),T(M,null,G(t.value,(d,b)=>(s(),c(l(le),{key:b+d.ruleName,type:y(l(O).fromName(d.ruleName)),style:{width:"400px"},message:l(O).fromName(d.ruleName).label},{description:o(()=>[i(l(D),{direction:"vertical",style:{width:"100%"}},{default:o(()=>[Y("div",null,z(d.label),1),(s(!0),T(M,null,G(d.fixes,g=>(s(),c(l(m),{key:g.name,loading:a.value,disabled:a.value,onClick:P=>_(g)},{icon:o(()=>[i(l(xe))]),default:o(()=>[f(" "+z(g.label),1)]),_:2},1032,["loading","disabled","onClick"]))),128))]),_:2},1024)]),_:2},1032,["type","message"]))),128))]),_:1})]),default:o(()=>[i(l(m),{class:Q(["linter-btn",r.value])},{default:o(()=>[r.value==="info"?(s(),c(l(Pe),{key:0})):r.value==="error"?(s(),c(l(ae),{key:1})):(s(),c(l(De),{key:2}))]),_:1},8,["class"])]),_:1})):x("",!0)}});const Ae=$($e,[["__scopeId","data-v-47a27891"]]),Ie=w({__name:"DeployButton",props:{isReadyToDeploy:{type:Boolean,required:!0},projectId:{type:String,required:!1}},setup(n){const e=n,t=C(!1),r=C(!1),a=C(!1);function _(){r.value=!1}async function y(){if(!!e.projectId){t.value=!0;try{await oe.deploy(),window.open(u(),"_blank"),a.value=!0,setTimeout(()=>{a.value=!1},6e4)}catch(p){ue("Deploy failed",String(p))}t.value=!1}}function u(){if(!!e.projectId)return`${ie.consoleUrl}/projects/${e.projectId}/builds`}return(p,d)=>n.isReadyToDeploy?(s(),c(l(H),{key:0,open:r.value,"onUpdate:open":d[0]||(d[0]=b=>r.value=b),trigger:"click",title:"Deploy to Abstra Cloud"},{content:o(()=>[a.value?(s(),c(l(L),{key:0,class:"deploy-state-message",align:"middle"},{default:o(()=>[i(l(J),null,{default:o(()=>[f(" Deploy started at "),i(l(X),{href:u(),target:"_blank"},{default:o(()=>[f("Abstra Cloud")]),_:1},8,["href"]),f(". ")]),_:1})]),_:1})):x("",!0),i(l(L),{class:"action-buttons",gap:"small"},{default:o(()=>[i(l(m),{onClick:_},{default:o(()=>[f("Close")]),_:1}),a.value?(s(),c(l(m),{key:0,class:"deploy-button",type:"primary",href:u(),target:"_blank"},{icon:o(()=>[i(l(ce),{color:"white",size:"20"})]),default:o(()=>[f(" Open Console ")]),_:1},8,["href"])):(s(),c(l(m),{key:1,type:"primary",loading:t.value,onClick:y},{icon:o(()=>[i(l(k))]),default:o(()=>[f(" Deploy ")]),_:1},8,["loading"]))]),_:1})]),default:o(()=>[t.value?(s(),c(l(m),{key:0,disabled:""},{default:o(()=>[f("Deploying")]),_:1})):(s(),c(l(m),{key:1},{icon:o(()=>[i(l(k))]),default:o(()=>[f(" Deploy ")]),_:1}))]),_:1},8,["open"])):(s(),c(l(m),{key:1,disabled:""},{icon:o(()=>[i(l(k))]),default:o(()=>[f(" Deploy ")]),_:1}))}});const Ne=$(Ie,[["__scopeId","data-v-a2fa9262"]]),Be=w({__name:"GithubStars",setup(n){return(e,t)=>(s(),c(l(m),{href:"https://github.com/abstra-app/abstra-lib",target:"_blank",type:"text",size:"small"},{default:o(()=>[i(l(Se)),f(" GitHub ")]),_:1}))}}),Fe=w({__name:"IntercomButton",setup(n){return(e,t)=>(s(),c(l(m),{class:"intercom-launcher",target:"_blank",type:"text",size:"small",style:{display:"flex","align-items":"center",gap:"6px"}},{icon:o(()=>[i(l(fe),{size:18})]),default:o(()=>[f(" Support ")]),_:1}))}}),Te=w({__name:"NavbarControls",props:{showGithubStars:{type:Boolean},docsPath:{},editingModel:{}},setup(n){var b;const e=n,t=se(),r=(b=re.instance)==null?void 0:b.isStagingRelease,{result:a,refetch:_}=O.asyncComputed,y=C(!1);function u(){setTimeout(async()=>{await _(),y.value&&u()},1e3)}Z(()=>{y.value=!0,u()}),K(()=>{y.value=!1});const p=j(()=>{var P,v;return((v=(P=a.value)==null?void 0:P.flatMap(h=>["error","security","bug"].includes(h.type)?h.issues:[]))!=null?v:[]).length>0}),d=j(()=>{var g;return p.value?"issues-found":(g=e.editingModel)!=null&&g.hasChanges()?"unsaved":r?"is-staging":"ready"});return(g,P)=>(s(),c(l(D),null,{default:o(()=>{var v;return[e.showGithubStars?(s(),c(Be,{key:0})):x("",!0),i(de,{path:e.docsPath},null,8,["path"]),i(Fe),(v=g.editingModel)!=null&&v.hasChanges()?x("",!0):(s(),c(Ae,{key:1})),i(l(ne),null,{default:o(()=>[i(l(ee),null,te({default:o(()=>{var h;return[i(Ne,{"is-ready-to-deploy":d.value==="ready","project-id":(h=l(t).cloudProject)==null?void 0:h.id},null,8,["is-ready-to-deploy","project-id"])]}),_:2},[d.value==="unsaved"?{name:"title",fn:o(()=>[f(" Save your project before deploying ")]),key:"0"}:d.value==="issues-found"?{name:"title",fn:o(()=>[f(" There are errors on your project. Please fix them before deploying. ")]),key:"1"}:d.value==="is-staging"?{name:"title",fn:o(()=>[f(" This is a staging release. You can't deploy it to Abstra Cloud. ")]),key:"2"}:void 0]),1024)]),_:1})]}),_:1}))}});const Qe=$(Te,[["__scopeId","data-v-b4cc0fe7"]]);export{Qe as N};
//# sourceMappingURL=NavbarControls.a60aeb1c.js.map
