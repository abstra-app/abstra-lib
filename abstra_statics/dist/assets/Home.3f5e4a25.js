import{i as g}from"./metadata.789df59c.js";import{W as h}from"./Watermark.43182479.js";import{F as k}from"./PhArrowSquareOut.vue.188b81dc.js";import{d as b,eq as w,f as x,u as e,X as l,b as o,w as r,R as v,o as s,c as d,aF as m,d7 as u,aR as C,ee as D,df as _,ef as I,ec as F,$ as T}from"./vue-router.3fd92176.js";import{u as z}from"./workspaceStore.411ef1fe.js";import"./index.8321252a.js";import{C as B}from"./Card.0ce127d8.js";import"./PhBug.vue.00bc4255.js";import"./PhCheckCircle.vue.d8163a77.js";import"./PhKanban.vue.b52985f0.js";import"./PhWebhooksLogo.vue.73a10b16.js";import"./url.5959ae47.js";import"./colorHelpers.f04087b3.js";import"./TabPane.d0ca7ad5.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="3a0df636-d184-4d96-a5c1-cfbffd980b2d",t._sentryDebugIdIdentifier="sentry-dbid-3a0df636-d184-4d96-a5c1-cfbffd980b2d")}catch{}})();const H={key:0,class:"home-container"},N=b({__name:"Home",setup(t){const n=w(),c=z(),p=x(()=>{var a;return((a=c.state.workspace)==null?void 0:a.sidebar.filter(f=>f.id!=="home"))||[]}),y=a=>{n.push({path:`/${a}`})};return(a,f)=>e(c).state.workspace?(s(),l("div",H,[o(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[p.value.length===0?(s(),d(e(u),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[m(" There are no forms available for you. ")]),_:1})):(s(!0),l(C,{key:1},D(p.value,i=>(s(),d(e(B),{key:i.id,class:"form-card",onClick:R=>y(i.path)},{default:r(()=>[o(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(s(),d(I(e(g)(i.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),o(e(u),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[m(F(i.name),1)]),_:2},1024),o(e(k),{size:"20"})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}),o(h,{class:"watermark","page-id":"home",locale:e(c).state.workspace.language},null,8,["locale"])])):v("",!0)}});const M=T(N,[["__scopeId","data-v-a0bfe546"]]);export{M as default};
//# sourceMappingURL=Home.3f5e4a25.js.map
