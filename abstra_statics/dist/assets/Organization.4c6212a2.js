import{_ as p}from"./Sidebar.vue_vue_type_script_setup_true_lang.f15681be.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.3fe9afdf.js";import{D as l,E as u,F as d}from"./icons.e46bc572.js";import{d as b,eB as f,G as _,a as g,b as y,c as v,w as t,f as r}from"./outputWidgets.57362b1f.js";import{a as w}from"./asyncComputed.0e6d7881.js";import"./router.6d3281ca.js";import"./index.22c501ab.js";import{O as z}from"./organization.24527f1c.js";import{B as h}from"./BaseLayout.46c57de3.js";import"./index.99ccc516.js";import"./logo.084e5d7c.js";import"./Text.1efe9d25.js";import"./Base.42c926e3.js";import"./index.a90e2ba3.js";import"./FormItem.55cb3d81.js";import"./hasIn.300dfb8d.js";import"./index.6b035ed6.js";import"./index.cf4c23b9.js";import"./record.1475ec4d.js";import"./pubsub.3eb3f3c1.js";import"./gateway.a9c032bc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="1888955e-9b3e-4af6-ac6f-1086999ceb32",e._sentryDebugIdIdentifier="sentry-dbid-1888955e-9b3e-4af6-ac6f-1086999ceb32")}catch{}})();const K=b({__name:"Organization",setup(e){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=_(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:l,path:"projects"},{name:"Members",icon:u,path:"members"},{name:"Billing",icon:d,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=g("router-view");return y(),v(h,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{K as default};
//# sourceMappingURL=Organization.4c6212a2.js.map
