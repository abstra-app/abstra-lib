import{i as h}from"./metadata.546e1919.js";import{W as k}from"./Watermark.d76c2b84.js";import{F as w}from"./PhArrowSquareOut.vue.b3c43779.js";import{d as b,eo as v,f as x,e as C,u as e,o as a,Y as u,b as p,w as r,S as D,c as n,aG as m,d9 as y,aS as I,eb as z,dh as _,ec as S,e9 as F,ed as T,a0 as B}from"./index.4b0f7fd1.js";import{u as H}from"./workspaceStore.61a51d51.js";import"./index.ad191385.js";import{L}from"./LoadingOutlined.877053a0.js";import{C as N}from"./Card.57423515.js";import"./PhBug.vue.0d847423.js";import"./PhCheckCircle.vue.5870f868.js";import"./PhKanban.vue.c16c635b.js";import"./PhWebhooksLogo.vue.d243ca9d.js";import"./url.95376bbe.js";import"./colorHelpers.3dbabab9.js";import"./TabPane.b6f0c440.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="d3f090e6-59f8-4783-bce9-1dff4571cde1",o._sentryDebugIdIdentifier="sentry-dbid-d3f090e6-59f8-4783-bce9-1dff4571cde1")}catch{}})();const V={key:0,class:"home-container"},W=b({__name:"Home",setup(o){const i=v(),l=H(),f=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(c=>c.id!=="home"))||[]}),d=C(null),g=async(s,c)=>{d.value=c,await i.push({path:`/${s}`}),d.value=null};return(s,c)=>e(l).state.workspace?(a(),u("div",V,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[f.value.length===0?(a(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[m(" There are no forms available for you. ")]),_:1})):(a(!0),u(I,{key:1},z(f.value,t=>(a(),n(e(N),{key:t.id,class:T(["form-card",{loading:d.value===t.id}]),"body-style":{cursor:"pointer"},onClick:E=>g(t.path,t.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(a(),n(S(e(h)(t.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[m(F(t.name),1)]),_:2},1024),d.value!==t.id?(a(),n(e(w),{key:0,size:"20"})):(a(),n(e(L),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(k,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Z=B(W,[["__scopeId","data-v-060376d1"]]);export{Z as default};
//# sourceMappingURL=Home.670838f7.js.map
