import{a as g}from"./asyncComputed.eac0df71.js";import{d as y,ea as _,W as w,u as e,o as l,c as b,X as x,b as a,w as o,d9 as C,aF as p,dd as h,bP as I,a as k,e9 as v}from"./vue-router.00a420cb.js";import"./gateway.3775a912.js";import{O as B}from"./organization.4c8ac5d3.js";import"./tables.95e1ed3a.js";import{C as f}from"./router.70041753.js";import{L as D}from"./LoadingContainer.5b237450.js";import{A as N}from"./index.2f9de8bf.js";import{C as z}from"./Card.ccc71f20.js";import"./popupNotifcation.6aec82b8.js";import"./record.149dcd57.js";import"./string.110ad283.js";import"./TabPane.c1aa8263.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="d04fde73-a404-4f4f-ad6e-29b86cf77139",t._sentryDebugIdIdentifier="sentry-dbid-d04fde73-a404-4f4f-ad6e-29b86cf77139")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},H=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:c,result:u}=g(()=>B.get(s));w(()=>{location.search.includes("upgrade")&&f.showNewMessage("I want to upgrade my plan")});const m=()=>f.showNewMessage("I want to upgrade my plan");return(V,j)=>e(c)?(l(),b(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(u))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{H as default};
//# sourceMappingURL=Billing.974f2841.js.map
