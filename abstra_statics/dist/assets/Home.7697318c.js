import{i as h}from"./metadata.45d83432.js";import{W as k}from"./Watermark.666336c3.js";import{F as w}from"./PhArrowSquareOut.vue.5f7fdb68.js";import{d as b,eo as v,f as x,e as C,u as e,o as a,Y as f,b as p,w as r,S as D,c as n,aG as m,d9 as y,aS as I,eb as z,dh as _,ec as S,e9 as F,ed as T,a0 as B}from"./index.b1cce20c.js";import{u as H}from"./workspaceStore.7a8db3e6.js";import"./index.f025dbb6.js";import{L}from"./LoadingOutlined.80cc6c9b.js";import{C as N}from"./Card.8e717097.js";import"./PhRobot.vue.947242d1.js";import"./PhWebhooksLogo.vue.0eb04fce.js";import"./url.404c5188.js";import"./colorHelpers.eb4d13e2.js";import"./TabPane.2522cf44.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="17e0e7eb-9dce-44e9-affc-04cc7fe77654",o._sentryDebugIdIdentifier="sentry-dbid-17e0e7eb-9dce-44e9-affc-04cc7fe77654")}catch{}})();const V={key:0,class:"home-container"},W=b({__name:"Home",setup(o){const i=v(),l=H(),u=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(d=>d.id!=="home"))||[]}),c=C(null),g=async(s,d)=>{c.value=d,await i.push({path:`/${s}`}),c.value=null};return(s,d)=>e(l).state.workspace?(a(),f("div",V,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[u.value.length===0?(a(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[m(" There are no forms available for you. ")]),_:1})):(a(!0),f(I,{key:1},z(u.value,t=>(a(),n(e(N),{key:t.id,class:T(["form-card",{loading:c.value===t.id}]),"body-style":{cursor:"pointer"},onClick:E=>g(t.path,t.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(a(),n(S(e(h)(t.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[m(F(t.name),1)]),_:2},1024),c.value!==t.id?(a(),n(e(w),{key:0,size:"20"})):(a(),n(e(L),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(k,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const U=B(W,[["__scopeId","data-v-060376d1"]]);export{U as default};
//# sourceMappingURL=Home.7697318c.js.map
