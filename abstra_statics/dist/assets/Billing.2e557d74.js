import{a as g}from"./asyncComputed.78ec0807.js";import{d as y,eD as _,o as b,u as e,b as l,c as w,ev as x,f as o,w as a,ar as p,bF as h,e as C,eG as I}from"./outputWidgets.a321903e.js";import{c as f}from"./router.2245534d.js";import"./index.579b421e.js";import{O as k}from"./organization.c6644029.js";import{L as v}from"./LoadingContainer.4e4f58da.js";import{A as D}from"./Title.e1cf3e99.js";import{A}from"./index.fd9a3d7c.js";import{A as B}from"./index.6948059c.js";import{C as N}from"./Card.82090499.js";import"./Form.e0cc6e8e.js";import"./hasIn.62bbbac0.js";import"./popupNotifcation.43dee970.js";import"./record.d39119c8.js";import"./pubsub.df0290b2.js";import"./Text.b25e1b1d.js";import"./TabPane.5148c0d9.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="8f67b9dd-d8f8-4062-b2df-03c6b78c3425",t._sentryDebugIdIdentifier="sentry-dbid-8f67b9dd-d8f8-4062-b2df-03c6b78c3425")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Y=y({__name:"Billing",setup(t){const r=_().params.organizationId,{loading:c,result:m}=g(()=>k.get(r));b(()=>{location.search.includes("upgrade")&&f.showNewMessage("I want to upgrade my plan")});const u=()=>f.showNewMessage("I want to upgrade my plan");return(V,j)=>e(c)?(l(),w(v,{key:0})):(l(),x("div",z,[o(e(A),{justify:"space-between",align:"center"},{default:a(()=>[o(e(D),{level:3},{default:a(()=>[p("Current plan")]),_:1})]),_:1}),o(e(B),{style:{"margin-top":"0"}}),o(e(N),{style:{width:"300px"},title:"Plan"},{extra:a(()=>[o(e(h),{onClick:u},{default:a(()=>[p("Upgrade")]),_:1})]),default:a(()=>{var s,i,d;return[C("div",M,I((d=(i=(s=e(m))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Y as default};
//# sourceMappingURL=Billing.2e557d74.js.map
