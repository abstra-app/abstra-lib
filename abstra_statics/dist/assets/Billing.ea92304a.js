import{a as g}from"./asyncComputed.cef7b9d8.js";import{d as y,ed as _,W as b,u as e,c as w,X as x,b as a,w as o,o as l,d9 as C,aF as p,dd as h,bP as I,a as k,ec as v}from"./vue-router.85c27f05.js";import"./gateway.aa5a907a.js";import{O as B}from"./organization.09284c47.js";import"./tables.8aae1278.js";import{C as c}from"./router.6a11826f.js";import{L as D}from"./LoadingContainer.6b16356d.js";import{A as N}from"./index.15bd2207.js";import{C as z}from"./Card.f2bc8e5f.js";import"./popupNotifcation.db970277.js";import"./record.b6b15302.js";import"./string.76b61cc9.js";import"./TabPane.576c0d24.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="f61c14b7-11ed-4724-8413-97ca14b6215d",t._sentryDebugIdIdentifier="sentry-dbid-f61c14b7-11ed-4724-8413-97ca14b6215d")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},H=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:u,result:f}=g(()=>B.get(s));b(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const m=()=>c.showNewMessage("I want to upgrade my plan");return(V,j)=>e(u)?(l(),w(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(f))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{H as default};
//# sourceMappingURL=Billing.ea92304a.js.map
