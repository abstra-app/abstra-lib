import{a as g}from"./asyncComputed.35e3ceee.js";import{d as y,ed as _,W as b,u as e,c as w,X as x,b as a,w as o,o as l,d9 as C,aF as f,dd as h,bP as I,a as k,ec as v}from"./vue-router.d2fafc44.js";import"./gateway.1f85c5f8.js";import{O as B}from"./organization.43321c96.js";import"./tables.11125e4e.js";import{C as p}from"./router.89ae2d17.js";import{L as D}from"./LoadingContainer.fb66aa05.js";import{A as N}from"./index.a0bf7fa3.js";import{C as z}from"./Card.34c70ea8.js";import"./popupNotifcation.a8939995.js";import"./record.8c911041.js";import"./string.52e329ca.js";import"./TabPane.6b6bc960.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="f33ababf-3a6b-4929-9a4f-326996f3fd77",t._sentryDebugIdIdentifier="sentry-dbid-f33ababf-3a6b-4929-9a4f-326996f3fd77")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},H=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:c,result:u}=g(()=>B.get(s));b(()=>{location.search.includes("upgrade")&&p.showNewMessage("I want to upgrade my plan")});const m=()=>p.showNewMessage("I want to upgrade my plan");return(V,j)=>e(c)?(l(),w(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[f("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[f("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(u))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{H as default};
//# sourceMappingURL=Billing.e3054e47.js.map
