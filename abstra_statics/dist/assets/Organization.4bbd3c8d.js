import{S as p}from"./Sidebar.00d8d702.js";import{_ as b}from"./Navbar.vue_vue_type_script_setup_true_lang.bc183dcd.js";import{v as c,x as d,y as l}from"./icons.fb5e6f1e.js";import{d as u,eB as f,G as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.1a399dc6.js";import{a as w}from"./asyncComputed.c1d6a1a0.js";import"./router.3251149f.js";import{O as z}from"./organization.97cc5021.js";import"./columns.788f79d2.js";import{B as h}from"./BaseLayout.1c409643.js";import"./Tooltip.dcc4732d.js";import"./logo.084e5d7c.js";import"./index.b59f6352.js";import"./transButton.e953e2d0.js";import"./Text.8bc41793.js";import"./Base.80679599.js";import"./Title.02accb2a.js";import"./index.2bff62f7.js";import"./gateway.77d1eed5.js";import"./activeRecord.09a0d7a2.js";import"./pubsub.2cf495bb.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="61803443-6ab8-4380-ab35-5bd7b690db9e",o._sentryDebugIdIdentifier="sentry-dbid-61803443-6ab8-4380-ab35-5bd7b690db9e")}catch{}})();const J=u({__name:"Organization",setup(o){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:c,path:"projects"},{name:"Members",icon:d,path:"members"},{name:"Billing",icon:l,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(b,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{J as default};
//# sourceMappingURL=Organization.4bbd3c8d.js.map
