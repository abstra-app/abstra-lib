import{a as _}from"./asyncComputed.5a9dc807.js";import{d as w,ea as b,X as h,u as e,o as n,c as d,Y as k,b as o,w as t,S as C,dd as f,aG as l,e9 as I,bT as x,dh as c,a as N}from"./index.0050062d.js";import"./gateway.60411ad8.js";import{a as v}from"./organization.0409328f.js";import"./tables.2e0419c1.js";import{C as m}from"./router.22eb3290.js";import{L as z}from"./LoadingContainer.239af732.js";import{A as B}from"./index.dddfec09.js";import"./popupNotifcation.675f1b12.js";import"./record.ed103436.js";import"./string.867fe8ae.js";import"./Badge.3d214d5b.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="a63039ae-b294-4ec0-80e7-bde441162f5c",a._sentryDebugIdIdentifier="sentry-dbid-a63039ae-b294-4ec0-80e7-bde441162f5c")}catch{}})();const D={key:1},U=["src"],P=w({__name:"Billing",setup(a){const p=b().params.organizationId,{loading:g,result:r}=_(async()=>{const i=await v.get(p),u=await i.getUsageReportUrl();return{organization:i,reportUrl:u}});h(()=>{location.search.includes("upgrade")&&m.showNewMessage("I want to upgrade my plan")});const y=()=>m.showNewMessage("I want to upgrade my plan");return(i,u)=>e(g)?(n(),d(z,{key:0})):e(r)?(n(),k("div",D,[o(e(c),{justify:"space-between",align:"center"},{default:t(()=>[o(e(f),{level:3},{default:t(()=>[l("Current plan: "+I(e(r).organization.coalescedPlan),1)]),_:1}),o(e(x),{type:"primary",onClick:y},{default:t(()=>[l("Upgrade")]),_:1})]),_:1}),o(e(B),{style:{"margin-top":"0"}}),e(r).organization.hasUsageReport?(n(),d(e(c),{key:0,align:"center",justify:"center"},{default:t(()=>[N("iframe",{src:e(r).reportUrl,frameborder:"0",style:{width:"1000px",height:"1700px"}},null,8,U)]),_:1})):(n(),d(e(c),{key:1,align:"center",justify:"center"},{default:t(()=>[o(e(f),{level:4},{default:t(()=>[l("No usage report available")]),_:1})]),_:1}))])):C("",!0)}});export{P as default};
//# sourceMappingURL=Billing.0cc894ba.js.map
