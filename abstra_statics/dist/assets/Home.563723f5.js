import{i as k}from"./metadata.e338a600.js";import{W as h}from"./Watermark.2371723c.js";import{F as b}from"./PhArrowSquareOut.vue.60f79312.js";import{d as w,eo as v,f as x,e as C,u as e,o as a,Y as m,b as p,w as r,S as D,c as n,aG as f,db as y,aS as I,eb as z,dj as _,ec as S,e9 as F,ed as T,a0 as B}from"./index.9f6b07f8.js";import{u as H}from"./workspaceStore.ead640bd.js";import"./index.c8343b25.js";import{L}from"./LoadingOutlined.c8104dee.js";import{C as N}from"./Card.4ddc81b2.js";import"./PhWebhooksLogo.vue.e526c012.js";import"./url.1a36d266.js";import"./colorHelpers.990caed0.js";import"./TabPane.5ebb03f0.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="05117410-2cbc-454d-b572-42d4982084a0",o._sentryDebugIdIdentifier="sentry-dbid-05117410-2cbc-454d-b572-42d4982084a0")}catch{}})();const V={key:0,class:"home-container"},W=w({__name:"Home",setup(o){const i=v(),l=H(),u=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(d=>d.id!=="home"))||[]}),c=C(null),g=async(s,d)=>{c.value=d,await i.push({path:`/${s}`}),c.value=null};return(s,d)=>e(l).state.workspace?(a(),m("div",V,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[u.value.length===0?(a(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[f(" There are no forms available for you. ")]),_:1})):(a(!0),m(I,{key:1},z(u.value,t=>(a(),n(e(N),{key:t.id,class:T(["form-card",{loading:c.value===t.id}]),"body-style":{cursor:"pointer"},onClick:j=>g(t.path,t.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(a(),n(S(e(k)(t.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[f(F(t.name),1)]),_:2},1024),c.value!==t.id?(a(),n(e(b),{key:0,size:"20"})):(a(),n(e(L),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(h,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Q=B(W,[["__scopeId","data-v-060376d1"]]);export{Q as default};
//# sourceMappingURL=Home.563723f5.js.map