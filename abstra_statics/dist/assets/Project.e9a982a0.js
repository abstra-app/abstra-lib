import{d as u,eB as b,G as p,a as g,b as f,c as v,w as r,f as s}from"./outputWidgets.98b19ac3.js";import{B as _}from"./BaseLayout.8115930a.js";import{a as h}from"./asyncComputed.2379a31d.js";import"./authorManager.5fed50c2.js";import"./index.06f0c6fa.js";import{P as z}from"./project.9362ddd9.js";import{O as y}from"./organization.c3d838b1.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.f99e2f73.js";import{_ as I}from"./Sidebar.vue_vue_type_script_setup_true_lang.0b2725fc.js";import{z as w,H as C,I as O,J as B,K as $,L as k,n as L,M as P,s as D,D as E,E as M,F as x}from"./icons.17769965.js";import"./index.cf4c23b9.js";import"./record.5d62c140.js";import"./pubsub.19c67421.js";import"./gateway.9df49d3d.js";import"./logo.084e5d7c.js";import"./Text.e8d75318.js";import"./index.855368b5.js";import"./index.61ce9763.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="b264cd7d-e785-410b-9af4-1c54d2fed9f4",o._sentryDebugIdIdentifier="sentry-dbid-b264cd7d-e785-410b-9af4-1c54d2fed9f4")}catch{}})();const aa=u({__name:"Project",setup(o){const c=b().params.projectId,{result:a}=h(()=>z.get(c).then(async e=>{const n=await y.get(e.organizationId);return{project:e,organization:n}})),m=p(()=>{var e,n,t,l;return((e=a.value)==null?void 0:e.organization)&&a.value.project?[{label:"My organizations",path:"/organizations"},{label:(t=(n=a.value)==null?void 0:n.organization)==null?void 0:t.name,path:`/organizations/${(l=a.value)==null?void 0:l.organization.id}`},{label:a.value.project.name,path:`/projects/${a.value.project.id}`}]:void 0}),d=p(()=>{var e;return(e=a.value)!=null&&e.project?[{name:"Project",items:[{name:"Live",path:"live",icon:w},{name:"Builds",path:"builds",icon:C},{name:"Connectors",path:"connectors",icon:O,unavailable:!a.value.organization.featureFlags.CONNECTORS_CONSOLE},{name:"Tables",path:"tables",icon:B},{name:"API Keys",path:"api-keys",icon:$},{name:"Env Vars",path:"env-vars",icon:k},{name:"Files",path:"files",icon:L},{name:"Logs",icon:P,path:"logs",beta:!0},{name:"Settings",icon:D,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:E,path:`/organizations/${a.value.project.organizationId}/projects`},{name:"Members",icon:M,path:`/organizations/${a.value.project.organizationId}/members`},{name:"Billing",icon:x,path:`/organizations/${a.value.project.organizationId}/billing`,unavailable:!0}]}]:[]});return(e,n)=>{const t=g("router-view");return f(),v(_,null,{content:r(()=>[s(t)]),navbar:r(()=>[s(j,{class:"nav",breadcrumb:m.value},null,8,["breadcrumb"])]),sidebar:r(()=>[s(I,{class:"sidebar",sections:d.value},null,8,["sections"])]),_:1})}}});export{aa as default};
//# sourceMappingURL=Project.e9a982a0.js.map
