import{i as h}from"./metadata.c7b5404c.js";import{W as k}from"./Watermark.a1da381b.js";import{F as w}from"./PhArrowSquareOut.vue.17d3a7d8.js";import{d as v,eo as b,f as x,e as C,u as e,o as a,Y as m,b as p,w as r,S as D,c as n,aG as f,d9 as y,aS as I,eb as z,dh as _,ec as S,e9 as F,ed as T,a0 as B}from"./index.89aec283.js";import{u as H}from"./workspaceStore.69dafedd.js";import"./index.6d41c8a0.js";import{L}from"./LoadingOutlined.04ae3580.js";import{C as N}from"./Card.8d215ed6.js";import"./PhBug.vue.013036b8.js";import"./PhCheckCircle.vue.42d9926c.js";import"./PhKanban.vue.30ef9eec.js";import"./PhWebhooksLogo.vue.a29d0ffd.js";import"./url.6d5f4f4e.js";import"./colorHelpers.e057a311.js";import"./TabPane.1384c0bb.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="d974d2f3-9a7c-4582-9d7e-9c222558992e",o._sentryDebugIdIdentifier="sentry-dbid-d974d2f3-9a7c-4582-9d7e-9c222558992e")}catch{}})();const V={key:0,class:"home-container"},W=v({__name:"Home",setup(o){const i=b(),l=H(),u=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(c=>c.id!=="home"))||[]}),d=C(null),g=async(s,c)=>{d.value=c,await i.push({path:`/${s}`}),d.value=null};return(s,c)=>e(l).state.workspace?(a(),m("div",V,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[u.value.length===0?(a(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[f(" There are no forms available for you. ")]),_:1})):(a(!0),m(I,{key:1},z(u.value,t=>(a(),n(e(N),{key:t.id,class:T(["form-card",{loading:d.value===t.id}]),"body-style":{cursor:"pointer"},onClick:E=>g(t.path,t.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(a(),n(S(e(h)(t.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[f(F(t.name),1)]),_:2},1024),d.value!==t.id?(a(),n(e(w),{key:0,size:"20"})):(a(),n(e(L),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(k,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Z=B(W,[["__scopeId","data-v-060376d1"]]);export{Z as default};
//# sourceMappingURL=Home.52f5f8a3.js.map
