import{S as p}from"./Sidebar.139f2846.js";import{_ as d}from"./Navbar.vue_vue_type_script_setup_true_lang.b7e300d1.js";import{E as c,F as l,G as u}from"./icons.3f547329.js";import{d as b,ey as f,H as g,a as _,b as y,c as v,w as t,f as r}from"./registerWidgets.3fe3e574.js";import{a as w}from"./asyncComputed.5cb892a4.js";import"./gateway.86056aac.js";import{O as z}from"./organization.02b344f4.js";import"./index.6273328b.js";import{B as h}from"./BaseLayout.2c29f2de.js";import"./Tooltip.ba83726b.js";import"./logo.084e5d7c.js";import"./passwordlessManager.0b9af8aa.js";import"./pubsub.6dbde606.js";import"./storage.478cbdcc.js";import"./index.ed47c328.js";import"./Title.bb963c89.js";import"./index.239592cd.js";import"./index.fb78a3e8.js";import"./activeRecord.1c8420b0.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="79972d04-b56b-4d59-8aa4-390aea1d08d2",a._sentryDebugIdIdentifier="sentry-dbid-79972d04-b56b-4d59-8aa4-390aea1d08d2")}catch{}})();const A=b({__name:"Organization",setup(a){const n=f().params.organizationId,{result:e}=w(()=>z.get(n)),i=g(()=>e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.name,path:`/organizations/${e.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:c,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(d,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{A as default};
//# sourceMappingURL=Organization.a0527daf.js.map
