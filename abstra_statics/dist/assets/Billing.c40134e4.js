import{a as _}from"./asyncComputed.33628809.js";import{d as w,ea as b,X as h,u as e,o as n,c as d,Y as k,b as o,w as t,S as C,df as f,aG as c,e9 as I,bT as x,dj as l,a as N}from"./index.0216c429.js";import"./gateway.db8727bc.js";import{a as v}from"./organization.07dfaf62.js";import"./tables.0e343e6b.js";import{C as m}from"./router.eadec577.js";import{L as z}from"./LoadingContainer.f3379448.js";import{A as B}from"./index.66661303.js";import"./popupNotifcation.d6296fd5.js";import"./record.b2bb49cb.js";import"./string.0fba9326.js";import"./Badge.6c51bcc1.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="ee687868-2c2d-4d6f-a938-c411bcda7123",a._sentryDebugIdIdentifier="sentry-dbid-ee687868-2c2d-4d6f-a938-c411bcda7123")}catch{}})();const D={key:1},U=["src"],P=w({__name:"Billing",setup(a){const p=b().params.organizationId,{loading:g,result:r}=_(async()=>{const i=await v.get(p),u=await i.getUsageReportUrl();return{organization:i,reportUrl:u}});h(()=>{location.search.includes("upgrade")&&m.showNewMessage("I want to upgrade my plan")});const y=()=>m.showNewMessage("I want to upgrade my plan");return(i,u)=>e(g)?(n(),d(z,{key:0})):e(r)?(n(),k("div",D,[o(e(l),{justify:"space-between",align:"center"},{default:t(()=>[o(e(f),{level:3},{default:t(()=>[c("Current plan: "+I(e(r).organization.coalescedPlan),1)]),_:1}),o(e(x),{type:"primary",onClick:y},{default:t(()=>[c("Upgrade")]),_:1})]),_:1}),o(e(B),{style:{"margin-top":"0"}}),e(r).organization.hasUsageReport?(n(),d(e(l),{key:0,align:"center",justify:"center"},{default:t(()=>[N("iframe",{src:e(r).reportUrl,frameborder:"0",style:{width:"1000px",height:"1700px"}},null,8,U)]),_:1})):(n(),d(e(l),{key:1,align:"center",justify:"center"},{default:t(()=>[o(e(f),{level:4},{default:t(()=>[c("No usage report available")]),_:1})]),_:1}))])):C("",!0)}});export{P as default};
//# sourceMappingURL=Billing.c40134e4.js.map
