import{a as g}from"./asyncComputed.0ee8ab90.js";import{d as y,eu as _,V as w,u as e,c as b,W as x,b as a,w as o,o as l,cY as C,ax as p,d0 as h,bL as I,a as k,et as v}from"./vue-router.0a37159f.js";import"./gateway.2c6bb6c4.js";import{O as B}from"./organization.968dd3a1.js";import"./tables.5e1e4886.js";import{C as c}from"./router.7ff5eb94.js";import{L as D}from"./LoadingContainer.f29114da.js";import{A as N}from"./index.1de43d88.js";import{C as z}from"./Card.dc376434.js";import"./popupNotifcation.07715bee.js";import"./record.8f21fa0c.js";import"./string.d4209ce8.js";import"./TabPane.6c7c11ae.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="c92689ca-917f-4083-9818-3a4d303981b6",t._sentryDebugIdIdentifier="sentry-dbid-c92689ca-917f-4083-9818-3a4d303981b6")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},H=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:u,result:f}=g(()=>B.get(s));w(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const m=()=>c.showNewMessage("I want to upgrade my plan");return(V,L)=>e(u)?(l(),b(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(f))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{H as default};
//# sourceMappingURL=Billing.7bc35183.js.map
