import{a as _}from"./asyncComputed.b31540a4.js";import{d as w,ec as h,X as b,u as e,o as n,c as d,Y as k,b as o,w as t,S as C,dd as f,aG as c,ea as I,bT as x,dh as l,a as N}from"./index.82b3148c.js";import"./gateway.8733a5f3.js";import{a as v}from"./organization.57cbe21a.js";import"./tables.b60a390b.js";import{C as m}from"./router.aacfb520.js";import{L as z}from"./LoadingContainer.aea352cd.js";import{A as B}from"./index.f441bd75.js";import"./popupNotifcation.e1bf1f8c.js";import"./record.cb9a902e.js";import"./string.ab0c206a.js";import"./Badge.8b0acfd8.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="eea853cd-4dee-433f-94ce-ed05c7c41a77",a._sentryDebugIdIdentifier="sentry-dbid-eea853cd-4dee-433f-94ce-ed05c7c41a77")}catch{}})();const D={key:1},U=["src"],P=w({__name:"Billing",setup(a){const p=h().params.organizationId,{loading:g,result:r}=_(async()=>{const i=await v.get(p),u=await i.getUsageReportUrl();return{organization:i,reportUrl:u}});b(()=>{location.search.includes("upgrade")&&m.showNewMessage("I want to upgrade my plan")});const y=()=>m.showNewMessage("I want to upgrade my plan");return(i,u)=>e(g)?(n(),d(z,{key:0})):e(r)?(n(),k("div",D,[o(e(l),{justify:"space-between",align:"center"},{default:t(()=>[o(e(f),{level:3},{default:t(()=>[c("Current plan: "+I(e(r).organization.coalescedPlan),1)]),_:1}),o(e(x),{type:"primary",onClick:y},{default:t(()=>[c("Upgrade")]),_:1})]),_:1}),o(e(B),{style:{"margin-top":"0"}}),e(r).organization.hasUsageReport?(n(),d(e(l),{key:0,align:"center",justify:"center"},{default:t(()=>[N("iframe",{src:e(r).reportUrl,frameborder:"0",style:{width:"1000px",height:"1700px"}},null,8,U)]),_:1})):(n(),d(e(l),{key:1,align:"center",justify:"center"},{default:t(()=>[o(e(f),{level:4},{default:t(()=>[c("No usage report available")]),_:1})]),_:1}))])):C("",!0)}});export{P as default};
//# sourceMappingURL=Billing.83468678.js.map
