import{a as _}from"./asyncComputed.8444b6d6.js";import{d as b,ea as w,X as h,u as e,o as n,c as d,Y as k,b as o,w as t,S as C,df as f,aG as l,e9 as I,bT as x,dj as c,a as N}from"./index.b24b0be8.js";import"./gateway.5b2b2bc6.js";import{a as v}from"./organization.62ac54bb.js";import"./tables.b183d093.js";import{C as m}from"./router.0ab78250.js";import{L as z}from"./LoadingContainer.71e730b6.js";import{A as B}from"./index.4d89302c.js";import"./popupNotifcation.5870d19b.js";import"./record.45c57538.js";import"./string.9be7b1c9.js";import"./Badge.78b81bf9.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="a3b9ee21-f729-4439-8bec-6cb4a227f179",a._sentryDebugIdIdentifier="sentry-dbid-a3b9ee21-f729-4439-8bec-6cb4a227f179")}catch{}})();const D={key:1},U=["src"],P=b({__name:"Billing",setup(a){const p=w().params.organizationId,{loading:g,result:r}=_(async()=>{const i=await v.get(p),u=await i.getUsageReportUrl();return{organization:i,reportUrl:u}});h(()=>{location.search.includes("upgrade")&&m.showNewMessage("I want to upgrade my plan")});const y=()=>m.showNewMessage("I want to upgrade my plan");return(i,u)=>e(g)?(n(),d(z,{key:0})):e(r)?(n(),k("div",D,[o(e(c),{justify:"space-between",align:"center"},{default:t(()=>[o(e(f),{level:3},{default:t(()=>[l("Current plan: "+I(e(r).organization.coalescedPlan),1)]),_:1}),o(e(x),{type:"primary",onClick:y},{default:t(()=>[l("Upgrade")]),_:1})]),_:1}),o(e(B),{style:{"margin-top":"0"}}),e(r).organization.hasUsageReport?(n(),d(e(c),{key:0,align:"center",justify:"center"},{default:t(()=>[N("iframe",{src:e(r).reportUrl,frameborder:"0",style:{width:"1000px",height:"1700px"}},null,8,U)]),_:1})):(n(),d(e(c),{key:1,align:"center",justify:"center"},{default:t(()=>[o(e(f),{level:4},{default:t(()=>[l("No usage report available")]),_:1})]),_:1}))])):C("",!0)}});export{P as default};
//# sourceMappingURL=Billing.6ca7f4c8.js.map
