import{a as g}from"./asyncComputed.a7fc1aad.js";import{d as y,f1 as _,o as w,u as e,b as l,c as b,eV as x,f as a,w as o,cW as C,am as p,cY as h,bF as I,e as k,f4 as v}from"./outputWidgets.b408cd47.js";import"./gateway.5649747e.js";import"./index.a96bb8d2.js";import{O as B}from"./organization.433b3f56.js";import{C as c}from"./router.49371dd0.js";import{L as D}from"./LoadingContainer.14551b90.js";import{A as N}from"./index.4038f507.js";import{C as z}from"./Card.1925c988.js";import"./popupNotifcation.e99572f9.js";import"./record.7a308bd3.js";import"./pubsub.e8c4900b.js";import"./string.3b3d0b2e.js";import"./Form.30ca3c8c.js";import"./hasIn.dda5a20c.js";import"./TabPane.43bebfc4.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="6d5405c2-e29f-4dce-92a8-5c746862af33",t._sentryDebugIdIdentifier="sentry-dbid-6d5405c2-e29f-4dce-92a8-5c746862af33")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Q=y({__name:"Billing",setup(t){const r=_().params.organizationId,{loading:f,result:m}=g(()=>B.get(r));w(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const u=()=>c.showNewMessage("I want to upgrade my plan");return(V,j)=>e(f)?(l(),b(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:u},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[k("div",A,v((d=(i=(s=e(m))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Q as default};
//# sourceMappingURL=Billing.7467a348.js.map
