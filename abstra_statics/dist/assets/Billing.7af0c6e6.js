import{a as g}from"./asyncComputed.c369b686.js";import{d as y,eB as _,V as w,u as e,o as l,c as b,W as x,b as a,w as o,cW as C,ax as c,c_ as h,bL as I,a as k,eA as B}from"./vue-router.f8901e1e.js";import"./gateway.0898aced.js";import"./tables.38f4f59f.js";import{O as v}from"./organization.118b07f2.js";import{C as p}from"./router.2467d248.js";import{L as D}from"./LoadingContainer.91eadabd.js";import{A as N}from"./index.1a6dab1c.js";import{C as z}from"./Card.a0cbacc7.js";import"./popupNotifcation.ac390496.js";import"./record.6cd96cad.js";import"./string.0194620b.js";import"./TabPane.776d4680.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="01233121-e0db-49e8-98a8-76fa07cc96dc",t._sentryDebugIdIdentifier="sentry-dbid-01233121-e0db-49e8-98a8-76fa07cc96dc")}catch{}})();const A={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},J=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:u,result:f}=g(()=>v.get(s));w(()=>{location.search.includes("upgrade")&&p.showNewMessage("I want to upgrade my plan")});const m=()=>p.showNewMessage("I want to upgrade my plan");return(V,L)=>e(u)?(l(),b(D,{key:0})):(l(),x("div",A,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[c("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[c("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",M,B((d=(i=(r=e(f))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{J as default};
//# sourceMappingURL=Billing.7af0c6e6.js.map
