import{a as g}from"./asyncComputed.82af4517.js";import{d as y,f1 as _,o as w,u as e,b as l,c as b,eV as x,f as a,w as o,cW as C,am as p,cY as h,bF as I,e as k,f4 as v}from"./outputWidgets.44b55c7f.js";import"./gateway.f1304cdc.js";import"./index.028ba5ff.js";import{O as B}from"./organization.470e43c2.js";import{C as f}from"./router.368c0fd8.js";import{L as D}from"./LoadingContainer.97f44595.js";import{A as N}from"./index.65e97155.js";import{C as z}from"./Card.0a55556b.js";import"./popupNotifcation.9205945d.js";import"./record.d3cb60ef.js";import"./pubsub.e2a3385c.js";import"./string.45b5b27f.js";import"./Form.abcdc758.js";import"./hasIn.c6107848.js";import"./TabPane.9205c076.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="cf9f5f2c-0147-4d88-aa73-3158967d5403",t._sentryDebugIdIdentifier="sentry-dbid-cf9f5f2c-0147-4d88-aa73-3158967d5403")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Q=y({__name:"Billing",setup(t){const r=_().params.organizationId,{loading:c,result:m}=g(()=>B.get(r));w(()=>{location.search.includes("upgrade")&&f.showNewMessage("I want to upgrade my plan")});const u=()=>f.showNewMessage("I want to upgrade my plan");return(V,j)=>e(c)?(l(),b(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:u},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[k("div",A,v((d=(i=(s=e(m))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Q as default};
//# sourceMappingURL=Billing.213672d1.js.map
