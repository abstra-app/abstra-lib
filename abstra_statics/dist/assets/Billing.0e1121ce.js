import{a as g}from"./asyncComputed.cd8e83d5.js";import{d as y,eE as _,o as w,u as e,b as l,c as b,ew as x,f as a,w as o,as as p,bG as h,e as C,eH as I}from"./outputWidgets.e32c4de9.js";import{c}from"./router.d15ff954.js";import"./index.3e2bee12.js";import{O as k}from"./organization.7c3b6b9a.js";import{L as v}from"./LoadingContainer.fbe73b71.js";import{A}from"./Title.e20804f9.js";import{A as B}from"./index.66b88b11.js";import{A as D}from"./index.bede6a4d.js";import{C as N}from"./Card.729aeeb4.js";import"./Form.6e618181.js";import"./hasIn.e17bd528.js";import"./popupNotifcation.63897623.js";import"./record.f085fb76.js";import"./pubsub.574e50fa.js";import"./Base.583225bc.js";import"./TabPane.e82bc195.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="4b1767cc-c368-4e3f-8a57-c93d8d7f39b3",t._sentryDebugIdIdentifier="sentry-dbid-4b1767cc-c368-4e3f-8a57-c93d8d7f39b3")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Y=y({__name:"Billing",setup(t){const r=_().params.organizationId,{loading:f,result:m}=g(()=>k.get(r));w(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const u=()=>c.showNewMessage("I want to upgrade my plan");return(E,V)=>e(f)?(l(),b(v,{key:0})):(l(),x("div",z,[a(e(B),{justify:"space-between",align:"center"},{default:o(()=>[a(e(A),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(D),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(h),{onClick:u},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[C("div",M,I((d=(i=(s=e(m))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Y as default};
//# sourceMappingURL=Billing.0e1121ce.js.map
