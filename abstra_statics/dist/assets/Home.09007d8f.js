import{i as k}from"./metadata.2f8629e7.js";import{W as h}from"./Watermark.7ed3d3a6.js";import{F as w}from"./PhArrowSquareOut.vue.adcc58c1.js";import{d as v,eq as x,f as b,e as C,u as e,X as u,b as d,w as r,R as D,o as a,c as n,aF as m,d5 as y,aR as I,ee as z,dd as _,ef as F,ec as T,ea as B,$ as H}from"./vue-router.49bd2304.js";import{u as L}from"./workspaceStore.f377ef93.js";import"./index.8e21a086.js";import{L as N}from"./LoadingOutlined.a49208d8.js";import{C as R}from"./Card.7663e012.js";import"./PhBug.vue.cb9304de.js";import"./PhCheckCircle.vue.800b6fc6.js";import"./PhKanban.vue.25f8b854.js";import"./PhWebhooksLogo.vue.e725b4a3.js";import"./url.e92d4eb1.js";import"./colorHelpers.68e2396c.js";import"./TabPane.31818a1d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="0c403e92-9f02-4c29-9cf3-fc277ef3224a",o._sentryDebugIdIdentifier="sentry-dbid-0c403e92-9f02-4c29-9cf3-fc277ef3224a")}catch{}})();const S={key:0,class:"home-container"},V=v({__name:"Home",setup(o){const i=x(),l=L(),f=b(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(p=>p.id!=="home"))||[]}),c=C(null),g=async(s,p)=>{c.value=p,await i.push({path:`/${s}`}),c.value=null};return(s,p)=>e(l).state.workspace?(a(),u("div",S,[d(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[f.value.length===0?(a(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[m(" There are no forms available for you. ")]),_:1})):(a(!0),u(I,{key:1},z(f.value,t=>(a(),n(e(R),{key:t.id,class:B(["form-card",{loading:c.value===t.id}]),"body-style":{cursor:"pointer"},onClick:W=>g(t.path,t.id)},{default:r(()=>[d(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(a(),n(F(e(k)(t.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),d(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[m(T(t.name),1)]),_:2},1024),c.value!==t.id?(a(),n(e(w),{key:0,size:"20"})):(a(),n(e(N),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),d(h,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Z=H(V,[["__scopeId","data-v-060376d1"]]);export{Z as default};
//# sourceMappingURL=Home.09007d8f.js.map
