import{d as g,eA as y,o as _,u as e,b as p,c as w,eu as b,f as a,w as o,bf as x,aq as l,bE as h,e as I,eD as C}from"./outputWidgets.6dcbe016.js";import{c as f}from"./router.fed6026f.js";import"./index.e284e9cc.js";import{O as k}from"./organization.cc893a72.js";import{a as A}from"./asyncComputed.b49b1e0f.js";import{A as D}from"./Title.deb697cf.js";import{A as v}from"./index.a10a4531.js";import{A as B}from"./index.b8c97870.js";import{C as N}from"./Card.a2515544.js";import"./Form.fd61067d.js";import"./hasIn.78be2856.js";import"./popupNotifcation.58c9337c.js";import"./index.cf4c23b9.js";import"./record.48d1a924.js";import"./pubsub.e8198d2a.js";import"./Text.f0fdc92a.js";import"./index.3177f91c.js";import"./TabPane.6716348d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="c00af91f-57a7-49e8-a3e0-d76a60d649b8",t._sentryDebugIdIdentifier="sentry-dbid-c00af91f-57a7-49e8-a3e0-d76a60d649b8")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Z=g({__name:"Billing",setup(t){const r=y().params.organizationId,{loading:m,result:c}=A(()=>k.get(r));_(()=>{location.search.includes("upgrade")&&f.showNewMessage("I want to upgrade my plan")});const u=()=>f.showNewMessage("I want to upgrade my plan");return(E,V)=>e(m)?(p(),w(e(x),{key:0})):(p(),b("div",z,[a(e(v),{justify:"space-between",align:"center"},{default:o(()=>[a(e(D),{level:3},{default:o(()=>[l("Current plan")]),_:1})]),_:1}),a(e(B),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(h),{onClick:u},{default:o(()=>[l("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[I("div",M,C((d=(i=(s=e(c))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Z as default};
//# sourceMappingURL=Billing.2dd846d7.js.map
