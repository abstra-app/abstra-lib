import{a as g}from"./asyncComputed.1796ada2.js";import{d as y,f1 as _,o as b,u as e,b as l,c as w,eV as x,f as a,w as o,cW as C,am as p,cY as h,bF as I,e as k,f4 as v}from"./outputWidgets.b2b061b0.js";import"./gateway.827416bd.js";import"./index.459499e2.js";import{O as B}from"./organization.4c564393.js";import{C as c}from"./router.7d33197f.js";import{L as D}from"./LoadingContainer.37ee70ce.js";import{A as N}from"./index.8c9a1ec3.js";import{C as z}from"./Card.96452527.js";import"./popupNotifcation.040778f0.js";import"./record.dda5b97a.js";import"./pubsub.e372caf5.js";import"./Form.23c83df3.js";import"./hasIn.88026ffe.js";import"./TabPane.411d2692.js";import"./PlusOutlined.cf52d035.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="c3ba5e6e-cce2-455a-9286-ab74566fea37",t._sentryDebugIdIdentifier="sentry-dbid-c3ba5e6e-cce2-455a-9286-ab74566fea37")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Q=y({__name:"Billing",setup(t){const r=_().params.organizationId,{loading:f,result:m}=g(()=>B.get(r));b(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const u=()=>c.showNewMessage("I want to upgrade my plan");return(V,j)=>e(f)?(l(),w(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:u},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[k("div",A,v((d=(i=(s=e(m))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Q as default};
//# sourceMappingURL=Billing.7b59a6a0.js.map
