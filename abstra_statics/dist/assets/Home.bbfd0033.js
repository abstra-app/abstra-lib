import{i as h}from"./metadata.cfd15460.js";import{W as k}from"./Watermark.2747e371.js";import{F as b}from"./PhArrowSquareOut.vue.da88caf0.js";import{d as w,eo as v,f as x,e as C,u as e,o as a,Y as f,b as p,w as r,S as D,c as n,aG as m,d9 as y,aS as I,eb as z,dh as _,ec as S,e9 as F,ed as T,a0 as B}from"./index.0f630b70.js";import{u as H}from"./workspaceStore.61224c34.js";import"./index.244c3e8d.js";import{L}from"./LoadingOutlined.5ed0afbe.js";import{C as N}from"./Card.2564e781.js";import"./PhBug.vue.4c6c1483.js";import"./PhCheckCircle.vue.9b1e3e50.js";import"./PhKanban.vue.f3963316.js";import"./PhWebhooksLogo.vue.3edd7efd.js";import"./url.90c69b58.js";import"./colorHelpers.13000dc5.js";import"./TabPane.e38cb00d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="78d9edcd-75b6-41af-bfaf-39288595ea3d",o._sentryDebugIdIdentifier="sentry-dbid-78d9edcd-75b6-41af-bfaf-39288595ea3d")}catch{}})();const V={key:0,class:"home-container"},W=w({__name:"Home",setup(o){const i=v(),l=H(),u=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(c=>c.id!=="home"))||[]}),d=C(null),g=async(s,c)=>{d.value=c,await i.push({path:`/${s}`}),d.value=null};return(s,c)=>e(l).state.workspace?(a(),f("div",V,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[u.value.length===0?(a(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[m(" There are no forms available for you. ")]),_:1})):(a(!0),f(I,{key:1},z(u.value,t=>(a(),n(e(N),{key:t.id,class:T(["form-card",{loading:d.value===t.id}]),"body-style":{cursor:"pointer"},onClick:E=>g(t.path,t.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(a(),n(S(e(h)(t.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[m(F(t.name),1)]),_:2},1024),d.value!==t.id?(a(),n(e(b),{key:0,size:"20"})):(a(),n(e(L),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(k,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Z=B(W,[["__scopeId","data-v-060376d1"]]);export{Z as default};
//# sourceMappingURL=Home.bbfd0033.js.map
