import{a as g}from"./asyncComputed.d184fa69.js";import{d as y,ed as _,W as w,u as e,c as b,X as x,b as a,w as o,o as c,db as C,aF as l,df as h,bS as I,a as k,ec as v}from"./vue-router.fa96a4f6.js";import"./gateway.a3e19a5c.js";import{O as B}from"./organization.36b01f46.js";import"./tables.c916f0ce.js";import{C as p}from"./router.ef9c3997.js";import{L as D}from"./LoadingContainer.c7a9c58f.js";import{A as N}from"./index.810d1d89.js";import{C as z}from"./Card.75d8a5df.js";import"./popupNotifcation.cd5b0db0.js";import"./record.3b33e8c1.js";import"./string.c12642fa.js";import"./TabPane.c260bd07.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="49af144c-c7be-45ec-a429-61a14fc6cf6d",t._sentryDebugIdIdentifier="sentry-dbid-49af144c-c7be-45ec-a429-61a14fc6cf6d")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},H=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:f,result:u}=g(()=>B.get(s));w(()=>{location.search.includes("upgrade")&&p.showNewMessage("I want to upgrade my plan")});const m=()=>p.showNewMessage("I want to upgrade my plan");return(V,j)=>e(f)?(c(),b(D,{key:0})):(c(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[l("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[l("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(u))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{H as default};
//# sourceMappingURL=Billing.4e1427d8.js.map
