import{a as g}from"./asyncComputed.59056117.js";import{d as y,eB as _,V as w,u as e,c as b,W as x,b as a,w as o,o as l,cW as C,ax as p,c_ as h,bL as I,a as k,eA as B}from"./vue-router.70e693dc.js";import"./gateway.90873574.js";import"./tables.f3742496.js";import{O as v}from"./organization.25d15c38.js";import{C as c}from"./router.84750da7.js";import{L as D}from"./LoadingContainer.b8669125.js";import{A as N}from"./index.51b0e265.js";import{C as z}from"./Card.6fc340eb.js";import"./popupNotifcation.f60dcc22.js";import"./record.4a1b1905.js";import"./string.441534de.js";import"./TabPane.08fb23c0.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="71ec18d4-dbe1-496d-8d43-2f7e9111a749",t._sentryDebugIdIdentifier="sentry-dbid-71ec18d4-dbe1-496d-8d43-2f7e9111a749")}catch{}})();const A={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},J=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:u,result:f}=g(()=>v.get(s));w(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const m=()=>c.showNewMessage("I want to upgrade my plan");return(V,L)=>e(u)?(l(),b(D,{key:0})):(l(),x("div",A,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",M,B((d=(i=(r=e(f))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{J as default};
//# sourceMappingURL=Billing.552e9521.js.map
