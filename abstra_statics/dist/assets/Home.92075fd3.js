import{W as g}from"./Watermark.55007db3.js";import{i as h}from"./metadata.decd8830.js";import{F as k}from"./PhArrowSquareOut.vue.dfd5a726.js";import{d as w,eH as x,f as b,u as e,W as m,b as o,w as r,R as v,o as s,c as p,ax as f,cU as u,aJ as C,ew as D,d0 as _,ex as I,et as F,$ as H}from"./vue-router.89c5241c.js";import{u as T}from"./workspaceStore.ce329e66.js";import"./index.f9b94701.js";import{C as W}from"./Card.f75e689d.js";import"./router.e442e474.js";import"./PhBug.vue.d75fae39.js";import"./PhCheckCircle.vue.2d4fda16.js";import"./PhKanban.vue.f25dacaf.js";import"./PhWebhooksLogo.vue.1dabea3b.js";import"./api.e6ad286b.js";import"./runnerData.6783aaa8.js";import"./url.5a350b4c.js";import"./TabPane.6dd41adc.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="f77627e2-33ac-4186-8c45-9e9101f964da",t._sentryDebugIdIdentifier="sentry-dbid-f77627e2-33ac-4186-8c45-9e9101f964da")}catch{}})();const z={key:0,class:"home-container"},B=w({__name:"Home",setup(t){const n=x(),c=T(),l=b(()=>{var a;return((a=c.state.workspace)==null?void 0:a.sidebar.filter(d=>d.id!=="home"))||[]}),y=a=>{n.push({path:`/${a}`})};return(a,d)=>e(c).state.workspace?(s(),m("div",z,[o(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[l.value.length===0?(s(),p(e(u),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[f(" There are no forms available for you. ")]),_:1})):(s(!0),m(C,{key:1},D(l.value,i=>(s(),p(e(W),{key:i.id,class:"form-card",onClick:N=>y(i.path)},{default:r(()=>[o(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(s(),p(I(e(h)(i.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),o(e(u),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[f(F(i.name),1)]),_:2},1024),o(e(k),{size:"20"})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}),o(g,{class:"watermark","page-id":"home",locale:e(c).state.workspace.language},null,8,["locale"])])):v("",!0)}});const Q=H(B,[["__scopeId","data-v-2ee244f8"]]);export{Q as default};
//# sourceMappingURL=Home.92075fd3.js.map
