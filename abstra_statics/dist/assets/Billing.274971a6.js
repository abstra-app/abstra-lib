import{a as g}from"./asyncComputed.295e9e03.js";import{d as y,ed as _,W as b,u as e,c as w,X as x,b as a,w as o,o as l,db as C,aF as c,df as h,bS as I,a as k,ec as v}from"./vue-router.3fd92176.js";import"./gateway.c564a1cf.js";import{O as B}from"./organization.ed97e5a8.js";import"./tables.3aa20dd6.js";import{C as p}from"./router.59916c0d.js";import{L as D}from"./LoadingContainer.cc61e2fd.js";import{A as N}from"./index.c6ce1c1c.js";import{C as z}from"./Card.0ce127d8.js";import"./popupNotifcation.0e86d6a8.js";import"./record.cbb43e89.js";import"./string.e75a34fd.js";import"./TabPane.d0ca7ad5.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="b8051050-45d5-4f1b-94c6-cdf3eec5c8a8",t._sentryDebugIdIdentifier="sentry-dbid-b8051050-45d5-4f1b-94c6-cdf3eec5c8a8")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},H=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:f,result:u}=g(()=>B.get(s));b(()=>{location.search.includes("upgrade")&&p.showNewMessage("I want to upgrade my plan")});const m=()=>p.showNewMessage("I want to upgrade my plan");return(V,j)=>e(f)?(l(),w(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[c("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[c("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(u))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{H as default};
//# sourceMappingURL=Billing.274971a6.js.map
