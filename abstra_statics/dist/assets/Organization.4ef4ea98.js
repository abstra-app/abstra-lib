import{S as p}from"./Sidebar.5fb541cc.js";import{_ as d}from"./Navbar.vue_vue_type_script_setup_true_lang.92a7cbf3.js";import{L as c,M as l,N as u}from"./icons.9b000560.js";import{d as b,eB as f,H as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.aff95ef3.js";import{a as w}from"./asyncComputed.20ee3174.js";import"./router.9da7302f.js";import"./index.bdfb2b09.js";import{O as z}from"./organization.88bd6991.js";import{B as h}from"./BaseLayout.a0233fae.js";import"./index.d203a4f6.js";import"./logo.084e5d7c.js";import"./Text.da7d6e49.js";import"./Base.0c246aee.js";import"./Typography.60000f40.js";import"./index.00fb47d6.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Form.57f174d1.js";import"./hasIn.59f3ceea.js";import"./index.cf4c23b9.js";import"./record.b43eab04.js";import"./pubsub.3b8860eb.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="c316ae6f-d4a4-44ed-870d-56661d76a7e4",o._sentryDebugIdIdentifier="sentry-dbid-c316ae6f-d4a4-44ed-870d-56661d76a7e4")}catch{}})();const K=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:c,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing"}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(d,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{K as default};
//# sourceMappingURL=Organization.4ef4ea98.js.map
