import{a as g}from"./asyncComputed.7ddf4ff5.js";import{d as y,f1 as _,o as b,u as e,b as l,c as w,eV as x,f as a,w as o,cW as C,am as p,cY as h,bF as I,e as k,f4 as v}from"./outputWidgets.52066b3d.js";import"./gateway.72880b5e.js";import"./index.5d2a0985.js";import{O as B}from"./organization.d6836ea4.js";import{C as f}from"./router.1b562478.js";import{L as D}from"./LoadingContainer.e24aac8a.js";import{A as N}from"./index.a1cdb165.js";import{C as z}from"./Card.ec3d8a00.js";import"./popupNotifcation.2af24d89.js";import"./record.b56c63fa.js";import"./pubsub.d237c305.js";import"./string.19ff2b9e.js";import"./Form.255b51d3.js";import"./hasIn.45d59938.js";import"./TabPane.50e52dff.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="e492fa05-1799-46a4-bb33-e8aa228eebe9",t._sentryDebugIdIdentifier="sentry-dbid-e492fa05-1799-46a4-bb33-e8aa228eebe9")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Q=y({__name:"Billing",setup(t){const r=_().params.organizationId,{loading:c,result:m}=g(()=>B.get(r));b(()=>{location.search.includes("upgrade")&&f.showNewMessage("I want to upgrade my plan")});const u=()=>f.showNewMessage("I want to upgrade my plan");return(V,j)=>e(c)?(l(),w(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:u},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[k("div",A,v((d=(i=(s=e(m))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Q as default};
//# sourceMappingURL=Billing.2b03c6e1.js.map
