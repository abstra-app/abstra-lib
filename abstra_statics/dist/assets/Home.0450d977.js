import{i as b}from"./metadata.6563bf7c.js";import{W as h}from"./Watermark.2d15a00e.js";import{F as k}from"./PhArrowSquareOut.vue.843151cd.js";import{d as w,eo as v,f as x,e as C,u as e,o as a,Y as m,b as p,w as r,S as D,c as n,aG as f,d9 as y,aS as I,eb as z,dh as _,ec as S,e9 as F,ed as T,a0 as B}from"./index.27e18556.js";import{u as H}from"./workspaceStore.4606b0bb.js";import"./index.00703d2f.js";import{L}from"./LoadingOutlined.4ab46f46.js";import{C as N}from"./Card.c3f711bb.js";import"./PhWebhooksLogo.vue.3961aac7.js";import"./url.ea229d68.js";import"./colorHelpers.bfad04fc.js";import"./TabPane.b64a37d6.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="d3b6b6be-08ed-45bb-8377-142421d0f1d8",o._sentryDebugIdIdentifier="sentry-dbid-d3b6b6be-08ed-45bb-8377-142421d0f1d8")}catch{}})();const V={key:0,class:"home-container"},W=w({__name:"Home",setup(o){const i=v(),l=H(),u=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(c=>c.id!=="home"))||[]}),d=C(null),g=async(s,c)=>{d.value=c,await i.push({path:`/${s}`}),d.value=null};return(s,c)=>e(l).state.workspace?(a(),m("div",V,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[u.value.length===0?(a(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[f(" There are no forms available for you. ")]),_:1})):(a(!0),m(I,{key:1},z(u.value,t=>(a(),n(e(N),{key:t.id,class:T(["form-card",{loading:d.value===t.id}]),"body-style":{cursor:"pointer"},onClick:E=>g(t.path,t.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(a(),n(S(e(b)(t.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[f(F(t.name),1)]),_:2},1024),d.value!==t.id?(a(),n(e(k),{key:0,size:"20"})):(a(),n(e(L),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(h,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Q=B(W,[["__scopeId","data-v-060376d1"]]);export{Q as default};
//# sourceMappingURL=Home.0450d977.js.map
