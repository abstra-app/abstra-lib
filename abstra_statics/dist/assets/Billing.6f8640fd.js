import{d as m,eB as f,u as e,b as d,c as u,ev as y,f as o,w as a,bv as _,ar as p,ex as g,e as b,eD as x}from"./outputWidgets.0d464d45.js";import"./router.153fca02.js";import"./index.269f5885.js";import{O as w}from"./organization.f30e96eb.js";import{a as k}from"./asyncComputed.854929f8.js";import{A}from"./Title.165e8fba.js";import{A as B}from"./index.34364ff0.js";import{A as h}from"./index.f3d48c42.js";import{A as C}from"./Text.154b6018.js";import{C as v}from"./Card.31a3b216.js";import"./FormItem.c560344d.js";import"./hasIn.badbb269.js";import"./index.cf4c23b9.js";import"./record.7349e1ae.js";import"./pubsub.512e1ae1.js";import"./Base.c36c8c6e.js";import"./Typography.ed13194f.js";import"./TabPane.87e40e4e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="5c3606ba-18da-40d4-b487-826393339b9c",t._sentryDebugIdIdentifier="sentry-dbid-5c3606ba-18da-40d4-b487-826393339b9c")}catch{}})();const D={key:1},I={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},W=m({__name:"Billing",setup(t){const n=f().params.organizationId,{loading:l,result:c}=k(()=>w.get(n));return(z,N)=>e(l)?(d(),u(e(_),{key:0})):(d(),y("div",D,[o(e(B),{justify:"space-between",align:"center"},{default:a(()=>[o(e(A),{level:3},{default:a(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),o(e(h),{style:{"margin-top":"0"}}),o(e(v),{style:{width:"300px"}},{default:a(()=>{var i,s;return[o(e(C),{type:"secondary"},{default:a(()=>[p("Plan")]),_:1}),b("div",I,x((s=(i=e(c))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{W as default};
//# sourceMappingURL=Billing.6f8640fd.js.map
