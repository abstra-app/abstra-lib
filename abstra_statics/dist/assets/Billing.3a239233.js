import{d as f,eB as m,u as e,b as d,c as u,ev as y,f as o,w as a,bv as _,ar as p,ex as g,e as b,eD as x}from"./outputWidgets.fedfcd3d.js";import"./router.2f45b101.js";import"./index.b2d437d8.js";import{O as w}from"./organization.97e09316.js";import{a as h}from"./asyncComputed.85f3fa44.js";import{A as k}from"./Title.5fb084c8.js";import{A}from"./index.92d3b53a.js";import{A as B}from"./index.65946aa6.js";import{A as C}from"./Text.5caa7fba.js";import{C as v}from"./Card.facbd426.js";import"./FormItem.01394243.js";import"./hasIn.8e32d300.js";import"./index.cf4c23b9.js";import"./record.58a93060.js";import"./pubsub.e7814d85.js";import"./Base.69a242ac.js";import"./TabPane.48bd2516.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="b657f9cd-b8cc-4119-865e-cb6833293cf6",t._sentryDebugIdIdentifier="sentry-dbid-b657f9cd-b8cc-4119-865e-cb6833293cf6")}catch{}})();const D={key:1},I={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},Q=f({__name:"Billing",setup(t){const n=m().params.organizationId,{loading:c,result:l}=h(()=>w.get(n));return(T,z)=>e(c)?(d(),u(e(_),{key:0})):(d(),y("div",D,[o(e(A),{justify:"space-between",align:"center"},{default:a(()=>[o(e(k),{level:3},{default:a(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),o(e(B),{style:{"margin-top":"0"}}),o(e(v),{style:{width:"300px"}},{default:a(()=>{var i,s;return[o(e(C),{type:"secondary"},{default:a(()=>[p("Plan")]),_:1}),b("div",I,x((s=(i=e(l))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{Q as default};
//# sourceMappingURL=Billing.3a239233.js.map
