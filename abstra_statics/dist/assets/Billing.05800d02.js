import{a as _}from"./asyncComputed.aeacd985.js";import{d as b,ea as w,X as h,u as e,o as n,c as d,Y as k,b as o,w as t,S as C,dd as f,aG as l,e9 as I,bT as x,dh as c,a as N}from"./index.86f25c77.js";import"./gateway.7a5e5e8c.js";import{a as v}from"./organization.d2e51680.js";import"./tables.55474a26.js";import{C as m}from"./router.0c6817e3.js";import{L as z}from"./LoadingContainer.1c78dab3.js";import{A as B}from"./index.64ce1c39.js";import"./popupNotifcation.85503ad7.js";import"./record.a7dc5292.js";import"./string.9db947db.js";import"./Badge.23cc2aab.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="26e5a564-32bf-43c1-bf2a-45d888a1b47c",a._sentryDebugIdIdentifier="sentry-dbid-26e5a564-32bf-43c1-bf2a-45d888a1b47c")}catch{}})();const D={key:1},U=["src"],P=b({__name:"Billing",setup(a){const p=w().params.organizationId,{loading:g,result:r}=_(async()=>{const i=await v.get(p),u=await i.getUsageReportUrl();return{organization:i,reportUrl:u}});h(()=>{location.search.includes("upgrade")&&m.showNewMessage("I want to upgrade my plan")});const y=()=>m.showNewMessage("I want to upgrade my plan");return(i,u)=>e(g)?(n(),d(z,{key:0})):e(r)?(n(),k("div",D,[o(e(c),{justify:"space-between",align:"center"},{default:t(()=>[o(e(f),{level:3},{default:t(()=>[l("Current plan: "+I(e(r).organization.coalescedPlan),1)]),_:1}),o(e(x),{type:"primary",onClick:y},{default:t(()=>[l("Upgrade")]),_:1})]),_:1}),o(e(B),{style:{"margin-top":"0"}}),e(r).organization.hasUsageReport?(n(),d(e(c),{key:0,align:"center",justify:"center"},{default:t(()=>[N("iframe",{src:e(r).reportUrl,frameborder:"0",style:{width:"1000px",height:"1700px"}},null,8,U)]),_:1})):(n(),d(e(c),{key:1,align:"center",justify:"center"},{default:t(()=>[o(e(f),{level:4},{default:t(()=>[l("No usage report available")]),_:1})]),_:1}))])):C("",!0)}});export{P as default};
//# sourceMappingURL=Billing.05800d02.js.map
