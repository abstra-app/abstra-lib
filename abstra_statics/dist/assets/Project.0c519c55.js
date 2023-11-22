import{d,eB as b,G as m,a as g,b as f,c as v,w as i,f as s}from"./outputWidgets.1a399dc6.js";import{B as _}from"./BaseLayout.1c409643.js";import{a as y}from"./asyncComputed.c1d6a1a0.js";import{P as h}from"./project.4326f1db.js";import"./router.3251149f.js";import{O as z}from"./organization.97cc5021.js";import"./columns.788f79d2.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.bc183dcd.js";import{S as I}from"./Sidebar.00d8d702.js";import{z as w,A as B,B as k,C,D as P,E as $,F as x,v as D,x as M,y as S}from"./icons.fb5e6f1e.js";import"./gateway.77d1eed5.js";import"./activeRecord.09a0d7a2.js";import"./pubsub.2cf495bb.js";import"./Base.80679599.js";import"./transButton.e953e2d0.js";import"./Text.8bc41793.js";import"./Title.02accb2a.js";import"./index.2bff62f7.js";import"./logo.084e5d7c.js";import"./index.b59f6352.js";import"./Tooltip.dcc4732d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="4180b15b-0712-4948-bbfa-69e1c7dda711",o._sentryDebugIdIdentifier="sentry-dbid-4180b15b-0712-4948-bbfa-69e1c7dda711")}catch{}})();const ea=d({__name:"Project",setup(o){const c=b().params.projectId,{result:a}=y(()=>h.get(c).then(async e=>{const t=await z.get(e.organizationId);return{project:e,organization:t}})),l=m(()=>{var e,t,n,p;return((e=a.value)==null?void 0:e.organization)&&a.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=a.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(p=a.value)==null?void 0:p.organization.id}`},{label:a.value.project.name,path:`/projects/${a.value.project.id}`}]:void 0}),u=m(()=>{var e;return(e=a.value)!=null&&e.project?[{name:"Project",items:[{name:"Builds",path:"builds",icon:w},{name:"Connectors",path:"connectors",icon:B},{name:"Tables",path:"tables",icon:k},{name:"API Keys",path:"api-keys",icon:C},{name:"Env Vars",path:"env-vars",icon:P},{name:"Logs",icon:$,path:"logs",beta:!0},{name:"Settings",icon:x,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:D,path:`/organizations/${a.value.project.organizationId}/projects`},{name:"Members",icon:M,path:`/organizations/${a.value.project.organizationId}/members`},{name:"Billing",icon:S,path:`/organizations/${a.value.project.organizationId}/billing`,unavailable:!0}]}]:[]});return(e,t)=>{const n=g("router-view");return f(),v(_,null,{content:i(()=>[s(n)]),navbar:i(()=>[s(j,{class:"nav",breadcrumb:l.value},null,8,["breadcrumb"])]),sidebar:i(()=>[s(I,{class:"sidebar",sections:u.value},null,8,["sections"])]),_:1})}}});export{ea as default};
//# sourceMappingURL=Project.0c519c55.js.map
