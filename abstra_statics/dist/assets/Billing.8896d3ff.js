import{a as g}from"./asyncComputed.a619212b.js";import{d as y,eD as _,o as b,u as e,b as l,c as w,ev as x,f as a,w as o,ar as p,bF as h,e as C,eG as I}from"./outputWidgets.be3472c2.js";import{c as m}from"./router.87bf43b6.js";import"./index.86288308.js";import{O as k}from"./organization.4839103b.js";import{L as v}from"./LoadingContainer.83bf440d.js";import{A as D}from"./Title.65752aa0.js";import{A}from"./index.ba676107.js";import{A as B}from"./index.557c5800.js";import{C as N}from"./Card.1ee02828.js";import"./Form.254a7379.js";import"./hasIn.bddd0a1a.js";import"./popupNotifcation.9025cc7b.js";import"./record.820df198.js";import"./pubsub.1063a0da.js";import"./Text.c9febe27.js";import"./TabPane.3d3ce947.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="600f353b-798e-4924-8852-e46cbdeabd32",t._sentryDebugIdIdentifier="sentry-dbid-600f353b-798e-4924-8852-e46cbdeabd32")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Y=y({__name:"Billing",setup(t){const r=_().params.organizationId,{loading:c,result:f}=g(()=>k.get(r));b(()=>{location.search.includes("upgrade")&&m.showNewMessage("I want to upgrade my plan")});const u=()=>m.showNewMessage("I want to upgrade my plan");return(V,j)=>e(c)?(l(),w(v,{key:0})):(l(),x("div",z,[a(e(A),{justify:"space-between",align:"center"},{default:o(()=>[a(e(D),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(B),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(h),{onClick:u},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[C("div",M,I((d=(i=(s=e(f))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Y as default};
//# sourceMappingURL=Billing.8896d3ff.js.map
