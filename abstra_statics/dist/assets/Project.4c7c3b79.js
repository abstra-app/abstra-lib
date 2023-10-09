import{d as u,eA as g,J as m,a as b,b as f,c as v,w as i,f as s}from"./outputWidgets.ec044eb8.js";import{B as _}from"./BaseLayout.8ae9d39e.js";import{a as h}from"./asyncComputed.70e28ece.js";import{P as y}from"./project.ac37c9cb.js";import"./router.8cea9830.js";import{O as z}from"./organization.97fde710.js";import"./index.ca493aff.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.77710e38.js";import{S as I}from"./Sidebar.682e1980.js";import{k as w,J as k,K as B,L as P,M as $,N as C,O as M,G as x,H as D,I as L}from"./icons.a554ebda.js";import"./gateway.8ffe4c25.js";import"./activeRecord.eb528dd4.js";import"./pubsub.33b79e26.js";import"./Title.85fa9137.js";import"./index.6e43b5b9.js";import"./logo.084e5d7c.js";import"./index.cdce8068.js";import"./index.185a1704.js";import"./index.10d6c7c5.js";import"./Tooltip.a98106f8.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="54f79acd-458a-46fd-9e00-da7f7a698d8d",o._sentryDebugIdIdentifier="sentry-dbid-54f79acd-458a-46fd-9e00-da7f7a698d8d")}catch{}})();const aa=u({__name:"Project",setup(o){const c=g().params.projectId,{result:a}=h(()=>y.get(c).then(async e=>{const t=await z.get(e.organizationId);return{project:e,organization:t}})),l=m(()=>{var e,t,n,p;return((e=a.value)==null?void 0:e.organization)&&a.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=a.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(p=a.value)==null?void 0:p.organization.id}`},{label:a.value.project.name,path:`/projects/${a.value.project.id}`}]:void 0}),d=m(()=>{var e;return(e=a.value)!=null&&e.project?[{name:"Project",items:[{name:"Builds",path:"builds",icon:w},{name:"Connectors",path:"connectors",icon:k},{name:"Tables",path:"tables",icon:B},{name:"API Keys",path:"api-keys",icon:P},{name:"Env Vars",path:"env-vars",icon:$},{name:"Logs",icon:C,path:"logs",beta:!0},{name:"Settings",icon:M,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:x,path:`/organizations/${a.value.project.organizationId}/projects`},{name:"Members",icon:D,path:`/organizations/${a.value.project.organizationId}/members`},{name:"Billing",icon:L,path:`/organizations/${a.value.project.organizationId}/billing`,unavailable:!0}]}]:[]});return(e,t)=>{const n=b("router-view");return f(),v(_,null,{content:i(()=>[s(n)]),navbar:i(()=>[s(j,{class:"nav",breadcrumb:l.value},null,8,["breadcrumb"])]),sidebar:i(()=>[s(I,{class:"sidebar",sections:d.value},null,8,["sections"])]),_:1})}}});export{aa as default};
//# sourceMappingURL=Project.4c7c3b79.js.map
