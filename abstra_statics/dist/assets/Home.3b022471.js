import{i as h}from"./metadata.7bf025a1.js";import{W as k}from"./Watermark.566080cd.js";import{F as b}from"./PhArrowSquareOut.vue.d0589854.js";import{d as w,eo as v,f as x,e as C,u as e,o as a,Y as f,b as p,w as r,S as D,c as n,aG as m,d9 as y,aS as I,eb as z,dh as _,ec as S,e9 as F,ed as T,a0 as B}from"./index.b89dc45f.js";import{u as H}from"./workspaceStore.5cb8f179.js";import"./index.b1ec966c.js";import{L}from"./LoadingOutlined.874bd522.js";import{C as N}from"./Card.441ffee2.js";import"./PhRobot.vue.d19255ad.js";import"./PhWebhooksLogo.vue.073e87f4.js";import"./url.8768f4d3.js";import"./colorHelpers.fed26893.js";import"./TabPane.20dd9866.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="33f197c2-1abe-4639-8df8-9bc65eb74217",o._sentryDebugIdIdentifier="sentry-dbid-33f197c2-1abe-4639-8df8-9bc65eb74217")}catch{}})();const V={key:0,class:"home-container"},W=w({__name:"Home",setup(o){const i=v(),l=H(),u=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(d=>d.id!=="home"))||[]}),c=C(null),g=async(s,d)=>{c.value=d,await i.push({path:`/${s}`}),c.value=null};return(s,d)=>e(l).state.workspace?(a(),f("div",V,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[u.value.length===0?(a(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[m(" There are no forms available for you. ")]),_:1})):(a(!0),f(I,{key:1},z(u.value,t=>(a(),n(e(N),{key:t.id,class:T(["form-card",{loading:c.value===t.id}]),"body-style":{cursor:"pointer"},onClick:E=>g(t.path,t.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(a(),n(S(e(h)(t.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[m(F(t.name),1)]),_:2},1024),c.value!==t.id?(a(),n(e(b),{key:0,size:"20"})):(a(),n(e(L),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(k,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const U=B(W,[["__scopeId","data-v-060376d1"]]);export{U as default};
//# sourceMappingURL=Home.3b022471.js.map
