import{i as h}from"./metadata.38e091ac.js";import{W as k}from"./Watermark.22ddf3e1.js";import{F as b}from"./PhArrowSquareOut.vue.bcdf6e0d.js";import{d as w,eo as v,f as x,e as C,u as e,o as t,Y as m,b as p,w as r,S as D,c as n,aG as f,d9 as y,aS as I,eb as z,dh as _,ec as S,e9 as F,ed as T,a0 as B}from"./index.77602df8.js";import{u as H}from"./workspaceStore.3bcaa4eb.js";import"./index.1ad44ff6.js";import{L}from"./LoadingOutlined.ebd285ad.js";import{C as N}from"./Card.2f500b34.js";import"./PhWebhooksLogo.vue.45011cdc.js";import"./url.2906f968.js";import"./colorHelpers.7b942f88.js";import"./TabPane.085bdad9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="b16d347b-8ae3-4665-a085-24d8cda6061b",o._sentryDebugIdIdentifier="sentry-dbid-b16d347b-8ae3-4665-a085-24d8cda6061b")}catch{}})();const V={key:0,class:"home-container"},W=w({__name:"Home",setup(o){const i=v(),l=H(),u=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(c=>c.id!=="home"))||[]}),d=C(null),g=async(s,c)=>{d.value=c,await i.push({path:`/${s}`}),d.value=null};return(s,c)=>e(l).state.workspace?(t(),m("div",V,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[u.value.length===0?(t(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[f(" There are no forms available for you. ")]),_:1})):(t(!0),m(I,{key:1},z(u.value,a=>(t(),n(e(N),{key:a.id,class:T(["form-card",{loading:d.value===a.id}]),"body-style":{cursor:"pointer"},onClick:E=>g(a.path,a.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(t(),n(S(e(h)(a.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[f(F(a.name),1)]),_:2},1024),d.value!==a.id?(t(),n(e(b),{key:0,size:"20"})):(t(),n(e(L),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(k,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Q=B(W,[["__scopeId","data-v-060376d1"]]);export{Q as default};
//# sourceMappingURL=Home.f44fc8dc.js.map
