import{S as p}from"./Sidebar.6c420daa.js";import{_ as d}from"./Navbar.vue_vue_type_script_setup_true_lang.ef73f8b9.js";import{L as c,M as l,N as u}from"./icons.df70cc36.js";import{d as b,eB as f,H as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.3b5544a6.js";import{a as w}from"./asyncComputed.31721c4c.js";import"./router.3a7d33dd.js";import"./index.3fed70db.js";import{O as z}from"./organization.ea197514.js";import{B as h}from"./BaseLayout.1c1dd76c.js";import"./index.6e4724f1.js";import"./logo.084e5d7c.js";import"./Text.4f034af0.js";import"./Base.ed5c11ff.js";import"./Typography.c58b2a2b.js";import"./index.2f5e8d55.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Form.3820cb93.js";import"./hasIn.98da9760.js";import"./index.cf4c23b9.js";import"./record.87959be0.js";import"./pubsub.3378c421.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="ee9a74f8-ab30-4366-ad10-d0d3d4e84d4f",o._sentryDebugIdIdentifier="sentry-dbid-ee9a74f8-ab30-4366-ad10-d0d3d4e84d4f")}catch{}})();const K=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:c,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing"}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(d,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{K as default};
//# sourceMappingURL=Organization.325f003b.js.map
