import{S as c}from"./Sidebar.5748ac1b.js";import{_ as p}from"./Navbar.vue_vue_type_script_setup_true_lang.f84ddab0.js";import{E as d,F as l,G as u}from"./icons.d4fdc2de.js";import{d as b,eB as f,H as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.e46e0ded.js";import{a as w}from"./asyncComputed.ea937eb3.js";import"./router.144e54c5.js";import"./index.736de062.js";import{O as z}from"./organization.4a3f5af9.js";import{B as h}from"./BaseLayout.d48e98d3.js";import"./index.1e8584c2.js";import"./logo.084e5d7c.js";import"./Text.dfce2b71.js";import"./Base.237a3458.js";import"./Typography.936b79d0.js";import"./index.f3a3c7d6.js";import"./FormItem.028a21cb.js";import"./hasIn.e94cc5bd.js";import"./index.cf4c23b9.js";import"./record.7c07a1e1.js";import"./pubsub.0ad51ee9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="13c7a5fc-11ec-44ea-ba5b-0155ef8308a5",e._sentryDebugIdIdentifier="sentry-dbid-13c7a5fc-11ec-44ea-ba5b-0155ef8308a5")}catch{}})();const J=b({__name:"Organization",setup(e){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing"}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(p,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(c,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{J as default};
//# sourceMappingURL=Organization.0d00535d.js.map
