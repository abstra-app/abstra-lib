import{S as c}from"./Sidebar.85e6b71c.js";import{_ as p}from"./Navbar.vue_vue_type_script_setup_true_lang.d3a90d24.js";import{u as d,v as l,x as u}from"./icons.d7a31445.js";import{d as b,eB as f,G as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.707d8755.js";import{a as w}from"./asyncComputed.d6ddda87.js";import"./router.49fa6028.js";import"./index.1f00ee56.js";import{O as z}from"./organization.7c4c6a67.js";import{B as h}from"./BaseLayout.61b23300.js";import"./Tooltip.c68d0e00.js";import"./logo.084e5d7c.js";import"./index.12f07cf3.js";import"./transButton.88a7ccc0.js";import"./Text.76394f72.js";import"./Base.98ffabee.js";import"./Title.71fc07fc.js";import"./index.09078a0e.js";import"./record.abe51677.js";import"./pubsub.d15be512.js";import"./gateway.ca54d93d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="604f1c7d-1dba-4c0d-96c0-efdcb9d23f16",o._sentryDebugIdIdentifier="sentry-dbid-604f1c7d-1dba-4c0d-96c0-efdcb9d23f16")}catch{}})();const J=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(p,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(c,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{J as default};
//# sourceMappingURL=Organization.5cec2b1c.js.map
