import{a as g}from"./asyncComputed.893821fe.js";import{d as y,eE as _,o as w,u as e,b as l,c as b,ew as x,f as a,w as o,as as p,bG as h,e as C,eH as I}from"./outputWidgets.47d6865e.js";import{c}from"./router.784734e5.js";import"./index.d25d4ee0.js";import{O as k}from"./organization.ef1366ef.js";import{L as v}from"./LoadingContainer.8d2c1a6f.js";import{A}from"./Title.4d84784a.js";import{A as B}from"./index.330caafe.js";import{A as D}from"./index.91f86ebb.js";import{C as N}from"./Card.25fc3944.js";import"./Form.fadc3724.js";import"./hasIn.e9344704.js";import"./popupNotifcation.685b365e.js";import"./record.ab298d17.js";import"./pubsub.0a5fa8dc.js";import"./Base.fbda1545.js";import"./TabPane.ef9d004d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="caf96484-8e84-4f97-aec3-bcb3f25d588e",t._sentryDebugIdIdentifier="sentry-dbid-caf96484-8e84-4f97-aec3-bcb3f25d588e")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Y=y({__name:"Billing",setup(t){const r=_().params.organizationId,{loading:f,result:m}=g(()=>k.get(r));w(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const u=()=>c.showNewMessage("I want to upgrade my plan");return(E,V)=>e(f)?(l(),b(v,{key:0})):(l(),x("div",z,[a(e(B),{justify:"space-between",align:"center"},{default:o(()=>[a(e(A),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(D),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(h),{onClick:u},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[C("div",M,I((d=(i=(s=e(m))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Y as default};
//# sourceMappingURL=Billing.a8058e84.js.map
