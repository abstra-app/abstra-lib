import{a as g}from"./asyncComputed.e4eff947.js";import{d as y,f1 as _,o as w,u as e,b as l,c as b,eV as x,f as a,w as o,cW as C,am as p,cY as h,bF as I,e as k,f4 as v}from"./outputWidgets.0b268a6e.js";import"./gateway.6b86361a.js";import"./index.dbc65bd8.js";import{O as B}from"./organization.13d76db8.js";import{C as c}from"./router.2e50c1be.js";import{L as D}from"./LoadingContainer.efeaebc7.js";import{A as N}from"./index.87787dc0.js";import{C as z}from"./Card.4eed68ea.js";import"./popupNotifcation.55abbcd7.js";import"./record.4789b40c.js";import"./pubsub.e4b461e5.js";import"./string.de46731c.js";import"./Form.be881a7e.js";import"./hasIn.838f176c.js";import"./TabPane.8b6a06f6.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="190183fd-34c3-4c66-a2f9-968e0ec3faea",t._sentryDebugIdIdentifier="sentry-dbid-190183fd-34c3-4c66-a2f9-968e0ec3faea")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Q=y({__name:"Billing",setup(t){const r=_().params.organizationId,{loading:f,result:m}=g(()=>B.get(r));w(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const u=()=>c.showNewMessage("I want to upgrade my plan");return(V,j)=>e(f)?(l(),b(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:u},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[k("div",A,v((d=(i=(s=e(m))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Q as default};
//# sourceMappingURL=Billing.d18b8a8a.js.map
