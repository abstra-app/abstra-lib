import{a as _}from"./asyncComputed.d80ed253.js";import{d as b,ea as w,X as h,u as e,o as n,c as d,Y as k,b as o,w as t,S as C,dd as m,aG as l,e9 as I,bT as x,dh as c,a as N}from"./index.a8cd17c6.js";import"./gateway.68cb87fc.js";import{a as v}from"./organization.58b30f80.js";import"./tables.bc9aa3fc.js";import{C as g}from"./router.227a30d7.js";import{L as z}from"./LoadingContainer.187cab7b.js";import{A as B}from"./index.04336cdc.js";import"./popupNotifcation.5f0a41b0.js";import"./record.de5ea647.js";import"./string.132e4002.js";import"./Badge.7af9eb9a.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="346532a1-8764-41a8-a73b-70b2679204b2",a._sentryDebugIdIdentifier="sentry-dbid-346532a1-8764-41a8-a73b-70b2679204b2")}catch{}})();const D={key:1},U=["src"],P=b({__name:"Billing",setup(a){const p=w().params.organizationId,{loading:f,result:r}=_(async()=>{const i=await v.get(p),u=await i.getUsageReportUrl();return{organization:i,reportUrl:u}});h(()=>{location.search.includes("upgrade")&&g.showNewMessage("I want to upgrade my plan")});const y=()=>g.showNewMessage("I want to upgrade my plan");return(i,u)=>e(f)?(n(),d(z,{key:0})):e(r)?(n(),k("div",D,[o(e(c),{justify:"space-between",align:"center"},{default:t(()=>[o(e(m),{level:3},{default:t(()=>[l("Current plan: "+I(e(r).organization.coalescedPlan),1)]),_:1}),o(e(x),{type:"primary",onClick:y},{default:t(()=>[l("Upgrade")]),_:1})]),_:1}),o(e(B),{style:{"margin-top":"0"}}),e(r).organization.hasUsageReport?(n(),d(e(c),{key:0,align:"center",justify:"center"},{default:t(()=>[N("iframe",{src:e(r).reportUrl,frameborder:"0",style:{width:"1000px",height:"1700px"}},null,8,U)]),_:1})):(n(),d(e(c),{key:1,align:"center",justify:"center"},{default:t(()=>[o(e(m),{level:4},{default:t(()=>[l("No usage report available")]),_:1})]),_:1}))])):C("",!0)}});export{P as default};
//# sourceMappingURL=Billing.30fe61f5.js.map
