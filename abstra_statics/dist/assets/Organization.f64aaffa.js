import{S as p}from"./Sidebar.97878545.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.01cff821.js";import{F as l,G as d,H as u}from"./icons.1992e13b.js";import{d as b,ey as f,H as g,a as _,b as y,c as v,w as t,f as r}from"./registerWidgets.9fce82a0.js";import{a as w}from"./asyncComputed.a4b709a3.js";import"./gateway.6deb8468.js";import{O as z}from"./organization.7ba59110.js";import"./index.75e03e08.js";import{B as h}from"./BaseLayout.ec0601c1.js";import"./Tooltip.e036816c.js";import"./logo.084e5d7c.js";import"./passwordlessManager.eda842b8.js";import"./pubsub.025cc397.js";import"./storage.ae287dfa.js";import"./index.2c964e80.js";import"./Title.26974edb.js";import"./index.e8158c16.js";import"./index.b9dfa5e6.js";import"./activeRecord.872f4269.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="6ff0d332-7305-48a1-9379-3bb1c5244a9f",o._sentryDebugIdIdentifier="sentry-dbid-6ff0d332-7305-48a1-9379-3bb1c5244a9f")}catch{}})();const A=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:e}=w(()=>z.get(n)),i=g(()=>e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.name,path:`/organizations/${e.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:l,path:"projects"},{name:"Members",icon:d,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{A as default};
//# sourceMappingURL=Organization.f64aaffa.js.map
