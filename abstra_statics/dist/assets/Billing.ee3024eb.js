import{a as g}from"./asyncComputed.a37ec0d2.js";import{d as b,eu as y,V as _,u as e,c as w,W as x,b as a,w as o,o as l,cY as C,ax as p,d0 as h,bL as I,a as k,et as v}from"./vue-router.a1ff9813.js";import"./gateway.6e80df2b.js";import{O as B}from"./organization.d04459bd.js";import"./tables.c2ddd052.js";import{C as c}from"./router.b514e917.js";import{L as D}from"./LoadingContainer.0c4b7b79.js";import{A as N}from"./index.fec58922.js";import{C as z}from"./Card.04c2bcf6.js";import"./popupNotifcation.0d55e073.js";import"./record.4f3de2c8.js";import"./string.b32002f9.js";import"./TabPane.b6f6963e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="7b39863c-46c4-4eb5-9d46-f3bd207bfe2b",t._sentryDebugIdIdentifier="sentry-dbid-7b39863c-46c4-4eb5-9d46-f3bd207bfe2b")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},H=b({__name:"Billing",setup(t){const s=y().params.organizationId,{loading:f,result:u}=g(()=>B.get(s));_(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const m=()=>c.showNewMessage("I want to upgrade my plan");return(V,L)=>e(f)?(l(),w(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(u))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{H as default};
//# sourceMappingURL=Billing.ee3024eb.js.map
