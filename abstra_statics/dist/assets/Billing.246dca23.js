import{d as g,eA as y,o as _,u as e,b as p,c as b,eu as w,f as a,w as o,bf as x,aq as l,bE as h,e as I,eD as C}from"./outputWidgets.b1051bf6.js";import{c as f}from"./router.1b3abbc5.js";import"./index.331b274c.js";import{O as k}from"./organization.a90ed0ea.js";import{a as A}from"./asyncComputed.024639a6.js";import{A as D}from"./Title.52ce837c.js";import{A as v}from"./index.f9829772.js";import{A as B}from"./index.e4e2f790.js";import{C as N}from"./Card.b4dc062a.js";import"./Form.764deea9.js";import"./hasIn.7a5dc2c1.js";import"./popupNotifcation.a74b9d8b.js";import"./index.cf4c23b9.js";import"./record.79259cc4.js";import"./pubsub.ebca5b2d.js";import"./Text.e1e330eb.js";import"./index.09dabf56.js";import"./TabPane.c18c03ef.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="a05f9031-cfb9-4c76-81c2-3d4bfe0f5628",t._sentryDebugIdIdentifier="sentry-dbid-a05f9031-cfb9-4c76-81c2-3d4bfe0f5628")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Z=g({__name:"Billing",setup(t){const r=y().params.organizationId,{loading:c,result:m}=A(()=>k.get(r));_(()=>{location.search.includes("upgrade")&&f.showNewMessage("I want to upgrade my plan")});const u=()=>f.showNewMessage("I want to upgrade my plan");return(E,V)=>e(c)?(p(),b(e(x),{key:0})):(p(),w("div",z,[a(e(v),{justify:"space-between",align:"center"},{default:o(()=>[a(e(D),{level:3},{default:o(()=>[l("Current plan")]),_:1})]),_:1}),a(e(B),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(h),{onClick:u},{default:o(()=>[l("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[I("div",M,C((d=(i=(s=e(m))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Z as default};
//# sourceMappingURL=Billing.246dca23.js.map
