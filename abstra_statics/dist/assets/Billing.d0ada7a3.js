import{a as g}from"./asyncComputed.a39a60b3.js";import{d as y,eB as _,$ as b,u as e,o as l,c as w,eu as x,b as a,w as o,cS as C,as as c,cW as h,bH as I,a as k,eA as B}from"./vue-router.dce14796.js";import"./gateway.edc666ca.js";import"./index.af1b11ef.js";import{O as v}from"./organization.0396f67e.js";import{C as p}from"./router.8a06e4d3.js";import{L as D}from"./LoadingContainer.56c0dcdb.js";import{A as N}from"./index.2b30a68f.js";import{C as z}from"./Card.ddbdd8d1.js";import"./popupNotifcation.5f650680.js";import"./record.79fba6f7.js";import"./string.660527fc.js";import"./TabPane.c56be0ce.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="56bdfbe7-99af-43c6-9393-4ce52ddd7cc0",t._sentryDebugIdIdentifier="sentry-dbid-56bdfbe7-99af-43c6-9393-4ce52ddd7cc0")}catch{}})();const A={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},G=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:f,result:u}=g(()=>v.get(s));b(()=>{location.search.includes("upgrade")&&p.showNewMessage("I want to upgrade my plan")});const m=()=>p.showNewMessage("I want to upgrade my plan");return(V,j)=>e(f)?(l(),w(D,{key:0})):(l(),x("div",A,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[c("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[c("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",M,B((d=(i=(r=e(u))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{G as default};
//# sourceMappingURL=Billing.d0ada7a3.js.map
