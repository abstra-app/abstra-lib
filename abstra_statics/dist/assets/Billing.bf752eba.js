import{d as f,eB as m,u as e,b as d,c as u,ev as y,f as a,w as o,bv as _,ar as p,ex as g,e as b,eD as x}from"./outputWidgets.13a515ea.js";import"./router.4148c037.js";import"./index.2d2a21d6.js";import{O as w}from"./organization.ad7b5c2e.js";import{a as h}from"./asyncComputed.33e4fa63.js";import{A as k}from"./Title.d1269696.js";import{A}from"./index.c62cfbfa.js";import{A as B}from"./index.e9a2347f.js";import{A as C}from"./Text.e9c6ec84.js";import{C as v}from"./Card.e54028f5.js";import"./FormItem.e739a900.js";import"./hasIn.827b7563.js";import"./index.cf4c23b9.js";import"./record.773c2b57.js";import"./pubsub.b5ba0a93.js";import"./Base.314ffe1c.js";import"./TabPane.366e0a7f.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="c22b5e5d-6286-4ddd-9edc-6592788a3ae4",t._sentryDebugIdIdentifier="sentry-dbid-c22b5e5d-6286-4ddd-9edc-6592788a3ae4")}catch{}})();const D={key:1},I={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},Q=f({__name:"Billing",setup(t){const n=m().params.organizationId,{loading:l,result:c}=h(()=>w.get(n));return(T,z)=>e(l)?(d(),u(e(_),{key:0})):(d(),y("div",D,[a(e(A),{justify:"space-between",align:"center"},{default:o(()=>[a(e(k),{level:3},{default:o(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),a(e(B),{style:{"margin-top":"0"}}),a(e(v),{style:{width:"300px"}},{default:o(()=>{var i,s;return[a(e(C),{type:"secondary"},{default:o(()=>[p("Plan")]),_:1}),b("div",I,x((s=(i=e(c))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{Q as default};
//# sourceMappingURL=Billing.bf752eba.js.map
