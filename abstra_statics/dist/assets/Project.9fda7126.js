import{d as u,eB as f,H as m,a as b,b as g,c as v,w as s,f as i}from"./outputWidgets.9a751704.js";import{B as _}from"./BaseLayout.fa38ee82.js";import{a as h}from"./asyncComputed.c0b7f526.js";import"./router.2ed86b1e.js";import"./index.1dbbc1f9.js";import{P as y}from"./project.30dc1906.js";import{O as w}from"./organization.b6a6d651.js";import{_ as z}from"./Navbar.vue_vue_type_script_setup_true_lang.6ea05ef8.js";import{S as I}from"./Sidebar.a67faba2.js";import{e as j,R as C,S as O,T as k,U as B,v as S,H as L,V as N,W as P,N as x}from"./icons.52647ede.js";import"./Form.b9d05841.js";import"./hasIn.c089c9ed.js";import"./index.cf4c23b9.js";import"./record.91b90880.js";import"./pubsub.f352a300.js";import"./logo.084e5d7c.js";import"./Text.0538649f.js";import"./Base.083cbb66.js";import"./Typography.c485b72c.js";import"./index.2b2cc95e.js";import"./ArrowRightOutlined.08fa31dd.js";import"./index.b69d7ab2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="9b18e472-7413-4f32-88d4-470d5f9d859c",o._sentryDebugIdIdentifier="sentry-dbid-9b18e472-7413-4f32-88d4-470d5f9d859c")}catch{}})();const oe=u({__name:"Project",setup(o){const c=f().params.projectId,{result:a}=h(()=>y.get(c).then(async e=>{const t=await w.get(e.organizationId);return{project:e,organization:t}})),l=m(()=>{var e,t,n,p;return((e=a.value)==null?void 0:e.organization)&&a.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=a.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(p=a.value)==null?void 0:p.organization.id}`},{label:a.value.project.name,path:`/projects/${a.value.project.id}`}]:void 0}),d=m(()=>{var e;return(e=a.value)!=null&&e.project?[{name:"Project",items:[{name:"Live",path:"live",icon:j},{name:"Builds",path:"builds",icon:C},{name:"Connectors",path:"connectors",icon:O,unavailable:!a.value.organization.featureFlags.CONNECTORS_CONSOLE},{name:"Tables",path:"tables",icon:k},{name:"API Keys",path:"api-keys",icon:B},{name:"Env Vars",path:"env-vars",icon:S},{name:"Files",path:"files",icon:L},{name:"Logs",icon:N,path:"logs"},{name:"Settings",icon:P,path:"settings"},{name:"Users",icon:x,path:"users"}]}]:[]});return(e,t)=>{const n=b("router-view");return g(),v(_,null,{content:s(()=>[i(n)]),navbar:s(()=>[i(z,{class:"nav",breadcrumb:l.value},null,8,["breadcrumb"])]),sidebar:s(()=>[i(I,{class:"sidebar",sections:d.value},null,8,["sections"])]),_:1})}}});export{oe as default};
//# sourceMappingURL=Project.9fda7126.js.map
