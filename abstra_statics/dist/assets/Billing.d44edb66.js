import{a as _}from"./asyncComputed.65722ff2.js";import{d as b,ea as w,X as h,u as e,o as n,c as d,Y as k,b as o,w as t,S as C,df as f,aG as c,e9 as I,bT as x,dj as l,a as N}from"./index.eb723478.js";import"./gateway.41d9bbf6.js";import{a as v}from"./organization.920383f3.js";import"./tables.32d95201.js";import{C as m}from"./router.9644c549.js";import{L as z}from"./LoadingContainer.de913ce7.js";import{A as B}from"./index.64a20157.js";import"./popupNotifcation.073fbf81.js";import"./record.95022861.js";import"./string.3d89bd5f.js";import"./Badge.a7fb7347.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="3a0b3b74-94cf-4983-89e9-8ec12b8e25c0",a._sentryDebugIdIdentifier="sentry-dbid-3a0b3b74-94cf-4983-89e9-8ec12b8e25c0")}catch{}})();const D={key:1},U=["src"],P=b({__name:"Billing",setup(a){const p=w().params.organizationId,{loading:g,result:r}=_(async()=>{const i=await v.get(p),u=await i.getUsageReportUrl();return{organization:i,reportUrl:u}});h(()=>{location.search.includes("upgrade")&&m.showNewMessage("I want to upgrade my plan")});const y=()=>m.showNewMessage("I want to upgrade my plan");return(i,u)=>e(g)?(n(),d(z,{key:0})):e(r)?(n(),k("div",D,[o(e(l),{justify:"space-between",align:"center"},{default:t(()=>[o(e(f),{level:3},{default:t(()=>[c("Current plan: "+I(e(r).organization.coalescedPlan),1)]),_:1}),o(e(x),{type:"primary",onClick:y},{default:t(()=>[c("Upgrade")]),_:1})]),_:1}),o(e(B),{style:{"margin-top":"0"}}),e(r).organization.hasUsageReport?(n(),d(e(l),{key:0,align:"center",justify:"center"},{default:t(()=>[N("iframe",{src:e(r).reportUrl,frameborder:"0",style:{width:"1000px",height:"1700px"}},null,8,U)]),_:1})):(n(),d(e(l),{key:1,align:"center",justify:"center"},{default:t(()=>[o(e(f),{level:4},{default:t(()=>[c("No usage report available")]),_:1})]),_:1}))])):C("",!0)}});export{P as default};
//# sourceMappingURL=Billing.d44edb66.js.map
