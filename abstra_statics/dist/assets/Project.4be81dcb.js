import{d as u,eB as b,H as m,a as f,b as g,c as v,w as s,f as i}from"./outputWidgets.0ce95940.js";import{B as _}from"./BaseLayout.bd51c64b.js";import{a as h}from"./asyncComputed.ccac9f92.js";import"./router.fec959cf.js";import"./index.e913c219.js";import{P as y}from"./project.04d62fcd.js";import{O as w}from"./organization.9095e500.js";import{_ as z}from"./Navbar.vue_vue_type_script_setup_true_lang.2a10a40d.js";import{S as I}from"./Sidebar.22bdd166.js";import{e as j,Q as C,R as O,S as k,T as B,v as S,G as L,U as P,V as x,M as D}from"./icons.cafa1f54.js";import"./Form.547e350f.js";import"./hasIn.8e0662ea.js";import"./popupNotifcation.3fea40a8.js";import"./index.cf4c23b9.js";import"./record.1e618d23.js";import"./pubsub.4ef12c55.js";import"./logo.084e5d7c.js";import"./Text.27a9b167.js";import"./Base.e295a40d.js";import"./Typography.b54fb2d7.js";import"./index.52177746.js";import"./ArrowRightOutlined.08fa31dd.js";import"./index.dc36cf54.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="dd92bc0f-09d9-4896-8bfe-bb388cd4b983",o._sentryDebugIdIdentifier="sentry-dbid-dd92bc0f-09d9-4896-8bfe-bb388cd4b983")}catch{}})();const te=u({__name:"Project",setup(o){const c=b().params.projectId,{result:a}=h(()=>y.get(c).then(async e=>{const t=await w.get(e.organizationId);return{project:e,organization:t}})),l=m(()=>{var e,t,n,p;return((e=a.value)==null?void 0:e.organization)&&a.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=a.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(p=a.value)==null?void 0:p.organization.id}`},{label:a.value.project.name,path:`/projects/${a.value.project.id}`}]:void 0}),d=m(()=>{var e;return(e=a.value)!=null&&e.project?[{name:"Project",items:[{name:"Live",path:"live",icon:j},{name:"Builds",path:"builds",icon:C},{name:"Connectors",path:"connectors",icon:O,unavailable:!a.value.organization.featureFlags.CONNECTORS_CONSOLE},{name:"Tables",path:"tables",icon:k},{name:"API Keys",path:"api-keys",icon:B},{name:"Env Vars",path:"env-vars",icon:S},{name:"Files",path:"files",icon:L},{name:"Logs",icon:P,path:"logs"},{name:"Settings",icon:x,path:"settings"},{name:"Users",icon:D,path:"users"}]}]:[]});return(e,t)=>{const n=f("router-view");return g(),v(_,null,{content:s(()=>[i(n)]),navbar:s(()=>[i(z,{class:"nav",breadcrumb:l.value},null,8,["breadcrumb"])]),sidebar:s(()=>[i(I,{class:"sidebar",sections:d.value},null,8,["sections"])]),_:1})}}});export{te as default};
//# sourceMappingURL=Project.4be81dcb.js.map
