import{i as b}from"./metadata.67ea2850.js";import{W as k}from"./Watermark.cfc6f99c.js";import{F as h}from"./PhArrowSquareOut.vue.bc6c1d0c.js";import{d as w,eo as v,f as x,e as C,u as e,o as a,Y as m,b as p,w as r,S as D,c as n,aG as f,db as y,aS as I,eb as z,dj as _,ec as S,e9 as F,ed as T,a0 as B}from"./index.d4880c83.js";import{u as H}from"./workspaceStore.8cbda076.js";import"./index.2d33a839.js";import{L}from"./LoadingOutlined.9d36199e.js";import{C as N}from"./Card.0c167888.js";import"./PhWebhooksLogo.vue.3446eab7.js";import"./url.d026de0f.js";import"./colorHelpers.b67812ee.js";import"./TabPane.d843833b.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="216cb2d0-5682-46b6-95e2-6b3976a10851",o._sentryDebugIdIdentifier="sentry-dbid-216cb2d0-5682-46b6-95e2-6b3976a10851")}catch{}})();const V={key:0,class:"home-container"},W=w({__name:"Home",setup(o){const i=v(),l=H(),u=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(d=>d.id!=="home"))||[]}),c=C(null),g=async(s,d)=>{c.value=d,await i.push({path:`/${s}`}),c.value=null};return(s,d)=>e(l).state.workspace?(a(),m("div",V,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[u.value.length===0?(a(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[f(" There are no forms available for you. ")]),_:1})):(a(!0),m(I,{key:1},z(u.value,t=>(a(),n(e(N),{key:t.id,class:T(["form-card",{loading:c.value===t.id}]),"body-style":{cursor:"pointer"},onClick:j=>g(t.path,t.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(a(),n(S(e(b)(t.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[f(F(t.name),1)]),_:2},1024),c.value!==t.id?(a(),n(e(h),{key:0,size:"20"})):(a(),n(e(L),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(k,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Q=B(W,[["__scopeId","data-v-060376d1"]]);export{Q as default};
//# sourceMappingURL=Home.782e80fc.js.map
