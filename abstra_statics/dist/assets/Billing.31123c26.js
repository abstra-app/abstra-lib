import{d as m,eB as c,u as e,b as d,c as u,ev as y,f as o,w as a,bv as _,ar as p,ex as g,e as b,eD as x}from"./outputWidgets.83ad65aa.js";import"./router.1b8539af.js";import"./index.9f577453.js";import{O as w}from"./organization.84b53f22.js";import{a as k}from"./asyncComputed.eebec89e.js";import{A}from"./Title.50be6d8b.js";import{A as B}from"./index.677f843d.js";import{A as h}from"./index.1855b9aa.js";import{A as C}from"./Text.72dc1978.js";import{C as v}from"./Card.e59afab4.js";import"./Form.5deb3adb.js";import"./hasIn.597d0078.js";import"./index.cf4c23b9.js";import"./record.df4e3ae7.js";import"./pubsub.6c6cbc8d.js";import"./Base.5de97c83.js";import"./Typography.fea800b8.js";import"./TabPane.b3ba7cb7.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="be928c87-6496-4440-b74d-f8d2b845f662",t._sentryDebugIdIdentifier="sentry-dbid-be928c87-6496-4440-b74d-f8d2b845f662")}catch{}})();const D={key:1},I={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},W=m({__name:"Billing",setup(t){const n=c().params.organizationId,{loading:l,result:f}=k(()=>w.get(n));return(z,N)=>e(l)?(d(),u(e(_),{key:0})):(d(),y("div",D,[o(e(B),{justify:"space-between",align:"center"},{default:a(()=>[o(e(A),{level:3},{default:a(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),o(e(h),{style:{"margin-top":"0"}}),o(e(v),{style:{width:"300px"}},{default:a(()=>{var i,s;return[o(e(C),{type:"secondary"},{default:a(()=>[p("Plan")]),_:1}),b("div",I,x((s=(i=e(f))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{W as default};
//# sourceMappingURL=Billing.31123c26.js.map
