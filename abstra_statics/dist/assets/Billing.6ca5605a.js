import{a as g}from"./asyncComputed.7b6feed1.js";import{d as y,ea as _,W as b,u as e,o as l,c as w,X as x,b as a,w as o,d9 as C,aF as p,dd as h,bP as I,a as k,e9 as v}from"./vue-router.0ff92f83.js";import"./gateway.ab891729.js";import{O as B}from"./organization.31d0f719.js";import"./tables.d76d2e42.js";import{C as f}from"./router.ab916e9e.js";import{L as D}from"./LoadingContainer.40b0e068.js";import{A as N}from"./index.eb4176db.js";import{C as z}from"./Card.23e081f7.js";import"./popupNotifcation.f331326a.js";import"./record.86bb9ec9.js";import"./string.f0b23ae7.js";import"./TabPane.a448f7ab.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="be9d6e8b-3f81-486f-a2fd-856110f1e13a",t._sentryDebugIdIdentifier="sentry-dbid-be9d6e8b-3f81-486f-a2fd-856110f1e13a")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},H=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:u,result:c}=g(()=>B.get(s));b(()=>{location.search.includes("upgrade")&&f.showNewMessage("I want to upgrade my plan")});const m=()=>f.showNewMessage("I want to upgrade my plan");return(V,j)=>e(u)?(l(),w(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(c))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{H as default};
//# sourceMappingURL=Billing.6ca5605a.js.map
