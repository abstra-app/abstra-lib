import{W as g}from"./Watermark.7f38a6f9.js";import{i as h}from"./metadata.ff6eb264.js";import{F as k}from"./PhArrowSquareOut.vue.a5c83b92.js";import{d as w,eN as x,f as b,u as e,o,W as m,b as r,w as s,R as v,c as p,ax as u,cS as f,aJ as C,eD as D,c_ as _,eE as I,eA as F,$ as N}from"./vue-router.f8901e1e.js";import{u as S}from"./workspaceStore.5b633d15.js";import"./index.d810cb95.js";import{C as T}from"./Card.a0cbacc7.js";import"./router.9b33dadc.js";import"./PhCheckCircle.vue.c2f14cba.js";import"./PhKanban.vue.55508d31.js";import"./PhWebhooksLogo.vue.16bd6849.js";import"./api.601e66a7.js";import"./runnerData.740df4d9.js";import"./url.b81ab51a.js";import"./TabPane.776d4680.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="71238281-2930-425a-86f0-0c463319a8ce",t._sentryDebugIdIdentifier="sentry-dbid-71238281-2930-425a-86f0-0c463319a8ce")}catch{}})();const W={key:0,class:"home-container"},z=w({__name:"Home",setup(t){const n=x(),c=S(),l=b(()=>{var a;return((a=c.state.workspace)==null?void 0:a.sidebar.filter(d=>d.id!=="home"))||[]}),y=a=>{n.push({path:`/${a}`})};return(a,d)=>e(c).state.workspace?(o(),m("div",W,[r(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:s(()=>[l.value.length===0?(o(),p(e(f),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:s(()=>[u(" There are no forms available for you. ")]),_:1})):(o(!0),m(C,{key:1},D(l.value,i=>(o(),p(e(T),{key:i.id,class:"form-card",onClick:B=>y(i.path)},{default:s(()=>[r(e(_),{gap:"large",align:"center",justify:"space-between"},{default:s(()=>[(o(),p(I(e(h)(i.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),r(e(f),{style:{"font-size":"18px","font-weight":"500"}},{default:s(()=>[u(F(i.name),1)]),_:2},1024),r(e(k),{size:"20"})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}),r(g,{class:"watermark","page-id":"home",locale:e(c).state.workspace.language},null,8,["locale"])])):v("",!0)}});const Q=N(z,[["__scopeId","data-v-2ee244f8"]]);export{Q as default};
//# sourceMappingURL=Home.7d7aff88.js.map
