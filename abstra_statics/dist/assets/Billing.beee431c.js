import{a as g}from"./asyncComputed.7c13c2c2.js";import{d as y,eE as _,o as w,u as e,b as l,c as b,ew as x,f as a,w as o,as as p,bG as h,e as C,eH as I}from"./outputWidgets.b460b27c.js";import{c as m}from"./router.66cf7dbd.js";import"./index.230bae6d.js";import{O as k}from"./organization.19131e93.js";import{L as v}from"./LoadingContainer.00184384.js";import{A}from"./Title.46666ddb.js";import{A as B}from"./index.4261d356.js";import{A as D}from"./index.bc1c3e78.js";import{C as N}from"./Card.948fb848.js";import"./Form.1bc9c568.js";import"./hasIn.a06a052e.js";import"./popupNotifcation.5de75775.js";import"./record.c2a55d2e.js";import"./pubsub.5aadead0.js";import"./Base.1449a7be.js";import"./TabPane.77acbc61.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="d9f25327-b3ee-4a0e-bde8-102e030e1657",t._sentryDebugIdIdentifier="sentry-dbid-d9f25327-b3ee-4a0e-bde8-102e030e1657")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Y=y({__name:"Billing",setup(t){const r=_().params.organizationId,{loading:f,result:c}=g(()=>k.get(r));w(()=>{location.search.includes("upgrade")&&m.showNewMessage("I want to upgrade my plan")});const u=()=>m.showNewMessage("I want to upgrade my plan");return(E,V)=>e(f)?(l(),b(v,{key:0})):(l(),x("div",z,[a(e(B),{justify:"space-between",align:"center"},{default:o(()=>[a(e(A),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(D),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(h),{onClick:u},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[C("div",M,I((d=(i=(s=e(c))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Y as default};
//# sourceMappingURL=Billing.beee431c.js.map
