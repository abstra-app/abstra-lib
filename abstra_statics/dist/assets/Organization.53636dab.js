import{_ as p}from"./Sidebar.vue_vue_type_script_setup_true_lang.c1a3482d.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.bd47198a.js";import{D as d,E as l,F as f}from"./icons.2f78ad8b.js";import{d as u,eB as b,G as _,a as g,b as y,c as v,w as t,f as r}from"./outputWidgets.dd4991ea.js";import{a as w}from"./asyncComputed.b0684120.js";import"./authorManager.1195382f.js";import"./index.4ca28aa9.js";import{O as z}from"./organization.e1fdc167.js";import{B as h}from"./BaseLayout.832934ee.js";import"./index.f8b5aaf7.js";import"./logo.084e5d7c.js";import"./Text.48871c15.js";import"./Title.489c9ade.js";import"./index.09f6e0ee.js";import"./index.cf4c23b9.js";import"./record.2f99dcbc.js";import"./pubsub.5df81d64.js";import"./gateway.cdb5ab80.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="fb50fa9f-1979-467f-949d-e3992fda56aa",a._sentryDebugIdIdentifier="sentry-dbid-fb50fa9f-1979-467f-949d-e3992fda56aa")}catch{}})();const A=u({__name:"Organization",setup(a){const n=b().params.organizationId,{result:e}=w(()=>z.get(n)),i=_(()=>e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.name,path:`/organizations/${e.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:f,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=g("router-view");return y(),v(h,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{A as default};
//# sourceMappingURL=Organization.53636dab.js.map
