import{a as g}from"./asyncComputed.502b15d1.js";import{d as y,eE as _,o as b,u as e,b as l,c as w,ew as x,f as a,w as o,as as p,bG as h,e as C,eH as I}from"./outputWidgets.80b79706.js";import{c as m}from"./router.15937dc6.js";import"./index.7591416f.js";import{O as k}from"./organization.045ed0ac.js";import{L as v}from"./LoadingContainer.1c7ed8c8.js";import{A}from"./Title.200af3e3.js";import{A as B}from"./index.24eb61c7.js";import{A as D}from"./index.f2c97bc1.js";import{C as N}from"./Card.3c494827.js";import"./Form.e988a87f.js";import"./hasIn.ea2613ea.js";import"./popupNotifcation.a2a58f34.js";import"./record.63b4046d.js";import"./pubsub.20266ef8.js";import"./Base.45aa22e8.js";import"./TabPane.b0d00ed3.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="76e65505-9103-4236-a11a-bf4b38b6c1d9",t._sentryDebugIdIdentifier="sentry-dbid-76e65505-9103-4236-a11a-bf4b38b6c1d9")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Y=y({__name:"Billing",setup(t){const r=_().params.organizationId,{loading:c,result:f}=g(()=>k.get(r));b(()=>{location.search.includes("upgrade")&&m.showNewMessage("I want to upgrade my plan")});const u=()=>m.showNewMessage("I want to upgrade my plan");return(E,V)=>e(c)?(l(),w(v,{key:0})):(l(),x("div",z,[a(e(B),{justify:"space-between",align:"center"},{default:o(()=>[a(e(A),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(D),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(h),{onClick:u},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[C("div",M,I((d=(i=(s=e(f))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Y as default};
//# sourceMappingURL=Billing.e4041cee.js.map
