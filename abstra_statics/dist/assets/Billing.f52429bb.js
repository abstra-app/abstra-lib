import{a as _}from"./asyncComputed.61a4e861.js";import{d as w,ea as b,X as h,u as e,o as n,c as d,Y as k,b as o,w as t,S as C,dd as f,aG as c,e9 as I,bT as x,dh as l,a as N}from"./index.00900164.js";import"./gateway.61e97762.js";import{a as v}from"./organization.ab599133.js";import"./tables.3355581b.js";import{C as m}from"./router.2cec9d72.js";import{L as z}from"./LoadingContainer.daeb0d26.js";import{A as B}from"./index.041d55b4.js";import"./popupNotifcation.105ba4a6.js";import"./record.9a19fe6f.js";import"./string.a628f102.js";import"./Badge.424cfeb2.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="3873c2fa-1c9b-4d61-aca4-ec7b5e94487e",a._sentryDebugIdIdentifier="sentry-dbid-3873c2fa-1c9b-4d61-aca4-ec7b5e94487e")}catch{}})();const D={key:1},U=["src"],P=w({__name:"Billing",setup(a){const p=b().params.organizationId,{loading:g,result:r}=_(async()=>{const i=await v.get(p),u=await i.getUsageReportUrl();return{organization:i,reportUrl:u}});h(()=>{location.search.includes("upgrade")&&m.showNewMessage("I want to upgrade my plan")});const y=()=>m.showNewMessage("I want to upgrade my plan");return(i,u)=>e(g)?(n(),d(z,{key:0})):e(r)?(n(),k("div",D,[o(e(l),{justify:"space-between",align:"center"},{default:t(()=>[o(e(f),{level:3},{default:t(()=>[c("Current plan: "+I(e(r).organization.coalescedPlan),1)]),_:1}),o(e(x),{type:"primary",onClick:y},{default:t(()=>[c("Upgrade")]),_:1})]),_:1}),o(e(B),{style:{"margin-top":"0"}}),e(r).organization.hasUsageReport?(n(),d(e(l),{key:0,align:"center",justify:"center"},{default:t(()=>[N("iframe",{src:e(r).reportUrl,frameborder:"0",style:{width:"1000px",height:"1700px"}},null,8,U)]),_:1})):(n(),d(e(l),{key:1,align:"center",justify:"center"},{default:t(()=>[o(e(f),{level:4},{default:t(()=>[c("No usage report available")]),_:1})]),_:1}))])):C("",!0)}});export{P as default};
//# sourceMappingURL=Billing.f52429bb.js.map
