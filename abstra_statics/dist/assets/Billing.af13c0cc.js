import{a as _}from"./asyncComputed.2369cd7a.js";import{d as w,ea as b,X as h,u as e,o as n,c as d,Y as k,b as o,w as a,S as C,dd as f,aG as l,e9 as I,bT as x,dh as c,a as N}from"./index.30f07d31.js";import"./gateway.0ffac28b.js";import{a as v}from"./organization.6e42c713.js";import"./tables.17e8789d.js";import{C as m}from"./router.9e0a1071.js";import{L as z}from"./LoadingContainer.2ebb4913.js";import{A as B}from"./index.0331e237.js";import"./popupNotifcation.22881389.js";import"./record.3545d814.js";import"./string.b6db62b2.js";import"./Badge.9479595a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[s]="fda0d7ba-317d-4fa8-ab30-2a8526d69cc4",t._sentryDebugIdIdentifier="sentry-dbid-fda0d7ba-317d-4fa8-ab30-2a8526d69cc4")}catch{}})();const D={key:1},U=["src"],P=w({__name:"Billing",setup(t){const p=b().params.organizationId,{loading:g,result:r}=_(async()=>{const i=await v.get(p),u=await i.getUsageReportUrl();return{organization:i,reportUrl:u}});h(()=>{location.search.includes("upgrade")&&m.showNewMessage("I want to upgrade my plan")});const y=()=>m.showNewMessage("I want to upgrade my plan");return(i,u)=>e(g)?(n(),d(z,{key:0})):e(r)?(n(),k("div",D,[o(e(c),{justify:"space-between",align:"center"},{default:a(()=>[o(e(f),{level:3},{default:a(()=>[l("Current plan: "+I(e(r).organization.coalescedPlan),1)]),_:1}),o(e(x),{type:"primary",onClick:y},{default:a(()=>[l("Upgrade")]),_:1})]),_:1}),o(e(B),{style:{"margin-top":"0"}}),e(r).organization.hasUsageReport?(n(),d(e(c),{key:0,align:"center",justify:"center"},{default:a(()=>[N("iframe",{src:e(r).reportUrl,frameborder:"0",style:{width:"1000px",height:"1700px"}},null,8,U)]),_:1})):(n(),d(e(c),{key:1,align:"center",justify:"center"},{default:a(()=>[o(e(f),{level:4},{default:a(()=>[l("No usage report available")]),_:1})]),_:1}))])):C("",!0)}});export{P as default};
//# sourceMappingURL=Billing.af13c0cc.js.map
