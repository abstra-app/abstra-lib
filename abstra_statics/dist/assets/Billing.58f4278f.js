import{a as g}from"./asyncComputed.a247f7ca.js";import{d as y,ea as _,W as b,u as e,o as l,c as w,X as x,b as a,w as o,d9 as C,aF as p,dd as h,bP as I,a as k,e9 as v}from"./vue-router.3768b992.js";import"./gateway.462076e6.js";import{O as B}from"./organization.2e959270.js";import"./tables.90afbb2a.js";import{C as u}from"./router.51be7747.js";import{L as D}from"./LoadingContainer.235d23d4.js";import{A as N}from"./index.d7b77d13.js";import{C as z}from"./Card.1e67cbfe.js";import"./popupNotifcation.bdafa9de.js";import"./record.51783f01.js";import"./string.8a7fd0be.js";import"./TabPane.e09bd7ce.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="3a836868-274d-4596-978b-2b6fd0225db8",t._sentryDebugIdIdentifier="sentry-dbid-3a836868-274d-4596-978b-2b6fd0225db8")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},H=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:c,result:f}=g(()=>B.get(s));b(()=>{location.search.includes("upgrade")&&u.showNewMessage("I want to upgrade my plan")});const m=()=>u.showNewMessage("I want to upgrade my plan");return(V,j)=>e(c)?(l(),w(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(f))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{H as default};
//# sourceMappingURL=Billing.58f4278f.js.map
