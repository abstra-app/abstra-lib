import{i as b}from"./metadata.6dae6f5c.js";import{W as h}from"./Watermark.26f2aba8.js";import{F as k}from"./PhArrowSquareOut.vue.836c769a.js";import{d as w,eo as v,f as x,e as C,u as e,o as t,Y as m,b as p,w as r,S as D,c as n,aG as f,d9 as y,aS as I,eb as z,dh as _,ec as S,e9 as F,ed as T,a0 as B}from"./index.348c20e3.js";import{u as H}from"./workspaceStore.48365cdc.js";import"./index.01326c86.js";import{L}from"./LoadingOutlined.825cc1a4.js";import{C as N}from"./Card.50d6e7ff.js";import"./PhWebhooksLogo.vue.d5d11153.js";import"./url.0ba35dd1.js";import"./colorHelpers.6380af7a.js";import"./TabPane.69e2d06f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="249dab2b-bb19-4eda-8aeb-aa3ada676117",o._sentryDebugIdIdentifier="sentry-dbid-249dab2b-bb19-4eda-8aeb-aa3ada676117")}catch{}})();const V={key:0,class:"home-container"},W=w({__name:"Home",setup(o){const i=v(),l=H(),u=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(c=>c.id!=="home"))||[]}),d=C(null),g=async(s,c)=>{d.value=c,await i.push({path:`/${s}`}),d.value=null};return(s,c)=>e(l).state.workspace?(t(),m("div",V,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[u.value.length===0?(t(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[f(" There are no forms available for you. ")]),_:1})):(t(!0),m(I,{key:1},z(u.value,a=>(t(),n(e(N),{key:a.id,class:T(["form-card",{loading:d.value===a.id}]),"body-style":{cursor:"pointer"},onClick:E=>g(a.path,a.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(t(),n(S(e(b)(a.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[f(F(a.name),1)]),_:2},1024),d.value!==a.id?(t(),n(e(k),{key:0,size:"20"})):(t(),n(e(L),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(h,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Q=B(W,[["__scopeId","data-v-060376d1"]]);export{Q as default};
//# sourceMappingURL=Home.9dd4a7f7.js.map
