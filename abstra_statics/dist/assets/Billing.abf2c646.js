import{a as g}from"./asyncComputed.9fb20d20.js";import{d as y,eE as _,o as b,u as e,b as l,c as w,ew as x,f as a,w as o,as as p,bG as h,e as C,eH as I}from"./outputWidgets.931faf2f.js";import{c}from"./router.26667651.js";import"./index.77515dfc.js";import{O as k}from"./organization.60895bdc.js";import{L as v}from"./LoadingContainer.e93a09d4.js";import{A}from"./Title.3fb3b02a.js";import{A as B}from"./index.d7ad9072.js";import{A as D}from"./index.15f89fb0.js";import{C as N}from"./Card.63605602.js";import"./Form.291b3028.js";import"./hasIn.b28c97a7.js";import"./popupNotifcation.04b31675.js";import"./record.4df6a389.js";import"./pubsub.b629d308.js";import"./Base.e5a5c027.js";import"./TabPane.cc359a69.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="98e82300-21b6-45bd-8bc9-dd6eadd12ec2",t._sentryDebugIdIdentifier="sentry-dbid-98e82300-21b6-45bd-8bc9-dd6eadd12ec2")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Y=y({__name:"Billing",setup(t){const r=_().params.organizationId,{loading:m,result:f}=g(()=>k.get(r));b(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const u=()=>c.showNewMessage("I want to upgrade my plan");return(E,V)=>e(m)?(l(),w(v,{key:0})):(l(),x("div",z,[a(e(B),{justify:"space-between",align:"center"},{default:o(()=>[a(e(A),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(D),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(h),{onClick:u},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[C("div",M,I((d=(i=(s=e(f))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Y as default};
//# sourceMappingURL=Billing.abf2c646.js.map
