import{d as c,eB as m,u as e,b as d,c as u,ev as y,f as a,w as o,bv as _,ar as p,ex as g,e as b,eD as x}from"./outputWidgets.6e85bcee.js";import"./router.e634d479.js";import"./index.3ea4689d.js";import{O as w}from"./organization.bbe2ccea.js";import{a as h}from"./asyncComputed.3f33381d.js";import{A as k}from"./Title.ad44d345.js";import{A}from"./index.fb7f959e.js";import{A as B}from"./index.98a27cc4.js";import{A as C}from"./Text.e6eada3a.js";import{C as v}from"./Card.d7f8a52a.js";import"./FormItem.292de928.js";import"./hasIn.dcca7708.js";import"./index.cf4c23b9.js";import"./record.2ea7bf27.js";import"./pubsub.629d594a.js";import"./Base.3f7d4919.js";import"./TabPane.6607fa75.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="052eea9a-1896-44c5-8634-8d12541bbadf",t._sentryDebugIdIdentifier="sentry-dbid-052eea9a-1896-44c5-8634-8d12541bbadf")}catch{}})();const D={key:1},I={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},Q=c({__name:"Billing",setup(t){const n=m().params.organizationId,{loading:l,result:f}=h(()=>w.get(n));return(T,z)=>e(l)?(d(),u(e(_),{key:0})):(d(),y("div",D,[a(e(A),{justify:"space-between",align:"center"},{default:o(()=>[a(e(k),{level:3},{default:o(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),a(e(B),{style:{"margin-top":"0"}}),a(e(v),{style:{width:"300px"}},{default:o(()=>{var i,s;return[a(e(C),{type:"secondary"},{default:o(()=>[p("Plan")]),_:1}),b("div",I,x((s=(i=e(f))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{Q as default};
//# sourceMappingURL=Billing.75e13e4c.js.map
