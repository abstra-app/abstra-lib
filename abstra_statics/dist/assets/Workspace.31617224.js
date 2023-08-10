import{d as g,H as S,J as B,r as x,K as j,b as o,c as t,F as y,L as v,x as c,N as k,G as w,e as r,I,D as h,t as A,w as T,z as _,q as f,O as L,Q as D,a as N}from"./registerWidgets.6b985ae3.js";import{d as O,s as W,w as E,a as F,b as R,c as K,m as P,e as V}from"./icons.d11f56c4.js";import{T as z}from"./Tooltip.f51842e2.js";import{_ as G}from"./logo.084e5d7c.js";import{a as H}from"./asyncComputed.c09cd499.js";import{W as J}from"./workspaces.c092262c.js";import{L as $}from"./login.0b22b3fc.js";import{D as M}from"./DocsButton.0195f6db.js";import"./activeRecord.2d62b323.js";import"./pubsub.f8c17d6a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5ab04d5c-73be-4464-ae66-a1ecd045acc1",e._sentryDebugIdIdentifier="sentry-dbid-5ab04d5c-73be-4464-ae66-a1ecd045acc1")}catch{}})();const q={class:"sidebar"},Q={class:"section-name"},U=["onClick"],X={class:"item-name"},Y={key:0,class:"tag soon"},Z={key:1,class:"tag beta"},ee={key:2,class:"tag cloud"},oe=g({__name:"Sidebar",setup(e){var p;const n=S(),i=B(),a=x((p=i.name)!=null?p:"forms"),u=j(()=>[{name:"Runtime",items:[{name:"Forms",icon:O,path:"forms"},{name:"Jobs",icon:W,path:"jobs",cloud:!0},{name:"Hooks",icon:E,path:"hooks"},{name:"Dashes",icon:F,path:"dashes",beta:!0}]},{name:"Resources",items:[{name:"Tables",icon:R,path:"tables",beta:!0}]},{name:"Settings",items:[{name:"Style",icon:K,path:"style"},{name:"Sidebar",icon:P,path:"sidebar"}]}]),m=l=>{l.unavailable||(n.push(l.path),a.value=l.path)};return(l,b)=>(o(),t("div",q,[(o(!0),t(y,null,v(_(u),d=>(o(),t("div",{key:d.name,class:"section"},[c("span",Q,k(d.name),1),(o(!0),t(y,null,v(d.items,s=>(o(),t("div",{key:s.name,role:"button",class:w(["item",{active:a.value===s.path,disabled:s.unavailable||d.cloud}]),tabindex:"0",onClick:ke=>m(s)},[r(I,{class:w(["icon",{disabled:s.unavailable,active:a.value===s.path}]),path:s.icon,width:"20",height:"20"},null,8,["class","path"]),c("span",X,k(s.name),1),s.unavailable?(o(),t("span",Y,"SOON")):h("",!0),s.beta?(o(),t("span",Z,"BETA")):h("",!0),s.cloud?(o(),t("span",ee,"CLOUD")):h("",!0),s.warning?(o(),A(z,{key:3,class:"warning",text:s.warning,fixed:!0,top:18,left:18},{default:T(()=>[r(I,{path:_(V),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):h("",!0)],10,U))),128))]))),128))]))}});const te=f(oe,[["__scopeId","data-v-320e9ff3"]]);const se={},C=e=>(L("data-v-ccfb70ef"),e=e(),D(),e),ae={class:"logo"},ne=C(()=>c("img",{src:G,alt:"Abstra cloud logo"},null,-1)),ce=C(()=>c("span",null," Abstra ",-1)),re=[ne,ce];function le(e,n){return o(),t("div",ae,re)}const ie=f(se,[["render",le],["__scopeId","data-v-ccfb70ef"]]),de={key:0,class:"login-block"},_e={key:1,class:"login-block"},ue=["href"],pe={key:1,class:"button"},be={key:2,class:"login-block"},he=g({__name:"LoginBlock",setup(e){const n=x(!1),{loading:i,result:a,refetch:u}=H(()=>$.get());async function m(){const b=prompt(`Login to our console at https://cloud.abstra.io and get an API Key to deploy your Projects.

Enter your API Key here:`);!b||(await $.create(b),u())}async function p(){!a.value||(await a.value.delete(),u())}async function l(){!a.value||(n.value=!0,confirm("Are you sure you want to deploy this project to Abstra Cloud?")&&(await J.deploy(),window.open(`https://cloud.abstra.io/projects/${a.value.projectId}/builds`,"_blank")),n.value=!1)}return(b,d)=>_(i)?(o(),t("div",de,"loading...")):_(a)?(o(),t("div",_e,[c("a",{class:"button",href:`https://cloud.abstra.io/projects/${_(a).projectId}`,target:"_blank"},"Go to console ",8,ue),n.value?(o(),t("button",pe,"Deploying...")):(o(),t("button",{key:0,class:"button",onClick:l},"Deploy")),c("button",{class:"button",onClick:p},"Logout")])):(o(),t("div",be,[c("button",{class:"button",onClick:m},"Login to deploy")]))}});const fe=f(he,[["__scopeId","data-v-d5de8b44"]]),me=e=>(L("data-v-77e07499"),e=e(),D(),e),ye=me(()=>c("div",{class:"grow"},null,-1)),ge={class:"workspace"},ve=g({__name:"Workspace",setup(e){return(n,i)=>{const a=N("router-view");return o(),t(y,null,[c("nav",null,[r(ie),ye,r(M),r(fe)]),c("div",ge,[r(te,{class:"sidebar"}),r(a)])],64)}}});const Ae=f(ve,[["__scopeId","data-v-77e07499"]]);export{Ae as default};
//# sourceMappingURL=Workspace.31617224.js.map
