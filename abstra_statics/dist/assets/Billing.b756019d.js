import{a as g}from"./asyncComputed.80b8543d.js";import{d as y,eC as _,o as b,u as e,b as p,c as w,eu as x,f as a,w as o,aq as l,bE as C,e as h,eF as I}from"./outputWidgets.91aca867.js";import{c as m}from"./router.32c00038.js";import"./index.c8c05573.js";import{O as k}from"./organization.907a0d13.js";import{L as v}from"./LoadingContainer.bfd49374.js";import{A}from"./Title.41f0d9c2.js";import{A as B}from"./index.84324f75.js";import{A as D}from"./index.52968246.js";import{C as N}from"./Card.2a112445.js";import"./Form.b05efde0.js";import"./hasIn.08cb52ef.js";import"./popupNotifcation.e29a3949.js";import"./index.cf4c23b9.js";import"./record.7dd868d1.js";import"./pubsub.2f955133.js";import"./Text.d00fec7b.js";import"./index.0a71b950.js";import"./TabPane.ab2cb2ae.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="db96186b-2441-49a2-a78e-7381aa0bd1ab",t._sentryDebugIdIdentifier="sentry-dbid-db96186b-2441-49a2-a78e-7381aa0bd1ab")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},$=y({__name:"Billing",setup(t){const n=_().params.organizationId,{loading:u,result:c}=g(()=>k.get(n));b(()=>{location.search.includes("upgrade")&&m.showNewMessage("I want to upgrade my plan")});const f=()=>m.showNewMessage("I want to upgrade my plan");return(E,V)=>e(u)?(p(),w(v,{key:0})):(p(),x("div",z,[a(e(B),{justify:"space-between",align:"center"},{default:o(()=>[a(e(A),{level:3},{default:o(()=>[l("Current plan")]),_:1})]),_:1}),a(e(D),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(C),{onClick:f},{default:o(()=>[l("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[h("div",M,I((d=(i=(s=e(c))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{$ as default};
//# sourceMappingURL=Billing.b756019d.js.map
