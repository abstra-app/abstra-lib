import{S as p}from"./Sidebar.c6d5fac0.js";import{_ as d}from"./Navbar.vue_vue_type_script_setup_true_lang.310b5ad5.js";import{G as c,H as l,I as u}from"./icons.ae606380.js";import{d as b,ez as f,H as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.17e2270d.js";import{a as w}from"./asyncComputed.c8589796.js";import"./router.845058a4.js";import{O as z}from"./organization.07df7fdd.js";import"./columns.1320dbbc.js";import{B as h}from"./BaseLayout.0fbdf4d1.js";import"./Tooltip.dda20d9d.js";import"./logo.084e5d7c.js";import"./index.23cb8791.js";import"./Title.7b6ce571.js";import"./index.34b7172c.js";import"./index.038579df.js";import"./index.4787064b.js";import"./gateway.deb7dadd.js";import"./activeRecord.1230459a.js";import"./pubsub.52f6192d.js";import"./index.f4ac7424.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="39644ed3-779e-4058-a492-cf080d0bdad1",e._sentryDebugIdIdentifier="sentry-dbid-39644ed3-779e-4058-a492-cf080d0bdad1")}catch{}})();const J=b({__name:"Organization",setup(e){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:c,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(d,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{J as default};
//# sourceMappingURL=Organization.cf8c184c.js.map
