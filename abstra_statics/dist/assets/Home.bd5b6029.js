import{W as g}from"./Watermark.286ca310.js";import{i as h}from"./metadata.5f880d80.js";import{F as k}from"./PhArrowSquareOut.vue.8da77899.js";import{d as w,eH as x,f as b,u as e,W as f,b as o,w as r,R as v,o as s,c as p,ax as m,cU as u,aJ as C,ew as D,d0 as _,ex as I,et as F,$ as H}from"./vue-router.0e841c88.js";import{u as T}from"./workspaceStore.b7b84f1e.js";import"./index.578be314.js";import{C as W}from"./Card.c5317927.js";import"./router.e7cc5cf1.js";import"./PhBug.vue.e73ddd13.js";import"./PhCheckCircle.vue.5b9f490e.js";import"./PhKanban.vue.a720827d.js";import"./PhWebhooksLogo.vue.dbc31075.js";import"./api.4a6f960b.js";import"./runnerData.62313866.js";import"./url.f8b00326.js";import"./TabPane.c891522d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="3d467fa8-8e74-4085-9a69-ecf742b0f42c",t._sentryDebugIdIdentifier="sentry-dbid-3d467fa8-8e74-4085-9a69-ecf742b0f42c")}catch{}})();const z={key:0,class:"home-container"},B=w({__name:"Home",setup(t){const n=x(),c=T(),l=b(()=>{var a;return((a=c.state.workspace)==null?void 0:a.sidebar.filter(d=>d.id!=="home"))||[]}),y=a=>{n.push({path:`/${a}`})};return(a,d)=>e(c).state.workspace?(s(),f("div",z,[o(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[l.value.length===0?(s(),p(e(u),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[m(" There are no forms available for you. ")]),_:1})):(s(!0),f(C,{key:1},D(l.value,i=>(s(),p(e(W),{key:i.id,class:"form-card",onClick:N=>y(i.path)},{default:r(()=>[o(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(s(),p(I(e(h)(i.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),o(e(u),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[m(F(i.name),1)]),_:2},1024),o(e(k),{size:"20"})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}),o(g,{class:"watermark","page-id":"home",locale:e(c).state.workspace.language},null,8,["locale"])])):v("",!0)}});const Q=H(B,[["__scopeId","data-v-2ee244f8"]]);export{Q as default};
//# sourceMappingURL=Home.bd5b6029.js.map
