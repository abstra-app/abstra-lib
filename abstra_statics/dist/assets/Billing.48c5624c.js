import{d as g,eA as y,o as b,u as e,b as p,c as _,eu as w,f as a,w as o,bf as x,aq as l,bE as h,e as I,eD as C}from"./outputWidgets.b2f2adf2.js";import{c as f}from"./router.778927b3.js";import"./index.914bcef3.js";import{O as k}from"./organization.273160a5.js";import{a as A}from"./asyncComputed.0eb432f7.js";import{A as D}from"./Title.d1ce9cd1.js";import{A as v}from"./index.c47b0dc1.js";import{A as B}from"./index.3df7bcb5.js";import{C as N}from"./Card.1ffebbef.js";import"./Form.151a806c.js";import"./hasIn.2f264b73.js";import"./popupNotifcation.45645a97.js";import"./index.cf4c23b9.js";import"./record.01220836.js";import"./pubsub.56b36b75.js";import"./Text.9554a64b.js";import"./index.a64d1f80.js";import"./TabPane.27e1a36d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="b524a28a-b3bf-4e97-8fd1-3822984de3b1",t._sentryDebugIdIdentifier="sentry-dbid-b524a28a-b3bf-4e97-8fd1-3822984de3b1")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Z=g({__name:"Billing",setup(t){const r=y().params.organizationId,{loading:m,result:u}=A(()=>k.get(r));b(()=>{location.search.includes("upgrade")&&f.showNewMessage("I want to upgrade my plan")});const c=()=>f.showNewMessage("I want to upgrade my plan");return(E,V)=>e(m)?(p(),_(e(x),{key:0})):(p(),w("div",z,[a(e(v),{justify:"space-between",align:"center"},{default:o(()=>[a(e(D),{level:3},{default:o(()=>[l("Current plan")]),_:1})]),_:1}),a(e(B),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(h),{onClick:c},{default:o(()=>[l("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[I("div",M,C((d=(i=(s=e(u))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Z as default};
//# sourceMappingURL=Billing.48c5624c.js.map
