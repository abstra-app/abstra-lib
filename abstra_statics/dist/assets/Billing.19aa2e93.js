import{a as _}from"./asyncComputed.03aca0e0.js";import{d as w,ea as b,X as h,u as e,o as n,c as d,Y as k,b as o,w as t,S as C,dd as f,aG as l,e9 as I,bT as x,dh as c,a as N}from"./index.b7b4bda7.js";import"./gateway.34f64afa.js";import{O as v}from"./organization.0d4653d9.js";import"./tables.fc0f6d24.js";import{C as g}from"./router.5e6db19c.js";import{L as z}from"./LoadingContainer.11eb326e.js";import{A as B}from"./index.0abd7f87.js";import"./popupNotifcation.75e3ec8b.js";import"./record.c4002da6.js";import"./string.197ece6b.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="9637b38f-3383-4b76-88c3-22d183d5c240",a._sentryDebugIdIdentifier="sentry-dbid-9637b38f-3383-4b76-88c3-22d183d5c240")}catch{}})();const D={key:1},U=["src"],G=w({__name:"Billing",setup(a){const p=b().params.organizationId,{loading:m,result:r}=_(async()=>{const i=await v.get(p),u=await i.getUsageReportUrl();return{organization:i,reportUrl:u}});h(()=>{location.search.includes("upgrade")&&g.showNewMessage("I want to upgrade my plan")});const y=()=>g.showNewMessage("I want to upgrade my plan");return(i,u)=>e(m)?(n(),d(z,{key:0})):e(r)?(n(),k("div",D,[o(e(c),{justify:"space-between",align:"center"},{default:t(()=>[o(e(f),{level:3},{default:t(()=>[l("Current plan: "+I(e(r).organization.coalescedPlan),1)]),_:1}),o(e(x),{type:"primary",onClick:y},{default:t(()=>[l("Upgrade")]),_:1})]),_:1}),o(e(B),{style:{"margin-top":"0"}}),e(r).organization.hasUsageReport?(n(),d(e(c),{key:0,align:"center",justify:"center"},{default:t(()=>[N("iframe",{src:e(r).reportUrl,frameborder:"0",style:{width:"1000px",height:"1700px"}},null,8,U)]),_:1})):(n(),d(e(c),{key:1,align:"center",justify:"center"},{default:t(()=>[o(e(f),{level:4},{default:t(()=>[l("No usage report available")]),_:1})]),_:1}))])):C("",!0)}});export{G as default};
//# sourceMappingURL=Billing.19aa2e93.js.map
