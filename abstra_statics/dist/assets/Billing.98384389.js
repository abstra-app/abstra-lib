import{a as g}from"./asyncComputed.8c05b0fd.js";import{d as y,ed as _,W as w,u as e,c as b,X as x,b as a,w as o,o as l,db as C,aF as c,df as h,bS as I,a as k,ec as v}from"./vue-router.42f25760.js";import"./gateway.61abf68a.js";import{O as B}from"./organization.0029199d.js";import"./tables.cb0bdb42.js";import{C as p}from"./router.8ad2d6c6.js";import{L as D}from"./LoadingContainer.07ee3bf3.js";import{A as N}from"./index.7998aa12.js";import{C as z}from"./Card.610c7ea6.js";import"./popupNotifcation.5a87a1e8.js";import"./record.4cefbbf0.js";import"./string.10c922b1.js";import"./TabPane.6a35c312.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="472431ae-c057-4eda-988c-c0a79889fa31",t._sentryDebugIdIdentifier="sentry-dbid-472431ae-c057-4eda-988c-c0a79889fa31")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},H=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:f,result:u}=g(()=>B.get(s));w(()=>{location.search.includes("upgrade")&&p.showNewMessage("I want to upgrade my plan")});const m=()=>p.showNewMessage("I want to upgrade my plan");return(V,j)=>e(f)?(l(),b(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[c("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[c("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(u))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{H as default};
//# sourceMappingURL=Billing.98384389.js.map
