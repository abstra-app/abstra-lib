import{S as p}from"./Sidebar.da8da923.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.4704698b.js";import{G as d,H as l,I as u}from"./icons.54b54949.js";import{d as b,ez as f,F as g,a as _,b as y,c as v,w as a,f as r}from"./outputWidgets.34c6efe4.js";import{a as z}from"./asyncComputed.c2993a02.js";import"./router.5e015991.js";import"./jwt-decode.esm.74bd4619.js";import"./index.56db27ff.js";import{O as w}from"./organization.22809403.js";import{B as I}from"./BaseLayout.23e4d3ee.js";import"./index.95a2f4e1.js";import"./logo.084e5d7c.js";import"./Text.4d22598c.js";import"./index.93eb5533.js";import"./FormItem.87557e8f.js";import"./hasIn.7f8c0878.js";import"./storage.f2a353cd.js";import"./index.b5389b8f.js";import"./index.cf4c23b9.js";import"./record.24a52f99.js";import"./pubsub.7392fe5a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="b7455c1e-0d24-4729-b1f8-bce9de27dae5",e._sentryDebugIdIdentifier="sentry-dbid-b7455c1e-0d24-4729-b1f8-bce9de27dae5")}catch{}})();const K=b({__name:"Organization",setup(e){const n=f().params.organizationId,{result:t}=z(()=>w.get(n)),i=g(()=>t.value?[{label:"My organizations",path:"/organizations"},{label:t.value.name,path:`/organizations/${t.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing"}]}];return(h,B)=>{const m=_("router-view");return y(),v(I,null,{navbar:a(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:a(()=>[r(p,{class:"sidebar",sections:s})]),content:a(()=>[r(m)]),_:1})}}});export{K as default};
//# sourceMappingURL=Organization.60810e84.js.map
