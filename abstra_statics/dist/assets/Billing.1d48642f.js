import{a as g}from"./asyncComputed.eb8b408c.js";import{d as y,f1 as _,o as w,u as e,b as l,c as b,eV as x,f as a,w as o,cW as C,am as p,cY as h,bF as I,e as k,f4 as v}from"./outputWidgets.9c82af3f.js";import"./gateway.b334672b.js";import"./index.00e43115.js";import{O as B}from"./organization.2db6dd8a.js";import{C as f}from"./router.80367166.js";import{L as D}from"./LoadingContainer.8b7b780c.js";import{A as N}from"./index.b5038eb6.js";import{C as z}from"./Card.d7558eb6.js";import"./popupNotifcation.2de34fe5.js";import"./record.615fab6d.js";import"./pubsub.267fa091.js";import"./Form.9a2c3bb8.js";import"./hasIn.fac42b94.js";import"./TabPane.343c37bb.js";import"./PlusOutlined.cf52d035.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="749531e6-2542-4857-ab21-48f0e5a11526",t._sentryDebugIdIdentifier="sentry-dbid-749531e6-2542-4857-ab21-48f0e5a11526")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Q=y({__name:"Billing",setup(t){const r=_().params.organizationId,{loading:c,result:m}=g(()=>B.get(r));w(()=>{location.search.includes("upgrade")&&f.showNewMessage("I want to upgrade my plan")});const u=()=>f.showNewMessage("I want to upgrade my plan");return(V,j)=>e(c)?(l(),b(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:u},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[k("div",A,v((d=(i=(s=e(m))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Q as default};
//# sourceMappingURL=Billing.1d48642f.js.map
