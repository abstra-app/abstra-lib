import{S as p}from"./Sidebar.02818b47.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.f45c9a99.js";import{G as d,H as b,I as l}from"./icons.8c1a3aa6.js";import{d as u,eB as f,G as g,a as _,b as y,c as v,w as a,f as r}from"./outputWidgets.21bbcff1.js";import{a as w}from"./asyncComputed.e9b58baf.js";import"./router.2820c665.js";import"./index.492bb477.js";import{O as z}from"./organization.3426732b.js";import{B as I}from"./BaseLayout.30f4c395.js";import"./index.cf01b44a.js";import"./logo.084e5d7c.js";import"./Text.192b7616.js";import"./index.f75d9dff.js";import"./FormItem.72c7e0f5.js";import"./hasIn.e0cb731c.js";import"./index.179e1961.js";import"./index.cf4c23b9.js";import"./record.9f045685.js";import"./pubsub.8056e5e5.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="46132693-bf2d-4db9-9510-9101fbcb15a9",o._sentryDebugIdIdentifier="sentry-dbid-46132693-bf2d-4db9-9510-9101fbcb15a9")}catch{}})();const F=u({__name:"Organization",setup(o){const n=f().params.organizationId,{result:t}=w(()=>z.get(n)),i=g(()=>t.value?[{label:"My organizations",path:"/organizations"},{label:t.value.name,path:`/organizations/${t.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:b,path:"members"},{name:"Billing",icon:l,path:"billing"}]}];return(h,B)=>{const m=_("router-view");return y(),v(I,null,{navbar:a(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:a(()=>[r(p,{class:"sidebar",sections:s})]),content:a(()=>[r(m)]),_:1})}}});export{F as default};
//# sourceMappingURL=Organization.da094a74.js.map
