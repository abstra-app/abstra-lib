import{d as m,eB as f,u as e,b as d,c as u,ev as y,f as a,w as o,bv as _,ar as p,ex as g,e as b,eD as x}from"./outputWidgets.e46e0ded.js";import"./router.144e54c5.js";import"./index.736de062.js";import{O as w}from"./organization.4a3f5af9.js";import{a as k}from"./asyncComputed.ea937eb3.js";import{A}from"./Title.70882a5b.js";import{A as B}from"./index.b4ecf953.js";import{A as h}from"./index.b0838867.js";import{A as C}from"./Text.dfce2b71.js";import{C as v}from"./Card.10d8f696.js";import"./FormItem.028a21cb.js";import"./hasIn.e94cc5bd.js";import"./index.cf4c23b9.js";import"./record.7c07a1e1.js";import"./pubsub.0ad51ee9.js";import"./Base.237a3458.js";import"./Typography.936b79d0.js";import"./TabPane.1d4c923c.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="36ea6686-9181-465b-8767-e25caa184ece",t._sentryDebugIdIdentifier="sentry-dbid-36ea6686-9181-465b-8767-e25caa184ece")}catch{}})();const D={key:1},I={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},W=m({__name:"Billing",setup(t){const n=f().params.organizationId,{loading:l,result:c}=k(()=>w.get(n));return(z,N)=>e(l)?(d(),u(e(_),{key:0})):(d(),y("div",D,[a(e(B),{justify:"space-between",align:"center"},{default:o(()=>[a(e(A),{level:3},{default:o(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),a(e(h),{style:{"margin-top":"0"}}),a(e(v),{style:{width:"300px"}},{default:o(()=>{var i,s;return[a(e(C),{type:"secondary"},{default:o(()=>[p("Plan")]),_:1}),b("div",I,x((s=(i=e(c))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{W as default};
//# sourceMappingURL=Billing.341f8540.js.map
