import{a as g}from"./asyncComputed.e2c555db.js";import{d as y,ed as _,W as b,u as e,c as w,X as x,b as a,w as o,o as l,db as C,aF as c,df as h,bS as I,a as k,ec as v}from"./vue-router.a96f3cd6.js";import"./gateway.d361602f.js";import{O as B}from"./organization.b6401119.js";import"./tables.4e9dd64d.js";import{C as p}from"./router.5e37e67a.js";import{L as D}from"./LoadingContainer.7433b5fe.js";import{A as N}from"./index.7e9d31c3.js";import{C as z}from"./Card.9a6e01b7.js";import"./popupNotifcation.260f7cbd.js";import"./record.c82cebd7.js";import"./string.19323c61.js";import"./TabPane.c06061b9.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="5a43615f-3923-459f-bc82-cfc766bd1463",t._sentryDebugIdIdentifier="sentry-dbid-5a43615f-3923-459f-bc82-cfc766bd1463")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},H=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:f,result:u}=g(()=>B.get(s));b(()=>{location.search.includes("upgrade")&&p.showNewMessage("I want to upgrade my plan")});const m=()=>p.showNewMessage("I want to upgrade my plan");return(V,j)=>e(f)?(l(),w(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[c("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[c("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(u))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{H as default};
//# sourceMappingURL=Billing.70feb1ba.js.map
