import{a as g}from"./asyncComputed.4e9770a4.js";import{d as y,eG as _,o as w,u as e,b as l,c as b,ey as x,f as a,w as o,au as p,bI as I,e as h,eJ as C}from"./outputWidgets.8e22ccc1.js";import{c as f}from"./router.6fc18345.js";import"./index.78ff3a25.js";import{O as k}from"./organization.98a8abac.js";import{L as v}from"./LoadingContainer.eef50bf4.js";import{A}from"./Title.175055e6.js";import{A as B}from"./index.72c2e68b.js";import{A as D}from"./index.8637e771.js";import{C as N}from"./Card.4c500cec.js";import"./Form.b2ba4809.js";import"./hasIn.dcbed61a.js";import"./popupNotifcation.a4eabbc5.js";import"./record.ec7658ae.js";import"./pubsub.74b3d4ce.js";import"./Base.4843c88f.js";import"./TabPane.f72ad8d4.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="96523382-5fa3-4557-ad3f-1d2c11b4d025",t._sentryDebugIdIdentifier="sentry-dbid-96523382-5fa3-4557-ad3f-1d2c11b4d025")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Y=y({__name:"Billing",setup(t){const r=_().params.organizationId,{loading:m,result:c}=g(()=>k.get(r));w(()=>{location.search.includes("upgrade")&&f.showNewMessage("I want to upgrade my plan")});const u=()=>f.showNewMessage("I want to upgrade my plan");return(V,j)=>e(m)?(l(),b(v,{key:0})):(l(),x("div",z,[a(e(B),{justify:"space-between",align:"center"},{default:o(()=>[a(e(A),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(D),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:u},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[h("div",M,C((d=(i=(s=e(c))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Y as default};
//# sourceMappingURL=Billing.841d99f7.js.map
