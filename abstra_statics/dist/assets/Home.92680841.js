import{W as g}from"./Watermark.d0c840a8.js";import{i as h}from"./metadata.f41ad8ee.js";import{F as k}from"./PhArrowSquareOut.vue.daff67dc.js";import{d as w,eN as b,f as x,u as e,o,W as m,b as r,w as s,R as v,c as p,ax as u,cS as f,aJ as C,eD as D,c_ as _,eE as I,eA as F,$ as N}from"./vue-router.1fa35404.js";import{u as S}from"./workspaceStore.69b85944.js";import"./index.50ff6d61.js";import{C as T}from"./Card.16919718.js";import"./router.ea67fb87.js";import"./PhCheckCircle.vue.e1291a34.js";import"./PhKanban.vue.a0dcb41e.js";import"./PhWebhooksLogo.vue.a1f8bc14.js";import"./api.9d0c1b2a.js";import"./runnerData.ced7c9eb.js";import"./url.3c9d9694.js";import"./TabPane.01c8da03.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="3462030a-de1a-4560-868a-bcb61076f5e9",t._sentryDebugIdIdentifier="sentry-dbid-3462030a-de1a-4560-868a-bcb61076f5e9")}catch{}})();const V={key:0,class:"home-container"},W=w({__name:"Home",setup(t){const n=b(),c=S(),l=x(()=>{var a;return((a=c.state.workspace)==null?void 0:a.sidebar.filter(d=>d.id!=="home"))||[]}),y=a=>{n.push({path:`/${a}`})};return(a,d)=>e(c).state.workspace?(o(),m("div",V,[r(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:s(()=>[l.value.length===0?(o(),p(e(f),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:s(()=>[u(" There are no forms available for you. ")]),_:1})):(o(!0),m(C,{key:1},D(l.value,i=>(o(),p(e(T),{key:i.id,class:"form-card",onClick:z=>y(i.path)},{default:s(()=>[r(e(_),{gap:"large",align:"center",justify:"space-between"},{default:s(()=>[(o(),p(I(e(h)(i.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),r(e(f),{style:{"font-size":"18px","font-weight":"500"}},{default:s(()=>[u(F(i.name),1)]),_:2},1024),r(e(k),{size:"20"})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}),r(g,{class:"watermark","page-id":"home",locale:e(c).state.workspace.language},null,8,["locale"])])):v("",!0)}});const Q=N(W,[["__scopeId","data-v-2ee244f8"]]);export{Q as default};
//# sourceMappingURL=Home.92680841.js.map
