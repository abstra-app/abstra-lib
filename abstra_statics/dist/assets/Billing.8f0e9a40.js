import{d as g,eB as y,o as _,u as e,b as p,c as b,ev as w,f as a,w as o,bg as I,ar as l,bG as x,e as h,eD as k}from"./outputWidgets.b14d4ea2.js";import{I as f}from"./router.038496e7.js";import"./index.270f9929.js";import{O as v}from"./organization.eb400e74.js";import{a as B}from"./asyncComputed.0b6f340a.js";import{A as C}from"./Title.ef7d6752.js";import{A as D}from"./index.3aa6b5c2.js";import{A}from"./index.ec68288c.js";import{C as N}from"./Card.e80aa8ca.js";import"./Form.4ad85787.js";import"./hasIn.7e44428f.js";import"./popupNotifcation.a7774c24.js";import"./index.cf4c23b9.js";import"./record.fd7c056d.js";import"./pubsub.634b15b6.js";import"./Base.c759a414.js";import"./Typography.24d398c1.js";import"./TabPane.2b42271d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="ba56e4d0-44d8-4190-8b3d-1afffcb7a2f8",t._sentryDebugIdIdentifier="sentry-dbid-ba56e4d0-44d8-4190-8b3d-1afffcb7a2f8")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Z=g({__name:"Billing",setup(t){const n=y().params.organizationId,{loading:c,result:m}=B(()=>v.get(n));_(()=>{location.search.includes("upgrade")&&f.showNewMessage("I want to upgrade my plan")});const u=()=>f.showNewMessage("I want to upgrade my plan");return(V,j)=>e(c)?(p(),b(e(I),{key:0})):(p(),w("div",z,[a(e(D),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[l("Current plan")]),_:1})]),_:1}),a(e(A),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(x),{onClick:u},{default:o(()=>[l("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[h("div",M,k((d=(i=(s=e(m))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Z as default};
//# sourceMappingURL=Billing.8f0e9a40.js.map
