import{i as h}from"./metadata.b25da26f.js";import{W as k}from"./Watermark.de29ad4e.js";import{F as b}from"./PhArrowSquareOut.vue.0d9faffe.js";import{d as w,eo as v,f as x,e as C,u as e,o as t,Y as u,b as p,w as r,S as D,c as n,aG as m,d9 as y,aS as I,eb as z,dh as _,ec as S,e9 as F,ed as T,a0 as B}from"./index.fc9d6925.js";import{u as H}from"./workspaceStore.d444a8f0.js";import"./index.11b7c7bd.js";import{L}from"./LoadingOutlined.bdaaabb0.js";import{C as N}from"./Card.ebe1bf83.js";import"./PhWebhooksLogo.vue.466f8bc8.js";import"./url.d8c6ee90.js";import"./colorHelpers.2666dd13.js";import"./TabPane.4075643c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="8df9a2fb-e55b-46b1-a123-f59f4ae5e0e9",o._sentryDebugIdIdentifier="sentry-dbid-8df9a2fb-e55b-46b1-a123-f59f4ae5e0e9")}catch{}})();const V={key:0,class:"home-container"},W=w({__name:"Home",setup(o){const i=v(),l=H(),f=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(c=>c.id!=="home"))||[]}),d=C(null),g=async(s,c)=>{d.value=c,await i.push({path:`/${s}`}),d.value=null};return(s,c)=>e(l).state.workspace?(t(),u("div",V,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[f.value.length===0?(t(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[m(" There are no forms available for you. ")]),_:1})):(t(!0),u(I,{key:1},z(f.value,a=>(t(),n(e(N),{key:a.id,class:T(["form-card",{loading:d.value===a.id}]),"body-style":{cursor:"pointer"},onClick:E=>g(a.path,a.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(t(),n(S(e(h)(a.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[m(F(a.name),1)]),_:2},1024),d.value!==a.id?(t(),n(e(b),{key:0,size:"20"})):(t(),n(e(L),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(k,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Q=B(W,[["__scopeId","data-v-060376d1"]]);export{Q as default};
//# sourceMappingURL=Home.47f74547.js.map
