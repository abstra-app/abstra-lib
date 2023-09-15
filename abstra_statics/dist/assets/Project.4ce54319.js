import{d as u,ey as b,F as p,a as g,b as _,c as f,e as r,er as l,bw as v,t as y}from"./registerWidgets.65ad7269.js";import{a as h}from"./asyncComputed.bc9bb426.js";import{P as j}from"./project.8db58a88.js";import"./gateway.59144cb2.js";import{O as z}from"./organization.2800e3cd.js";import"./index.8ca8b70f.js";import{N as I}from"./Navbar.d34ee5d8.js";import{S as w}from"./Sidebar.1b7b79d7.js";import{F as P,G as k,H as x,I as B,J as C,K as D,L as $,C as E,D as M,E as N}from"./icons.af1545d2.js";import"./activeRecord.7584f904.js";import"./pubsub.ae54b92c.js";import"./passwordlessManager.907d7dd5.js";import"./storage.885899ad.js";import"./logo.084e5d7c.js";import"./Tooltip.65cabe80.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="17cccfa2-17ba-40f8-a8d2-12cbbf57a9df",o._sentryDebugIdIdentifier="sentry-dbid-17cccfa2-17ba-40f8-a8d2-12cbbf57a9df")}catch{}})();const S={class:"project"},F={class:"content-wrapper"},L=u({__name:"Project",setup(o){const i=b().params.projectId,{result:e}=h(()=>j.get(i).then(async a=>{const t=await z.get(a.organizationId);return{project:a,organization:t}})),d=p(()=>{var a,t,n,c;return((a=e.value)==null?void 0:a.organization)&&e.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=e.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(c=e.value)==null?void 0:c.organization.id}`},{label:e.value.project.name,path:`/projects/${e.value.project.id}`}]:void 0}),m=p(()=>{var a;return(a=e.value)!=null&&a.project?[{name:"Project",items:[{name:"Builds",path:"builds",icon:P},{name:"Connectors",path:"connectors",icon:k},{name:"Tables",path:"tables",icon:x},{name:"API Keys",path:"api-keys",icon:B},{name:"Env Vars",path:"env-vars",icon:C},{name:"Logs",icon:D,path:"logs",beta:!0},{name:"Settings",icon:$,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:E,path:`/organizations/${e.value.project.organizationId}/projects`},{name:"Members",icon:M,path:`/organizations/${e.value.project.organizationId}/members`},{name:"Billing",icon:N,path:`/organizations/${e.value.project.organizationId}/billing`,unavailable:!0}]}]:[]});return(a,t)=>{const n=g("router-view");return _(),f(v,null,[r(I,{class:"nav",breadcrumb:d.value},null,8,["breadcrumb"]),l("div",S,[r(w,{class:"sidebar",sections:m.value},null,8,["sections"]),l("div",F,[r(n)])])],64)}}});const Z=y(L,[["__scopeId","data-v-d311093f"]]);export{Z as default};
//# sourceMappingURL=Project.4ce54319.js.map
