import{i as b}from"./metadata.c39171d0.js";import{W as h}from"./Watermark.351e057c.js";import{F as k}from"./PhArrowSquareOut.vue.84fcf455.js";import{d as w,eA as v,f as x,e as C,u as e,o as a,Y as u,b as p,w as r,S as D,c as n,aG as m,d9 as y,aS as I,eb as z,dh as _,ec as S,e9 as F,ed as T,a0 as B}from"./index.b4fd398e.js";import{u as H}from"./workspaceStore.6fa8920f.js";import"./index.d82102a5.js";import{L}from"./LoadingOutlined.ea8a213e.js";import{C as N}from"./Card.4ff66f27.js";import"./PhRobot.vue.6eadaa9d.js";import"./PhWebhooksLogo.vue.fae1ead1.js";import"./url.e64c4541.js";import"./colorHelpers.f0205ffa.js";import"./TabPane.b6c50cd9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="5af0d0bc-b245-4f8c-b84f-d8d33f58687b",o._sentryDebugIdIdentifier="sentry-dbid-5af0d0bc-b245-4f8c-b84f-d8d33f58687b")}catch{}})();const V={key:0,class:"home-container"},W=w({__name:"Home",setup(o){const i=v(),l=H(),f=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(c=>c.id!=="home"))||[]}),d=C(null),g=async(s,c)=>{d.value=c,await i.push({path:`/${s}`}),d.value=null};return(s,c)=>e(l).state.workspace?(a(),u("div",V,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[f.value.length===0?(a(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[m(" There are no forms available for you. ")]),_:1})):(a(!0),u(I,{key:1},z(f.value,t=>(a(),n(e(N),{key:t.id,class:T(["form-card",{loading:d.value===t.id}]),"body-style":{cursor:"pointer"},onClick:A=>g(t.path,t.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(a(),n(S(e(b)(t.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[m(F(t.name),1)]),_:2},1024),d.value!==t.id?(a(),n(e(k),{key:0,size:"20"})):(a(),n(e(L),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(h,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const U=B(W,[["__scopeId","data-v-060376d1"]]);export{U as default};
//# sourceMappingURL=Home.4eddd1ce.js.map
