import{a as g}from"./asyncComputed.fc38f086.js";import{d as y,eE as _,o as b,u as e,b as l,c as w,ew as x,f as a,w as o,as as p,bG as h,e as C,eH as I}from"./outputWidgets.74e9892d.js";import{c}from"./router.de32499b.js";import"./index.3352af38.js";import{O as k}from"./organization.8a27c0ec.js";import{L as v}from"./LoadingContainer.a2bed09a.js";import{A}from"./Title.cbd2422b.js";import{A as B}from"./index.4596abca.js";import{A as D}from"./index.dd0b730f.js";import{C as N}from"./Card.01db1e5a.js";import"./Form.efc9be2d.js";import"./hasIn.abae920f.js";import"./popupNotifcation.0fcb9bcf.js";import"./record.32238af4.js";import"./pubsub.e11c9ea9.js";import"./Base.95b485c5.js";import"./TabPane.d574ff5c.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="a21b4015-f882-4876-b8fb-8a7cc10e4e9a",t._sentryDebugIdIdentifier="sentry-dbid-a21b4015-f882-4876-b8fb-8a7cc10e4e9a")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Y=y({__name:"Billing",setup(t){const r=_().params.organizationId,{loading:f,result:m}=g(()=>k.get(r));b(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const u=()=>c.showNewMessage("I want to upgrade my plan");return(E,V)=>e(f)?(l(),w(v,{key:0})):(l(),x("div",z,[a(e(B),{justify:"space-between",align:"center"},{default:o(()=>[a(e(A),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(D),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(h),{onClick:u},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[C("div",M,I((d=(i=(s=e(m))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Y as default};
//# sourceMappingURL=Billing.89e436c0.js.map
