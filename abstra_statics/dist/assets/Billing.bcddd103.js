import{a as g}from"./asyncComputed.b34ed11e.js";import{d as y,ed as _,W as w,u as e,c as b,X as x,b as a,w as o,o as l,d9 as C,aF as p,dd as h,bP as I,a as k,ec as v}from"./vue-router.761e79a7.js";import"./gateway.8391c675.js";import{O as B}from"./organization.e0338572.js";import"./tables.432c4f2b.js";import{C as c}from"./router.2bc27e21.js";import{L as D}from"./LoadingContainer.a9fc0f42.js";import{A as N}from"./index.d291e5cb.js";import{C as z}from"./Card.da6f4d03.js";import"./popupNotifcation.7a4abfdb.js";import"./record.8a2e184a.js";import"./string.27ddc80e.js";import"./TabPane.8cb895b8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="e000d55e-f47b-44fc-9308-3458a366d9aa",t._sentryDebugIdIdentifier="sentry-dbid-e000d55e-f47b-44fc-9308-3458a366d9aa")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},H=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:f,result:u}=g(()=>B.get(s));w(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const m=()=>c.showNewMessage("I want to upgrade my plan");return(V,j)=>e(f)?(l(),b(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(u))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{H as default};
//# sourceMappingURL=Billing.bcddd103.js.map
