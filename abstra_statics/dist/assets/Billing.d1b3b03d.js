import{d as f,eB as m,u as e,b as d,c as u,ev as y,f as o,w as a,bv as _,ar as p,ex as g,e as x,eD as b}from"./outputWidgets.9a751704.js";import"./router.2ed86b1e.js";import"./index.1dbbc1f9.js";import{O as w}from"./organization.b6a6d651.js";import{a as k}from"./asyncComputed.c0b7f526.js";import{A}from"./Title.9671cb18.js";import{A as B}from"./index.6edb660d.js";import{A as h}from"./index.120795b6.js";import{A as C}from"./Text.0538649f.js";import{C as v}from"./Card.84115cfb.js";import"./Form.b9d05841.js";import"./hasIn.c089c9ed.js";import"./index.cf4c23b9.js";import"./record.91b90880.js";import"./pubsub.f352a300.js";import"./Base.083cbb66.js";import"./Typography.c485b72c.js";import"./TabPane.20c6a7e7.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="60143c07-4c03-4c05-ade2-124f6d3de937",t._sentryDebugIdIdentifier="sentry-dbid-60143c07-4c03-4c05-ade2-124f6d3de937")}catch{}})();const D={key:1},I={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},W=f({__name:"Billing",setup(t){const n=m().params.organizationId,{loading:l,result:c}=k(()=>w.get(n));return(z,N)=>e(l)?(d(),u(e(_),{key:0})):(d(),y("div",D,[o(e(B),{justify:"space-between",align:"center"},{default:a(()=>[o(e(A),{level:3},{default:a(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),o(e(h),{style:{"margin-top":"0"}}),o(e(v),{style:{width:"300px"}},{default:a(()=>{var i,s;return[o(e(C),{type:"secondary"},{default:a(()=>[p("Plan")]),_:1}),x("div",I,b((s=(i=e(c))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{W as default};
//# sourceMappingURL=Billing.d1b3b03d.js.map
