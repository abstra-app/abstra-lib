import{_ as c}from"./Sidebar.vue_vue_type_script_setup_true_lang.a57c7ef7.js";import{_ as p}from"./Navbar.vue_vue_type_script_setup_true_lang.404b4937.js";import{G as d,H as l,I as u}from"./icons.b8f11d3f.js";import{d as b,eB as f,G as _,a as g,b as y,c as v,w as t,f as n}from"./outputWidgets.43a10844.js";import{a as w}from"./asyncComputed.a8de6d19.js";import"./authorManager.c51bb24c.js";import"./index.05bcfc39.js";import{O as z}from"./organization.5fda6e99.js";import{B as I}from"./BaseLayout.b0ab07d4.js";import"./index.cc255ed7.js";import"./logo.084e5d7c.js";import"./Text.3354e3aa.js";import"./index.47c9832e.js";import"./index.cf4c23b9.js";import"./record.7e194615.js";import"./pubsub.3150c359.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="769320c1-20c4-4b9d-a56a-689c6ea2635b",o._sentryDebugIdIdentifier="sentry-dbid-769320c1-20c4-4b9d-a56a-689c6ea2635b")}catch{}})();const q=b({__name:"Organization",setup(o){const r=f().params.organizationId,{result:a}=w(()=>z.get(r)),i=_(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing"}]}];return(h,B)=>{const m=g("router-view");return y(),v(I,null,{navbar:t(()=>[n(p,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[n(c,{class:"sidebar",sections:s})]),content:t(()=>[n(m)]),_:1})}}});export{q as default};
//# sourceMappingURL=Organization.091ffc03.js.map
