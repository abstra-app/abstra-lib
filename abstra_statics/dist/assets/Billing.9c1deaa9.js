import{a as g}from"./asyncComputed.dbecd2e7.js";import{d as y,eB as _,U as w,u as e,o as l,c as b,V as x,b as a,w as o,cW as C,aw as p,c_ as h,bL as I,a as k,eA as B}from"./vue-router.daf730b9.js";import"./gateway.faf99777.js";import"./tables.3c807115.js";import{O as v}from"./organization.d2ad63c6.js";import{C as c}from"./router.fad3973f.js";import{L as D}from"./LoadingContainer.1bc80200.js";import{A as N}from"./index.201af748.js";import{C as z}from"./Card.42c8e882.js";import"./popupNotifcation.6d7fce62.js";import"./record.4629e88e.js";import"./string.9547d5e6.js";import"./TabPane.0de314e4.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="fe149247-36f1-4d02-bdad-cc3e33436140",t._sentryDebugIdIdentifier="sentry-dbid-fe149247-36f1-4d02-bdad-cc3e33436140")}catch{}})();const A={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},J=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:f,result:u}=g(()=>v.get(s));w(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const m=()=>c.showNewMessage("I want to upgrade my plan");return(V,L)=>e(f)?(l(),b(D,{key:0})):(l(),x("div",A,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",M,B((d=(i=(r=e(u))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{J as default};
//# sourceMappingURL=Billing.9c1deaa9.js.map
