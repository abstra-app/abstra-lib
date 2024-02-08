import{d as u,eB as g,H as p,a as b,b as f,c as v,w as r,f as s}from"./outputWidgets.74ac2ec4.js";import{B as _}from"./BaseLayout.872fac06.js";import{a as h}from"./asyncComputed.f88a4b94.js";import"./router.3342c4c3.js";import"./index.8e718568.js";import{P as z}from"./project.2dfd0aa5.js";import{O as y}from"./organization.02239fb8.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.626135f3.js";import{S as I}from"./Sidebar.af4a8d1e.js";import{e as w,J as O,K as C,L as B,M as k,N as L,o as P,O as $,s as E,E as M,F as N,G as S}from"./icons.f62d7c23.js";import"./FormItem.bf6c91bc.js";import"./hasIn.88fbb4e5.js";import"./index.cf4c23b9.js";import"./record.a15934e9.js";import"./pubsub.6d093b2e.js";import"./logo.084e5d7c.js";import"./Text.039f7ef4.js";import"./Base.bd01be9c.js";import"./index.f7c43892.js";import"./index.08be46f9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="cf2e60dd-f6b6-4a24-a58d-064c12affc23",o._sentryDebugIdIdentifier="sentry-dbid-cf2e60dd-f6b6-4a24-a58d-064c12affc23")}catch{}})();const oa=u({__name:"Project",setup(o){const c=g().params.projectId,{result:a}=h(()=>z.get(c).then(async e=>{const t=await y.get(e.organizationId);return{project:e,organization:t}})),m=p(()=>{var e,t,n,l;return((e=a.value)==null?void 0:e.organization)&&a.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=a.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(l=a.value)==null?void 0:l.organization.id}`},{label:a.value.project.name,path:`/projects/${a.value.project.id}`}]:void 0}),d=p(()=>{var e;return(e=a.value)!=null&&e.project?[{name:"Project",items:[{name:"Live",path:"live",icon:w},{name:"Builds",path:"builds",icon:O},{name:"Connectors",path:"connectors",icon:C,unavailable:!a.value.organization.featureFlags.CONNECTORS_CONSOLE},{name:"Tables",path:"tables",icon:B},{name:"API Keys",path:"api-keys",icon:k},{name:"Env Vars",path:"env-vars",icon:L},{name:"Files",path:"files",icon:P},{name:"Logs",icon:$,path:"logs"},{name:"Settings",icon:E,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:M,path:`/organizations/${a.value.project.organizationId}/projects`},{name:"Members",icon:N,path:`/organizations/${a.value.project.organizationId}/members`},{name:"Billing",icon:S,path:`/organizations/${a.value.project.organizationId}/billing`,unavailable:!0}]}]:[]});return(e,t)=>{const n=b("router-view");return f(),v(_,null,{content:r(()=>[s(n)]),navbar:r(()=>[s(j,{class:"nav",breadcrumb:m.value},null,8,["breadcrumb"])]),sidebar:r(()=>[s(I,{class:"sidebar",sections:d.value},null,8,["sections"])]),_:1})}}});export{oa as default};
//# sourceMappingURL=Project.b3d3aeae.js.map
