import{S as p}from"./Sidebar.52908937.js";import{_ as d}from"./Navbar.vue_vue_type_script_setup_true_lang.78f3466d.js";import{M as c,N as l,O as u}from"./icons.03f248df.js";import{d as f,eB as b,H as g,a as _,b as y,c as v,w as a,f as r}from"./outputWidgets.5feddda6.js";import{a as w}from"./asyncComputed.08f178ee.js";import"./router.cee98fd9.js";import"./index.a77d54c9.js";import{O as z}from"./organization.6b64ebf3.js";import{B as h}from"./BaseLayout.29c08378.js";import"./index.c0cde1c1.js";import"./logo.084e5d7c.js";import"./Text.a9824b52.js";import"./Base.7d634eac.js";import"./Typography.80f48b1e.js";import"./index.2d69ca5a.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Form.c768bb53.js";import"./hasIn.18bd6daf.js";import"./index.cf4c23b9.js";import"./record.f75691fd.js";import"./pubsub.3e242971.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="70263798-1721-471d-ae19-5f949a9376d8",o._sentryDebugIdIdentifier="sentry-dbid-70263798-1721-471d-ae19-5f949a9376d8")}catch{}})();const K=f({__name:"Organization",setup(o){const n=b().params.organizationId,{result:e}=w(()=>z.get(n)),i=g(()=>e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.name,path:`/organizations/${e.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:c,path:"projects"},{name:"Editors",icon:l,path:"editors"},{name:"Billing",icon:u,path:"billing"}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:a(()=>[r(d,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:a(()=>[r(p,{class:"sidebar",sections:s})]),content:a(()=>[r(m)]),_:1})}}});export{K as default};
//# sourceMappingURL=Organization.f6444746.js.map
