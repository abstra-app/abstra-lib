import{d,eB as f,H as m,a as b,b as g,c as v,w as s,f as i}from"./outputWidgets.83ad65aa.js";import{B as _}from"./BaseLayout.5a1484a1.js";import{a as h}from"./asyncComputed.eebec89e.js";import"./router.1b8539af.js";import"./index.9f577453.js";import{P as y}from"./project.39a874bc.js";import{O as w}from"./organization.84b53f22.js";import{_ as z}from"./Navbar.vue_vue_type_script_setup_true_lang.613af5f6.js";import{S as I}from"./Sidebar.37204cbd.js";import{e as j,Q as C,R as O,S as k,T as B,v as S,G as L,U as P,V as x,M as D}from"./icons.ec92f7f9.js";import"./Form.5deb3adb.js";import"./hasIn.597d0078.js";import"./index.cf4c23b9.js";import"./record.df4e3ae7.js";import"./pubsub.6c6cbc8d.js";import"./logo.084e5d7c.js";import"./Text.72dc1978.js";import"./Base.5de97c83.js";import"./Typography.fea800b8.js";import"./index.b1fc61d4.js";import"./ArrowRightOutlined.08fa31dd.js";import"./index.06a93781.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="f3b0150a-ebbf-444b-95a4-57f751d5fdf9",o._sentryDebugIdIdentifier="sentry-dbid-f3b0150a-ebbf-444b-95a4-57f751d5fdf9")}catch{}})();const oe=d({__name:"Project",setup(o){const c=f().params.projectId,{result:a}=h(()=>y.get(c).then(async e=>{const t=await w.get(e.organizationId);return{project:e,organization:t}})),l=m(()=>{var e,t,n,p;return((e=a.value)==null?void 0:e.organization)&&a.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=a.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(p=a.value)==null?void 0:p.organization.id}`},{label:a.value.project.name,path:`/projects/${a.value.project.id}`}]:void 0}),u=m(()=>{var e;return(e=a.value)!=null&&e.project?[{name:"Project",items:[{name:"Live",path:"live",icon:j},{name:"Builds",path:"builds",icon:C},{name:"Connectors",path:"connectors",icon:O,unavailable:!a.value.organization.featureFlags.CONNECTORS_CONSOLE},{name:"Tables",path:"tables",icon:k},{name:"API Keys",path:"api-keys",icon:B},{name:"Env Vars",path:"env-vars",icon:S},{name:"Files",path:"files",icon:L},{name:"Logs",icon:P,path:"logs"},{name:"Settings",icon:x,path:"settings"},{name:"Users",icon:D,path:"users"}]}]:[]});return(e,t)=>{const n=b("router-view");return g(),v(_,null,{content:s(()=>[i(n)]),navbar:s(()=>[i(z,{class:"nav",breadcrumb:l.value},null,8,["breadcrumb"])]),sidebar:s(()=>[i(I,{class:"sidebar",sections:u.value},null,8,["sections"])]),_:1})}}});export{oe as default};
//# sourceMappingURL=Project.45919107.js.map
