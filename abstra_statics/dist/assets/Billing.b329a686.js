import{a as g}from"./asyncComputed.ea730548.js";import{d as y,f1 as _,o as w,u as e,b as l,c as b,eV as x,f as a,w as o,cW as C,am as p,cY as h,bF as I,e as k,f4 as v}from"./outputWidgets.049ac64d.js";import"./gateway.c0f62b43.js";import"./index.060492c3.js";import{O as B}from"./organization.c50cb839.js";import{C as f}from"./router.2632e2a3.js";import{L as D}from"./LoadingContainer.17a55082.js";import{A as N}from"./index.eef1a417.js";import{C as z}from"./Card.6629bb68.js";import"./popupNotifcation.836c9a92.js";import"./record.5a9ec5fd.js";import"./pubsub.0c3367ed.js";import"./string.3fb102a6.js";import"./Form.8d97bd19.js";import"./hasIn.8c8d3925.js";import"./TabPane.223e6cb6.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="475a90dd-9bfe-4de9-8721-717f5f81dcec",t._sentryDebugIdIdentifier="sentry-dbid-475a90dd-9bfe-4de9-8721-717f5f81dcec")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Q=y({__name:"Billing",setup(t){const r=_().params.organizationId,{loading:c,result:m}=g(()=>B.get(r));w(()=>{location.search.includes("upgrade")&&f.showNewMessage("I want to upgrade my plan")});const u=()=>f.showNewMessage("I want to upgrade my plan");return(V,j)=>e(c)?(l(),b(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:u},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[k("div",A,v((d=(i=(s=e(m))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Q as default};
//# sourceMappingURL=Billing.b329a686.js.map
