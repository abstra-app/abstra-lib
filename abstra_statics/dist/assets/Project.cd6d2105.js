import{d as u,eB as f,H as m,a as b,b as g,c as v,w as s,f as i}from"./outputWidgets.a7176d64.js";import{B as _}from"./BaseLayout.1d9f3c03.js";import{a as h}from"./asyncComputed.25eda27f.js";import"./router.5c8371b2.js";import"./index.14419b75.js";import{P as y}from"./project.a85fe385.js";import{O as w}from"./organization.9f349e77.js";import{_ as z}from"./Navbar.vue_vue_type_script_setup_true_lang.60a3ccbe.js";import{S as I}from"./Sidebar.01117138.js";import{e as j,R as C,S as O,T as k,U as B,v as S,H as L,V as N,W as P,N as x}from"./icons.2eed2ad0.js";import"./Form.bf63c08b.js";import"./hasIn.956628e3.js";import"./index.cf4c23b9.js";import"./record.3511e152.js";import"./pubsub.af1d225a.js";import"./logo.084e5d7c.js";import"./Text.7794e42c.js";import"./Base.3d2f0a07.js";import"./Typography.6fea5bfc.js";import"./index.5c9892d3.js";import"./ArrowRightOutlined.08fa31dd.js";import"./index.4e84d478.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="86b9d807-eccf-41d1-bf3a-cd4f20f8d0c9",o._sentryDebugIdIdentifier="sentry-dbid-86b9d807-eccf-41d1-bf3a-cd4f20f8d0c9")}catch{}})();const oe=u({__name:"Project",setup(o){const c=f().params.projectId,{result:a}=h(()=>y.get(c).then(async e=>{const t=await w.get(e.organizationId);return{project:e,organization:t}})),l=m(()=>{var e,t,n,p;return((e=a.value)==null?void 0:e.organization)&&a.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=a.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(p=a.value)==null?void 0:p.organization.id}`},{label:a.value.project.name,path:`/projects/${a.value.project.id}`}]:void 0}),d=m(()=>{var e;return(e=a.value)!=null&&e.project?[{name:"Project",items:[{name:"Live",path:"live",icon:j},{name:"Builds",path:"builds",icon:C},{name:"Connectors",path:"connectors",icon:O,unavailable:!a.value.organization.featureFlags.CONNECTORS_CONSOLE},{name:"Tables",path:"tables",icon:k},{name:"API Keys",path:"api-keys",icon:B},{name:"Env Vars",path:"env-vars",icon:S},{name:"Files",path:"files",icon:L},{name:"Logs",icon:N,path:"logs"},{name:"Settings",icon:P,path:"settings"},{name:"Users",icon:x,path:"users"}]}]:[]});return(e,t)=>{const n=b("router-view");return g(),v(_,null,{content:s(()=>[i(n)]),navbar:s(()=>[i(z,{class:"nav",breadcrumb:l.value},null,8,["breadcrumb"])]),sidebar:s(()=>[i(I,{class:"sidebar",sections:d.value},null,8,["sections"])]),_:1})}}});export{oe as default};
//# sourceMappingURL=Project.cd6d2105.js.map
