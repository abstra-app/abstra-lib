import{a as _}from"./asyncComputed.703c33fd.js";import{d as w,ea as b,X as h,u as e,o as n,c as d,Y as k,b as o,w as t,S as C,dd as u,aG as l,e9 as I,bT as x,dh as c,a as N}from"./index.d0f12294.js";import"./gateway.ae1d6857.js";import{O as v}from"./organization.03372a7f.js";import"./tables.318f703e.js";import{C as g}from"./router.375df57e.js";import{L as z}from"./LoadingContainer.23bc0e74.js";import{A as B}from"./index.a552d580.js";import"./popupNotifcation.a0a6244b.js";import"./record.8c284c67.js";import"./string.d9c83adf.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="45e68f6f-d75f-4bea-8976-1daf0b34036f",a._sentryDebugIdIdentifier="sentry-dbid-45e68f6f-d75f-4bea-8976-1daf0b34036f")}catch{}})();const D={key:1},U=["src"],G=w({__name:"Billing",setup(a){const f=b().params.organizationId,{loading:m,result:r}=_(async()=>{const i=await v.get(f),p=await i.getUsageReportUrl();return{organization:i,reportUrl:p}});h(()=>{location.search.includes("upgrade")&&g.showNewMessage("I want to upgrade my plan")});const y=()=>g.showNewMessage("I want to upgrade my plan");return(i,p)=>e(m)?(n(),d(z,{key:0})):e(r)?(n(),k("div",D,[o(e(c),{justify:"space-between",align:"center"},{default:t(()=>[o(e(u),{level:3},{default:t(()=>[l("Current plan: "+I(e(r).organization.coalescedPlan),1)]),_:1}),o(e(x),{type:"primary",onClick:y},{default:t(()=>[l("Upgrade")]),_:1})]),_:1}),o(e(B),{style:{"margin-top":"0"}}),e(r).organization.hasUsageReport?(n(),d(e(c),{key:0,align:"center",justify:"center"},{default:t(()=>[N("iframe",{src:e(r).reportUrl,frameborder:"0",style:{width:"1000px",height:"1700px"}},null,8,U)]),_:1})):(n(),d(e(c),{key:1,align:"center",justify:"center"},{default:t(()=>[o(e(u),{level:4},{default:t(()=>[l("No usage report available")]),_:1})]),_:1}))])):C("",!0)}});export{G as default};
//# sourceMappingURL=Billing.b9cff65e.js.map
