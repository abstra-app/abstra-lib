import{d as f,eB as m,u as e,b as d,c as u,ev as y,f as a,w as o,bv as _,ar as p,ex as g,e as b,eD as x}from"./outputWidgets.bb2f46e4.js";import"./router.00bad958.js";import"./index.1bde37fc.js";import{O as w}from"./organization.a79e61ea.js";import{a as k}from"./asyncComputed.8bd59622.js";import{A}from"./Title.85b45f4d.js";import{A as B}from"./index.77677488.js";import{A as h}from"./index.87c02330.js";import{A as C}from"./Text.3cea9169.js";import{C as v}from"./Card.37a856a7.js";import"./FormItem.744edb5b.js";import"./hasIn.9a8a8af5.js";import"./index.cf4c23b9.js";import"./record.dd66f38b.js";import"./pubsub.9e4f8bfd.js";import"./Base.3e5c9785.js";import"./TabPane.cc681b73.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="886d2924-b2cf-457c-9380-4caa6141463e",t._sentryDebugIdIdentifier="sentry-dbid-886d2924-b2cf-457c-9380-4caa6141463e")}catch{}})();const D={key:1},I={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},Q=f({__name:"Billing",setup(t){const n=m().params.organizationId,{loading:l,result:c}=k(()=>w.get(n));return(z,N)=>e(l)?(d(),u(e(_),{key:0})):(d(),y("div",D,[a(e(B),{justify:"space-between",align:"center"},{default:o(()=>[a(e(A),{level:3},{default:o(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),a(e(h),{style:{"margin-top":"0"}}),a(e(v),{style:{width:"300px"}},{default:o(()=>{var i,s;return[a(e(C),{type:"secondary"},{default:o(()=>[p("Plan")]),_:1}),b("div",I,x((s=(i=e(c))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{Q as default};
//# sourceMappingURL=Billing.06473b80.js.map
