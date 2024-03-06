import{d,eB as b,H as m,a as f,b as g,c as v,w as s,f as i}from"./outputWidgets.34ebc37e.js";import{B as _}from"./BaseLayout.664f20e6.js";import{a as h}from"./asyncComputed.35a4b27a.js";import"./router.719f3d63.js";import"./index.081cf5ad.js";import{P as y}from"./project.0e75a566.js";import{O as w}from"./organization.b732a43f.js";import{_ as z}from"./Navbar.vue_vue_type_script_setup_true_lang.4e331aae.js";import{S as I}from"./Sidebar.ca9edbd9.js";import{e as j,R as C,S as O,T as k,U as B,v as S,H as L,V as N,W as P,N as x}from"./icons.8f30991f.js";import"./Form.38063bb5.js";import"./hasIn.58ff2131.js";import"./popupNotifcation.9ce529ca.js";import"./index.cf4c23b9.js";import"./record.cbdf5e50.js";import"./pubsub.35a24abb.js";import"./logo.084e5d7c.js";import"./Text.979656fd.js";import"./Base.1bb23522.js";import"./Typography.316976a3.js";import"./index.be83d1b5.js";import"./ArrowRightOutlined.08fa31dd.js";import"./index.e0c340f2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="2c555056-1743-4425-a5dc-5620c016e19b",o._sentryDebugIdIdentifier="sentry-dbid-2c555056-1743-4425-a5dc-5620c016e19b")}catch{}})();const te=d({__name:"Project",setup(o){const c=b().params.projectId,{result:a}=h(()=>y.get(c).then(async e=>{const t=await w.get(e.organizationId);return{project:e,organization:t}})),l=m(()=>{var e,t,n,p;return((e=a.value)==null?void 0:e.organization)&&a.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=a.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(p=a.value)==null?void 0:p.organization.id}`},{label:a.value.project.name,path:`/projects/${a.value.project.id}`}]:void 0}),u=m(()=>{var e;return(e=a.value)!=null&&e.project?[{name:"Project",items:[{name:"Live",path:"live",icon:j},{name:"Builds",path:"builds",icon:C},{name:"Connectors",path:"connectors",icon:O,unavailable:!a.value.organization.featureFlags.CONNECTORS_CONSOLE},{name:"Tables",path:"tables",icon:k},{name:"API Keys",path:"api-keys",icon:B},{name:"Env Vars",path:"env-vars",icon:S},{name:"Files",path:"files",icon:L},{name:"Logs",icon:N,path:"logs"},{name:"Settings",icon:P,path:"settings"},{name:"Users",icon:x,path:"users"}]}]:[]});return(e,t)=>{const n=f("router-view");return g(),v(_,null,{content:s(()=>[i(n)]),navbar:s(()=>[i(z,{class:"nav",breadcrumb:l.value},null,8,["breadcrumb"])]),sidebar:s(()=>[i(I,{class:"sidebar",sections:u.value},null,8,["sections"])]),_:1})}}});export{te as default};
//# sourceMappingURL=Project.81949f4b.js.map
