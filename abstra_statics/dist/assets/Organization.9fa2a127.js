import{S as p}from"./Sidebar.baaf77a0.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.800ae4c2.js";import{L as d,M as l,N as u}from"./icons.63ed1fb6.js";import{d as b,eB as f,H as g,a as _,b as y,c as v,w as a,f as r}from"./outputWidgets.a3cd21fd.js";import{a as w}from"./asyncComputed.cd2516c6.js";import"./router.b08cb7b1.js";import"./index.18c2c3fe.js";import{O as z}from"./organization.496318a7.js";import{B as h}from"./BaseLayout.a0c7d36c.js";import"./index.5e0e08d3.js";import"./logo.084e5d7c.js";import"./Text.ba6b186c.js";import"./Base.8b5c1cdc.js";import"./Typography.f4bbfa97.js";import"./index.74c668f6.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Form.39b7718c.js";import"./hasIn.1b139fe4.js";import"./index.cf4c23b9.js";import"./record.3334502d.js";import"./pubsub.292c438a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="1e083579-7607-4e9a-97c4-629c22449848",o._sentryDebugIdIdentifier="sentry-dbid-1e083579-7607-4e9a-97c4-629c22449848")}catch{}})();const K=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:t}=w(()=>z.get(n)),i=g(()=>t.value?[{label:"My organizations",path:"/organizations"},{label:t.value.name,path:`/organizations/${t.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing"}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:a(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:a(()=>[r(p,{class:"sidebar",sections:s})]),content:a(()=>[r(m)]),_:1})}}});export{K as default};
//# sourceMappingURL=Organization.9fa2a127.js.map
