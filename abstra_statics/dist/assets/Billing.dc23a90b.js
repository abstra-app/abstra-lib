import{d as c,eB as m,u as e,b as d,c as u,ev as y,f as o,w as a,bv as _,ar as p,ex as b,e as g,eD as x}from"./outputWidgets.b4e7bc36.js";import"./router.ba23848c.js";import"./index.d2ed8ff0.js";import{O as w}from"./organization.32a5de1c.js";import{a as k}from"./asyncComputed.63222e21.js";import{A}from"./Title.87d4b9b2.js";import{A as B}from"./index.bc81c9a3.js";import{A as h}from"./index.a317fc0b.js";import{A as C}from"./Text.480840c4.js";import{C as v}from"./Card.10f1cba9.js";import"./Form.a935b6d6.js";import"./hasIn.068878da.js";import"./index.cf4c23b9.js";import"./record.8841a42c.js";import"./pubsub.f377b08c.js";import"./Base.b036cd53.js";import"./Typography.a2975dec.js";import"./TabPane.030e32f8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="c9b38523-fb9b-4658-9321-987b6aced92f",t._sentryDebugIdIdentifier="sentry-dbid-c9b38523-fb9b-4658-9321-987b6aced92f")}catch{}})();const D={key:1},I={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},W=c({__name:"Billing",setup(t){const n=m().params.organizationId,{loading:l,result:f}=k(()=>w.get(n));return(z,N)=>e(l)?(d(),u(e(_),{key:0})):(d(),y("div",D,[o(e(B),{justify:"space-between",align:"center"},{default:a(()=>[o(e(A),{level:3},{default:a(()=>[p("Current plan")]),_:1}),b("",!0)]),_:1}),o(e(h),{style:{"margin-top":"0"}}),o(e(v),{style:{width:"300px"}},{default:a(()=>{var i,s;return[o(e(C),{type:"secondary"},{default:a(()=>[p("Plan")]),_:1}),g("div",I,x((s=(i=e(f))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{W as default};
//# sourceMappingURL=Billing.dc23a90b.js.map
