import{a as g}from"./asyncComputed.2eacb78b.js";import{d as y,eB as _,V as w,u as e,c as b,W as x,b as a,w as o,o as l,cW as C,ax as c,c_ as h,bL as I,a as k,eA as B}from"./vue-router.39119ee1.js";import"./gateway.ff01358a.js";import"./tables.6fba3e0e.js";import{O as v}from"./organization.2a0fc09f.js";import{C as p}from"./router.8bbf8e9d.js";import{L as D}from"./LoadingContainer.160b499f.js";import{A as N}from"./index.0a584cb4.js";import{C as z}from"./Card.f337639b.js";import"./popupNotifcation.9cf3cb38.js";import"./record.8f8cf34d.js";import"./string.e3206d26.js";import"./TabPane.cb9d4932.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="dacd61cb-c563-44e9-9764-20c9f56ed644",t._sentryDebugIdIdentifier="sentry-dbid-dacd61cb-c563-44e9-9764-20c9f56ed644")}catch{}})();const A={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},J=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:u,result:f}=g(()=>v.get(s));w(()=>{location.search.includes("upgrade")&&p.showNewMessage("I want to upgrade my plan")});const m=()=>p.showNewMessage("I want to upgrade my plan");return(V,L)=>e(u)?(l(),b(D,{key:0})):(l(),x("div",A,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[c("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[c("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",M,B((d=(i=(r=e(f))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{J as default};
//# sourceMappingURL=Billing.f872ca48.js.map
