import{d as c,eB as m,u as e,b as d,c as u,ev as y,f as o,w as a,bv as _,ar as p,ex as g,e as b,eD as x}from"./outputWidgets.6193e952.js";import"./router.244dda65.js";import"./index.4fd6720d.js";import{O as w}from"./organization.7eae6a81.js";import{a as k}from"./asyncComputed.50974a55.js";import{A}from"./Title.f6f8dc8d.js";import{A as B}from"./index.e2011f56.js";import{A as h}from"./index.3d1a85bd.js";import{A as C}from"./Text.9f4e20a9.js";import{C as v}from"./Card.291184fb.js";import"./FormItem.29582683.js";import"./hasIn.18badecf.js";import"./index.cf4c23b9.js";import"./record.c57e485e.js";import"./pubsub.5d3161f0.js";import"./Base.7a4018a3.js";import"./Typography.0720e97e.js";import"./TabPane.4066f585.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="0dce7fe1-1ec0-4f84-8077-dd573ee4fe2b",t._sentryDebugIdIdentifier="sentry-dbid-0dce7fe1-1ec0-4f84-8077-dd573ee4fe2b")}catch{}})();const D={key:1},I={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},W=c({__name:"Billing",setup(t){const n=m().params.organizationId,{loading:f,result:l}=k(()=>w.get(n));return(z,N)=>e(f)?(d(),u(e(_),{key:0})):(d(),y("div",D,[o(e(B),{justify:"space-between",align:"center"},{default:a(()=>[o(e(A),{level:3},{default:a(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),o(e(h),{style:{"margin-top":"0"}}),o(e(v),{style:{width:"300px"}},{default:a(()=>{var i,s;return[o(e(C),{type:"secondary"},{default:a(()=>[p("Plan")]),_:1}),b("div",I,x((s=(i=e(l))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{W as default};
//# sourceMappingURL=Billing.433ec00d.js.map
