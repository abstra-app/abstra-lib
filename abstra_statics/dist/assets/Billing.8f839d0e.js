import{a as g}from"./asyncComputed.6cb33c8b.js";import{d as y,e7 as _,V as b,u as e,c as w,W as x,b as a,w as o,o as l,d5 as C,ax as p,d9 as h,bL as I,a as k,e6 as v}from"./vue-router.9bea9756.js";import"./gateway.04979491.js";import{O as B}from"./organization.d79696fd.js";import"./tables.81a0122a.js";import{C as c}from"./router.56432736.js";import{L as D}from"./LoadingContainer.04d3a837.js";import{A as N}from"./index.54e2081e.js";import{C as z}from"./Card.db192656.js";import"./popupNotifcation.28415eda.js";import"./record.cf4d6e3a.js";import"./string.f8bd0ec2.js";import"./TabPane.1905f1ea.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="cf08b5d0-e9f7-455a-bc2e-46a1cae4103f",t._sentryDebugIdIdentifier="sentry-dbid-cf08b5d0-e9f7-455a-bc2e-46a1cae4103f")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},J=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:f,result:u}=g(()=>B.get(s));b(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const m=()=>c.showNewMessage("I want to upgrade my plan");return(V,L)=>e(f)?(l(),w(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(u))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{J as default};
//# sourceMappingURL=Billing.8f839d0e.js.map
