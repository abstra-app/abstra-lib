import{i as h}from"./metadata.c14ea6f5.js";import{W as k}from"./Watermark.674f2af3.js";import{F as b}from"./PhArrowSquareOut.vue.6b28bf5e.js";import{d as w,eo as v,f as x,e as C,u as e,o as a,Y as m,b as p,w as r,S as D,c as n,aG as f,d9 as y,aS as I,eb as z,dh as _,ec as S,e9 as F,ed as T,a0 as B}from"./index.8c21522c.js";import{u as H}from"./workspaceStore.2d3d66c6.js";import"./index.cb3dadc1.js";import{L}from"./LoadingOutlined.c4389fa8.js";import{C as N}from"./Card.533e633a.js";import"./PhBug.vue.ddda8d32.js";import"./PhCheckCircle.vue.bf810227.js";import"./PhKanban.vue.de9c03e8.js";import"./PhWebhooksLogo.vue.a42037a1.js";import"./url.c12a883d.js";import"./colorHelpers.3586a9fc.js";import"./TabPane.09f0a0ea.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="0e857c58-24fa-479b-8494-e52c5fd15aeb",o._sentryDebugIdIdentifier="sentry-dbid-0e857c58-24fa-479b-8494-e52c5fd15aeb")}catch{}})();const V={key:0,class:"home-container"},W=w({__name:"Home",setup(o){const i=v(),l=H(),u=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(d=>d.id!=="home"))||[]}),c=C(null),g=async(s,d)=>{c.value=d,await i.push({path:`/${s}`}),c.value=null};return(s,d)=>e(l).state.workspace?(a(),m("div",V,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[u.value.length===0?(a(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[f(" There are no forms available for you. ")]),_:1})):(a(!0),m(I,{key:1},z(u.value,t=>(a(),n(e(N),{key:t.id,class:T(["form-card",{loading:c.value===t.id}]),"body-style":{cursor:"pointer"},onClick:E=>g(t.path,t.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(a(),n(S(e(h)(t.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[f(F(t.name),1)]),_:2},1024),c.value!==t.id?(a(),n(e(b),{key:0,size:"20"})):(a(),n(e(L),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(k,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Z=B(W,[["__scopeId","data-v-060376d1"]]);export{Z as default};
//# sourceMappingURL=Home.922cf10a.js.map
