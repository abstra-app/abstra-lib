import{d as g,eA as y,o as _,u as e,b as p,c as b,eu as w,f as a,w as o,bf as x,aq as l,bE as h,e as I,eD as C}from"./outputWidgets.8f35e76b.js";import{c as m}from"./router.eb6cf81e.js";import"./index.fb4a4209.js";import{O as k}from"./organization.5fe5bb3c.js";import{a as A}from"./asyncComputed.b2c7682e.js";import{A as D}from"./Title.984d5105.js";import{A as v}from"./index.30032ec4.js";import{A as B}from"./index.c56951cc.js";import{C as N}from"./Card.05a66930.js";import"./Form.357810f8.js";import"./hasIn.38270313.js";import"./popupNotifcation.20f659d9.js";import"./index.cf4c23b9.js";import"./record.56272af3.js";import"./pubsub.aac2ae7d.js";import"./Text.cb1b4ad4.js";import"./index.1b34424f.js";import"./TabPane.385f8290.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="c3a37484-9260-4d2d-aa38-0addafdbab9a",t._sentryDebugIdIdentifier="sentry-dbid-c3a37484-9260-4d2d-aa38-0addafdbab9a")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Z=g({__name:"Billing",setup(t){const r=y().params.organizationId,{loading:c,result:f}=A(()=>k.get(r));_(()=>{location.search.includes("upgrade")&&m.showNewMessage("I want to upgrade my plan")});const u=()=>m.showNewMessage("I want to upgrade my plan");return(E,V)=>e(c)?(p(),b(e(x),{key:0})):(p(),w("div",z,[a(e(v),{justify:"space-between",align:"center"},{default:o(()=>[a(e(D),{level:3},{default:o(()=>[l("Current plan")]),_:1})]),_:1}),a(e(B),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(h),{onClick:u},{default:o(()=>[l("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[I("div",M,C((d=(i=(s=e(f))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Z as default};
//# sourceMappingURL=Billing.f2d9e7fd.js.map
