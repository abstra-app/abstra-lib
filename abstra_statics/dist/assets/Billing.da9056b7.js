import{d as m,eB as c,u as e,b as d,c as u,ev as y,f as a,w as o,bg as _,aq as p,ex as g,e as b,eD as x}from"./outputWidgets.43a10844.js";import"./authorManager.c51bb24c.js";import"./index.05bcfc39.js";import{O as w}from"./organization.5fda6e99.js";import{a as k}from"./asyncComputed.a8de6d19.js";import{a as B}from"./Title.9aa21771.js";import{A as h}from"./index.61081c5e.js";import{A}from"./index.fa7907db.js";import{A as C}from"./Text.3354e3aa.js";import{C as D}from"./Card.200cb39b.js";import"./index.cf4c23b9.js";import"./record.7e194615.js";import"./pubsub.3150c359.js";import"./index.790f5ef1.js";import"./TabPane.8685fab4.js";import"./hasIn.a0c37d44.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="a2462009-463b-46b5-aba7-ae0f3aade0b9",t._sentryDebugIdIdentifier="sentry-dbid-a2462009-463b-46b5-aba7-ae0f3aade0b9")}catch{}})();const I={key:1},v={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},L=m({__name:"Billing",setup(t){const n=c().params.organizationId,{loading:l,result:f}=k(()=>w.get(n));return(z,N)=>e(l)?(d(),u(e(_),{key:0})):(d(),y("div",I,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(B),{level:3},{default:o(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),a(e(A),{style:{"margin-top":"0"}}),a(e(D),{style:{width:"300px"}},{default:o(()=>{var i,s;return[a(e(C),{type:"secondary"},{default:o(()=>[p("Plan")]),_:1}),b("div",v,x((s=(i=e(f))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{L as default};
//# sourceMappingURL=Billing.da9056b7.js.map
