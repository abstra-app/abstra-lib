import{d as m,eB as u,u as e,b as p,c as y,ev as _,f as o,w as a,bg as g,ar as f,ex as x,e as b,eD as w}from"./outputWidgets.1ef04d57.js";import"./router.cb36ddc1.js";import"./index.b9ddb2e2.js";import{O as k}from"./organization.91c85709.js";import{a as A}from"./asyncComputed.15a9be40.js";import{A as B}from"./Title.406aa905.js";import{A as h}from"./index.003a8e9b.js";import{A as C}from"./index.f655c340.js";import{A as v}from"./Text.efe7cb2d.js";import{C as D}from"./Card.e0124ce5.js";import"./Form.68d4a592.js";import"./hasIn.a4efa85f.js";import"./popupNotifcation.1338278e.js";import"./index.cf4c23b9.js";import"./record.dd52fa30.js";import"./pubsub.b5598a30.js";import"./Base.d3185fc8.js";import"./Typography.b9421ace.js";import"./TabPane.ebc81565.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="291ac8cf-6e0f-48e3-8e9d-0ffc5f282ae3",t._sentryDebugIdIdentifier="sentry-dbid-291ac8cf-6e0f-48e3-8e9d-0ffc5f282ae3")}catch{}})();const I={key:1},N={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},Y=m({__name:"Billing",setup(t){const n=u().params.organizationId,{loading:l,result:c}=A(()=>k.get(n));return(z,T)=>e(l)?(p(),y(e(g),{key:0})):(p(),_("div",I,[o(e(h),{justify:"space-between",align:"center"},{default:a(()=>[o(e(B),{level:3},{default:a(()=>[f("Current plan")]),_:1}),x("",!0)]),_:1}),o(e(C),{style:{"margin-top":"0"}}),o(e(D),{style:{width:"300px"}},{default:a(()=>{var i,s,d;return[o(e(v),{type:"secondary"},{default:a(()=>[f("Plan")]),_:1}),b("div",N,w((d=(s=(i=e(c))==null?void 0:i.billingMetadata)==null?void 0:s.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Y as default};
//# sourceMappingURL=Billing.83639ab1.js.map
