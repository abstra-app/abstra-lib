import{S as p}from"./Sidebar.4c493f9a.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.a220eb0a.js";import{G as d,H as l,I as u}from"./icons.40b0d460.js";import{d as b,ez as f,F as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.cc88926c.js";import{a as z}from"./asyncComputed.354694de.js";import"./router.1123556f.js";import"./jwt-decode.esm.74bd4619.js";import"./index.093bc945.js";import{O as w}from"./organization.22933b6a.js";import{B as I}from"./BaseLayout.70ebfa4b.js";import"./index.f97cef12.js";import"./logo.084e5d7c.js";import"./Text.a5c52232.js";import"./index.4dc7aa22.js";import"./FormItem.93698b74.js";import"./hasIn.1fe6a611.js";import"./storage.e50c37b8.js";import"./index.2431d017.js";import"./index.cf4c23b9.js";import"./record.fcda02a3.js";import"./pubsub.60086194.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="7bf515f9-af1a-4e63-8191-2ab2ed2873c5",o._sentryDebugIdIdentifier="sentry-dbid-7bf515f9-af1a-4e63-8191-2ab2ed2873c5")}catch{}})();const K=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:a}=z(()=>w.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing"}]}];return(h,B)=>{const m=_("router-view");return y(),v(I,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{K as default};
//# sourceMappingURL=Organization.d57931e1.js.map
