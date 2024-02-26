import{d as u,eB as b,H as m,a as f,b as g,c as v,w as s,f as i}from"./outputWidgets.eba7fd6d.js";import{B as _}from"./BaseLayout.37cf5670.js";import{a as h}from"./asyncComputed.d84c8a23.js";import"./router.b812d259.js";import"./index.d8ef3f9d.js";import{P as y}from"./project.08c6aedf.js";import{O as w}from"./organization.9a52ad89.js";import{_ as z}from"./Navbar.vue_vue_type_script_setup_true_lang.787edbdb.js";import{S as I}from"./Sidebar.65e00841.js";import{e as j,Q as C,R as O,S as k,T as B,v as S,G as L,U as P,V as x,M as D}from"./icons.0a5ddaa6.js";import"./Form.db59b1d8.js";import"./hasIn.017aa15f.js";import"./index.cf4c23b9.js";import"./record.d2906049.js";import"./pubsub.af0b43dd.js";import"./logo.084e5d7c.js";import"./Text.d7e01cac.js";import"./Base.f3fc76d5.js";import"./Typography.41ff1dd0.js";import"./index.d594fad7.js";import"./ArrowRightOutlined.08fa31dd.js";import"./index.d3764a90.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="c58d9429-7d80-413e-95c5-d15c7e37a12b",o._sentryDebugIdIdentifier="sentry-dbid-c58d9429-7d80-413e-95c5-d15c7e37a12b")}catch{}})();const oe=u({__name:"Project",setup(o){const c=b().params.projectId,{result:a}=h(()=>y.get(c).then(async e=>{const t=await w.get(e.organizationId);return{project:e,organization:t}})),l=m(()=>{var e,t,n,p;return((e=a.value)==null?void 0:e.organization)&&a.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=a.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(p=a.value)==null?void 0:p.organization.id}`},{label:a.value.project.name,path:`/projects/${a.value.project.id}`}]:void 0}),d=m(()=>{var e;return(e=a.value)!=null&&e.project?[{name:"Project",items:[{name:"Live",path:"live",icon:j},{name:"Builds",path:"builds",icon:C},{name:"Connectors",path:"connectors",icon:O,unavailable:!a.value.organization.featureFlags.CONNECTORS_CONSOLE},{name:"Tables",path:"tables",icon:k},{name:"API Keys",path:"api-keys",icon:B},{name:"Env Vars",path:"env-vars",icon:S},{name:"Files",path:"files",icon:L},{name:"Logs",icon:P,path:"logs"},{name:"Settings",icon:x,path:"settings"},{name:"Users",icon:D,path:"users"}]}]:[]});return(e,t)=>{const n=f("router-view");return g(),v(_,null,{content:s(()=>[i(n)]),navbar:s(()=>[i(z,{class:"nav",breadcrumb:l.value},null,8,["breadcrumb"])]),sidebar:s(()=>[i(I,{class:"sidebar",sections:d.value},null,8,["sections"])]),_:1})}}});export{oe as default};
//# sourceMappingURL=Project.903622e2.js.map
