import{a as g}from"./asyncComputed.8b3114fc.js";import{d as b,f1 as y,o as _,u as e,b as l,c as w,eV as x,f as a,w as o,cW as C,am as p,cY as h,bF as I,e as k,f4 as v}from"./outputWidgets.f4ce2475.js";import"./gateway.12ae1b79.js";import"./index.192d7ce9.js";import{O as B}from"./organization.956029a3.js";import{C as c}from"./router.c1f790da.js";import{L as D}from"./LoadingContainer.dc260109.js";import{A as N}from"./index.53025717.js";import{C as z}from"./Card.1c6c8319.js";import"./popupNotifcation.c07510ef.js";import"./record.024d7c78.js";import"./pubsub.0e98a66a.js";import"./Form.340be400.js";import"./hasIn.d56c31bb.js";import"./TabPane.775ce107.js";import"./PlusOutlined.cf52d035.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="44b2967b-0512-410d-b516-5a2ce30e7b0b",t._sentryDebugIdIdentifier="sentry-dbid-44b2967b-0512-410d-b516-5a2ce30e7b0b")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Q=b({__name:"Billing",setup(t){const r=y().params.organizationId,{loading:m,result:f}=g(()=>B.get(r));_(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const u=()=>c.showNewMessage("I want to upgrade my plan");return(V,j)=>e(m)?(l(),w(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:u},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[k("div",A,v((d=(i=(s=e(f))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Q as default};
//# sourceMappingURL=Billing.7ef5accd.js.map
