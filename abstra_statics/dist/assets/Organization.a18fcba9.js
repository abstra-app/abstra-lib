import{_ as p}from"./Sidebar.vue_vue_type_script_setup_true_lang.97d4c7a9.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.b7bc9f80.js";import{D as l,E as d,F as u}from"./icons.01b98633.js";import{d as f,eB as b,G as _,a as g,b as y,c as v,w as t,f as r}from"./outputWidgets.44a09867.js";import{a as w}from"./asyncComputed.ca8feacc.js";import"./authorManager.406561e5.js";import"./index.98cf761b.js";import{O as z}from"./organization.f1024fd7.js";import{B as h}from"./BaseLayout.5b37bbce.js";import"./index.bdceb8c6.js";import"./logo.084e5d7c.js";import"./Text.99f50980.js";import"./Title.a43de87d.js";import"./index.336e680c.js";import"./index.cf4c23b9.js";import"./record.0114cd31.js";import"./pubsub.34ae9a92.js";import"./gateway.7f6d0dbc.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="65f87888-0e8b-4d31-a0c4-af273af53735",a._sentryDebugIdIdentifier="sentry-dbid-65f87888-0e8b-4d31-a0c4-af273af53735")}catch{}})();const A=f({__name:"Organization",setup(a){const n=b().params.organizationId,{result:e}=w(()=>z.get(n)),i=_(()=>e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.name,path:`/organizations/${e.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:l,path:"projects"},{name:"Members",icon:d,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=g("router-view");return y(),v(h,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{A as default};
//# sourceMappingURL=Organization.a18fcba9.js.map
