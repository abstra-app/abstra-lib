import{S as c}from"./Sidebar.7035baaf.js";import{_ as p}from"./Navbar.vue_vue_type_script_setup_true_lang.75f0387b.js";import{M as d,N as l,O as u}from"./icons.9a65d765.js";import{d as b,eB as f,H as g,a as _,b as y,c as v,w as a,f as r}from"./outputWidgets.d36af40e.js";import{a as w}from"./asyncComputed.516f6629.js";import"./router.0f899fcc.js";import"./index.1a320d15.js";import{O as z}from"./organization.822ece8a.js";import{B as h}from"./BaseLayout.e17b0033.js";import"./index.8fbb1153.js";import"./logo.084e5d7c.js";import"./Text.7f6fc84b.js";import"./Base.3a1b4bb1.js";import"./Typography.6b69dde1.js";import"./index.95c40490.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Form.730000ff.js";import"./hasIn.5c520f68.js";import"./index.cf4c23b9.js";import"./record.42f87af8.js";import"./pubsub.5aec7261.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="db763c8c-3c66-475a-b220-f5525772ce7d",o._sentryDebugIdIdentifier="sentry-dbid-db763c8c-3c66-475a-b220-f5525772ce7d")}catch{}})();const K=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:e}=w(()=>z.get(n)),i=g(()=>e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.name,path:`/organizations/${e.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Editors",icon:l,path:"editors"},{name:"Billing",icon:u,path:"billing"}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:a(()=>[r(p,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:a(()=>[r(c,{class:"sidebar",sections:s})]),content:a(()=>[r(m)]),_:1})}}});export{K as default};
//# sourceMappingURL=Organization.2d20f585.js.map
