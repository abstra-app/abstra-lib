import{i as g}from"./metadata.e875ad20.js";import{W as h}from"./Watermark.01b77f9a.js";import{F as k}from"./PhArrowSquareOut.vue.034b054e.js";import{d as w,eF as v,f as x,e as C,u as e,o as a,Y as f,b as p,w as r,S as D,c as n,aG as m,d9 as y,aS as I,e9 as z,dh as _,ey as F,ea as S,ei as T,a0 as B}from"./index.da417b99.js";import{u as H}from"./workspaceStore.d6571f74.js";import"./index.a31600e4.js";import{L}from"./LoadingOutlined.33b6ee5a.js";import{C as N}from"./Card.b6523889.js";import"./PhRobot.vue.ffbb3420.js";import"./PhWebhooksLogo.vue.c7346892.js";import"./url.330ee082.js";import"./colorHelpers.84ad1908.js";import"./TabPane.65204d1a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="bcf7b7dc-88db-4d11-b0d1-b4b625ef06b3",o._sentryDebugIdIdentifier="sentry-dbid-bcf7b7dc-88db-4d11-b0d1-b4b625ef06b3")}catch{}})();const V={key:0,class:"home-container"},W=w({__name:"Home",setup(o){const i=v(),l=H(),u=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(c=>c.id!=="home"))||[]}),d=C(null),b=async(s,c)=>{d.value=c,await i.push({path:`/${s}`}),d.value=null};return(s,c)=>e(l).state.workspace?(a(),f("div",V,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[u.value.length===0?(a(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[m(" There are no forms available for you. ")]),_:1})):(a(!0),f(I,{key:1},z(u.value,t=>(a(),n(e(N),{key:t.id,class:T(["form-card",{loading:d.value===t.id}]),"body-style":{cursor:"pointer"},onClick:E=>b(t.path,t.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(a(),n(F(e(g)(t.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[m(S(t.name),1)]),_:2},1024),d.value!==t.id?(a(),n(e(k),{key:0,size:"20"})):(a(),n(e(L),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(h,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const U=B(W,[["__scopeId","data-v-060376d1"]]);export{U as default};
//# sourceMappingURL=Home.dc4c639d.js.map
