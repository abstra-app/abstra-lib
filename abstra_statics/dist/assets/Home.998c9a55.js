import{i as k}from"./metadata.5dca74eb.js";import{W as h}from"./Watermark.39bb92dc.js";import{F as b}from"./PhArrowSquareOut.vue.bc5ec086.js";import{d as w,eq as v,f as x,e as C,u as e,X as m,b as p,w as r,R as D,o as a,c as n,aF as f,d5 as y,aR as I,ee as z,dd as _,ef as F,ec as T,ea as B,$ as H}from"./vue-router.69927c79.js";import{u as L}from"./workspaceStore.91aae28d.js";import"./index.ca913977.js";import{L as N}from"./LoadingOutlined.d7c2d773.js";import{C as R}from"./Card.6acb8ef5.js";import"./PhBug.vue.c1f0fc08.js";import"./PhCheckCircle.vue.a78c3ad5.js";import"./PhKanban.vue.822abbd2.js";import"./PhWebhooksLogo.vue.634ddca9.js";import"./url.35d2aa0d.js";import"./colorHelpers.d6e31d7c.js";import"./TabPane.6cfaa3a3.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="3dbe4e8e-5688-4a0e-84dc-6eaa1e9e31be",o._sentryDebugIdIdentifier="sentry-dbid-3dbe4e8e-5688-4a0e-84dc-6eaa1e9e31be")}catch{}})();const S={key:0,class:"home-container"},V=w({__name:"Home",setup(o){const i=v(),l=L(),u=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(c=>c.id!=="home"))||[]}),d=C(null),g=async(s,c)=>{d.value=c,await i.push({path:`/${s}`}),d.value=null};return(s,c)=>e(l).state.workspace?(a(),m("div",S,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[u.value.length===0?(a(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[f(" There are no forms available for you. ")]),_:1})):(a(!0),m(I,{key:1},z(u.value,t=>(a(),n(e(R),{key:t.id,class:B(["form-card",{loading:d.value===t.id}]),"body-style":{cursor:"pointer"},onClick:W=>g(t.path,t.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(a(),n(F(e(k)(t.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[f(T(t.name),1)]),_:2},1024),d.value!==t.id?(a(),n(e(b),{key:0,size:"20"})):(a(),n(e(N),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(h,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Z=H(V,[["__scopeId","data-v-060376d1"]]);export{Z as default};
//# sourceMappingURL=Home.998c9a55.js.map
