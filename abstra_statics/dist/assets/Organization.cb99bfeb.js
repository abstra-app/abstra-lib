import{S as p}from"./Sidebar.afa62156.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.aa334900.js";import{u as l,v as d,x as u}from"./icons.715dfb53.js";import{d as b,eB as f,G as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.5836624b.js";import{a as w}from"./asyncComputed.134d378f.js";import"./router.6746eb60.js";import{O as z}from"./organization.5280e42d.js";import"./columns.4caf6e41.js";import{B as h}from"./BaseLayout.9b7c0fae.js";import"./Tooltip.858b8c8c.js";import"./logo.084e5d7c.js";import"./index.c1743435.js";import"./transButton.c5f8a15c.js";import"./Text.f4671d75.js";import"./Base.e549b429.js";import"./Title.5e396b16.js";import"./index.ba80cfa7.js";import"./gateway.681b899a.js";import"./record.07dfd257.js";import"./pubsub.a82123ee.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="5ffd17c7-4eee-4b0b-8a3e-4337f616f800",e._sentryDebugIdIdentifier="sentry-dbid-5ffd17c7-4eee-4b0b-8a3e-4337f616f800")}catch{}})();const J=b({__name:"Organization",setup(e){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:l,path:"projects"},{name:"Members",icon:d,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{J as default};
//# sourceMappingURL=Organization.cb99bfeb.js.map
