import{i as h}from"./metadata.277f9e65.js";import{W as k}from"./Watermark.995096c7.js";import{F as b}from"./PhArrowSquareOut.vue.dd1ce69d.js";import{d as w,eo as v,f as x,e as C,u as e,o as a,Y as u,b as p,w as r,S as D,c as n,aG as m,d9 as y,aS as I,eb as z,dh as _,ec as S,e9 as F,ed as T,a0 as B}from"./index.a74817f2.js";import{u as H}from"./workspaceStore.63c9049c.js";import"./index.40bf56d6.js";import{L}from"./LoadingOutlined.3b6166f3.js";import{C as N}from"./Card.ed26c619.js";import"./PhWebhooksLogo.vue.8c0a8c22.js";import"./url.e50b28f9.js";import"./colorHelpers.a7643ba8.js";import"./TabPane.6399463f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="4f12bf09-bffc-4aed-9028-385ab540913f",o._sentryDebugIdIdentifier="sentry-dbid-4f12bf09-bffc-4aed-9028-385ab540913f")}catch{}})();const V={key:0,class:"home-container"},W=w({__name:"Home",setup(o){const i=v(),l=H(),f=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(d=>d.id!=="home"))||[]}),c=C(null),g=async(s,d)=>{c.value=d,await i.push({path:`/${s}`}),c.value=null};return(s,d)=>e(l).state.workspace?(a(),u("div",V,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[f.value.length===0?(a(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[m(" There are no forms available for you. ")]),_:1})):(a(!0),u(I,{key:1},z(f.value,t=>(a(),n(e(N),{key:t.id,class:T(["form-card",{loading:c.value===t.id}]),"body-style":{cursor:"pointer"},onClick:E=>g(t.path,t.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(a(),n(S(e(h)(t.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[m(F(t.name),1)]),_:2},1024),c.value!==t.id?(a(),n(e(b),{key:0,size:"20"})):(a(),n(e(L),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(k,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Q=B(W,[["__scopeId","data-v-060376d1"]]);export{Q as default};
//# sourceMappingURL=Home.76a242ca.js.map
