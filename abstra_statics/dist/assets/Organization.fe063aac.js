import{_ as c}from"./Sidebar.vue_vue_type_script_setup_true_lang.1d956663.js";import{_ as p}from"./Navbar.vue_vue_type_script_setup_true_lang.a6073f4b.js";import{D as l,E as u,F as d}from"./icons.4ae4a9c5.js";import{d as f,eB as b,G as _,a as g,b as y,c as v,w as t,f as r}from"./outputWidgets.38a8ba6d.js";import{a as w}from"./asyncComputed.41d10d8a.js";import"./authorManager.b6ced178.js";import"./index.56107642.js";import{O as z}from"./organization.d77e673f.js";import{B as h}from"./BaseLayout.32fd786f.js";import"./index.91017c21.js";import"./logo.084e5d7c.js";import"./Text.1048f348.js";import"./index.15b0d850.js";import"./index.cf4c23b9.js";import"./record.be73334f.js";import"./pubsub.23b14df7.js";import"./gateway.77dbab2f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="62c948e4-4c8f-461a-bc28-59e410813e8f",e._sentryDebugIdIdentifier="sentry-dbid-62c948e4-4c8f-461a-bc28-59e410813e8f")}catch{}})();const A=f({__name:"Organization",setup(e){const n=b().params.organizationId,{result:a}=w(()=>z.get(n)),i=_(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:l,path:"projects"},{name:"Members",icon:u,path:"members"},{name:"Billing",icon:d,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=g("router-view");return y(),v(h,null,{navbar:t(()=>[r(p,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(c,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{A as default};
//# sourceMappingURL=Organization.fe063aac.js.map
