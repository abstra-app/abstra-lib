import{a as _}from"./asyncComputed.85a8b0a8.js";import{d as b,ea as w,X as h,u as e,o as n,c as d,Y as k,b as o,w as t,S as C,dd as f,aG as l,e9 as I,bT as x,dh as c,a as N}from"./index.89aec283.js";import"./gateway.347a562b.js";import{O as v}from"./organization.d591d07c.js";import"./tables.fa63f650.js";import{C as g}from"./router.78f1f14e.js";import{L as z}from"./LoadingContainer.7ccc0d74.js";import{A as B}from"./index.85fe1c32.js";import"./popupNotifcation.0f4eead0.js";import"./record.6bce3d09.js";import"./string.75d4da26.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="d87f8be2-b268-4f85-88ac-b577eef4cdd0",a._sentryDebugIdIdentifier="sentry-dbid-d87f8be2-b268-4f85-88ac-b577eef4cdd0")}catch{}})();const D={key:1},U=["src"],G=b({__name:"Billing",setup(a){const p=w().params.organizationId,{loading:m,result:r}=_(async()=>{const i=await v.get(p),u=await i.getUsageReportUrl();return{organization:i,reportUrl:u}});h(()=>{location.search.includes("upgrade")&&g.showNewMessage("I want to upgrade my plan")});const y=()=>g.showNewMessage("I want to upgrade my plan");return(i,u)=>e(m)?(n(),d(z,{key:0})):e(r)?(n(),k("div",D,[o(e(c),{justify:"space-between",align:"center"},{default:t(()=>[o(e(f),{level:3},{default:t(()=>[l("Current plan: "+I(e(r).organization.coalescedPlan),1)]),_:1}),o(e(x),{type:"primary",onClick:y},{default:t(()=>[l("Upgrade")]),_:1})]),_:1}),o(e(B),{style:{"margin-top":"0"}}),e(r).organization.hasUsageReport?(n(),d(e(c),{key:0,align:"center",justify:"center"},{default:t(()=>[N("iframe",{src:e(r).reportUrl,frameborder:"0",style:{width:"1000px",height:"1700px"}},null,8,U)]),_:1})):(n(),d(e(c),{key:1,align:"center",justify:"center"},{default:t(()=>[o(e(f),{level:4},{default:t(()=>[l("No usage report available")]),_:1})]),_:1}))])):C("",!0)}});export{G as default};
//# sourceMappingURL=Billing.6f4f8a28.js.map
