import{a as g}from"./asyncComputed.95993e52.js";import{d as y,eB as _,V as w,u as e,c as b,W as x,b as a,w as o,o as c,cW as C,ax as l,c_ as h,bL as I,a as k,eA as B}from"./vue-router.78d58ff0.js";import"./gateway.3d93841d.js";import"./tables.aed54935.js";import{O as v}from"./organization.0a3e2485.js";import{C as p}from"./router.ce687edb.js";import{L as D}from"./LoadingContainer.d5b2184d.js";import{A as N}from"./index.6af03e92.js";import{C as z}from"./Card.e6564a3e.js";import"./popupNotifcation.466d80c0.js";import"./record.6c05e3f5.js";import"./string.b574f1fa.js";import"./TabPane.e15de9cc.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="d73b5568-4772-42e0-9dcc-c0c7c0fe53ef",t._sentryDebugIdIdentifier="sentry-dbid-d73b5568-4772-42e0-9dcc-c0c7c0fe53ef")}catch{}})();const A={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},J=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:f,result:u}=g(()=>v.get(s));w(()=>{location.search.includes("upgrade")&&p.showNewMessage("I want to upgrade my plan")});const m=()=>p.showNewMessage("I want to upgrade my plan");return(V,L)=>e(f)?(c(),b(D,{key:0})):(c(),x("div",A,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[l("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[l("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",M,B((d=(i=(r=e(u))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{J as default};
//# sourceMappingURL=Billing.8a6c7c0f.js.map
