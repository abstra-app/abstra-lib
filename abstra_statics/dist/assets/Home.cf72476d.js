import{i as h}from"./metadata.fba55ee5.js";import{W as k}from"./Watermark.91c3b361.js";import{F as b}from"./PhArrowSquareOut.vue.b3144c95.js";import{d as w,eo as v,f as x,e as C,u as e,o as a,Y as m,b as p,w as r,S as D,c as n,aG as f,d9 as y,aS as I,eb as z,dh as _,ec as S,e9 as F,ed as T,a0 as B}from"./index.ee12c226.js";import{u as H}from"./workspaceStore.7e67ea50.js";import"./index.fa52a174.js";import{L}from"./LoadingOutlined.e21592f1.js";import{C as N}from"./Card.f7acc377.js";import"./PhBug.vue.142b4cb4.js";import"./PhCheckCircle.vue.49c7e35d.js";import"./PhKanban.vue.6de4e72e.js";import"./PhWebhooksLogo.vue.cf6c9610.js";import"./url.b6ea79b9.js";import"./colorHelpers.0b60c1e6.js";import"./TabPane.772454d9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="a7e21ddf-55bb-44f5-984b-974e594ea11c",o._sentryDebugIdIdentifier="sentry-dbid-a7e21ddf-55bb-44f5-984b-974e594ea11c")}catch{}})();const V={key:0,class:"home-container"},W=w({__name:"Home",setup(o){const i=v(),l=H(),u=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(c=>c.id!=="home"))||[]}),d=C(null),g=async(s,c)=>{d.value=c,await i.push({path:`/${s}`}),d.value=null};return(s,c)=>e(l).state.workspace?(a(),m("div",V,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[u.value.length===0?(a(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[f(" There are no forms available for you. ")]),_:1})):(a(!0),m(I,{key:1},z(u.value,t=>(a(),n(e(N),{key:t.id,class:T(["form-card",{loading:d.value===t.id}]),"body-style":{cursor:"pointer"},onClick:E=>g(t.path,t.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(a(),n(S(e(h)(t.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[f(F(t.name),1)]),_:2},1024),d.value!==t.id?(a(),n(e(b),{key:0,size:"20"})):(a(),n(e(L),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(k,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Z=B(W,[["__scopeId","data-v-060376d1"]]);export{Z as default};
//# sourceMappingURL=Home.cf72476d.js.map
