import{i as h}from"./metadata.f73a9e6d.js";import{W as k}from"./Watermark.11b37062.js";import{F as b}from"./PhArrowSquareOut.vue.5a70823b.js";import{d as w,eo as v,f as x,e as C,u as e,o as t,Y as f,b as p,w as r,S as D,c as n,aG as m,d9 as y,aS as I,eb as z,dh as _,ec as S,e9 as F,ed as T,a0 as B}from"./index.b7b4bda7.js";import{u as H}from"./workspaceStore.be088758.js";import"./index.4181fcdb.js";import{L}from"./LoadingOutlined.efc83666.js";import{C as N}from"./Card.dc945fe7.js";import"./PhBug.vue.118d6a4b.js";import"./PhCheckCircle.vue.9e92f7a6.js";import"./PhKanban.vue.7adc1b7a.js";import"./PhWebhooksLogo.vue.9fa90918.js";import"./url.b5db0ec0.js";import"./colorHelpers.4deb51e0.js";import"./TabPane.5704c3a4.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="48a9c162-4ffa-4fad-b232-6656aa494b6a",o._sentryDebugIdIdentifier="sentry-dbid-48a9c162-4ffa-4fad-b232-6656aa494b6a")}catch{}})();const V={key:0,class:"home-container"},W=w({__name:"Home",setup(o){const i=v(),l=H(),u=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(d=>d.id!=="home"))||[]}),c=C(null),g=async(s,d)=>{c.value=d,await i.push({path:`/${s}`}),c.value=null};return(s,d)=>e(l).state.workspace?(t(),f("div",V,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[u.value.length===0?(t(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[m(" There are no forms available for you. ")]),_:1})):(t(!0),f(I,{key:1},z(u.value,a=>(t(),n(e(N),{key:a.id,class:T(["form-card",{loading:c.value===a.id}]),"body-style":{cursor:"pointer"},onClick:E=>g(a.path,a.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(t(),n(S(e(h)(a.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[m(F(a.name),1)]),_:2},1024),c.value!==a.id?(t(),n(e(b),{key:0,size:"20"})):(t(),n(e(L),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(k,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Z=B(W,[["__scopeId","data-v-060376d1"]]);export{Z as default};
//# sourceMappingURL=Home.d4c2d38f.js.map
