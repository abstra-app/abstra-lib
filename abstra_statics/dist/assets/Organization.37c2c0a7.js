import{S as p}from"./Sidebar.0a8c9605.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.42393706.js";import{G as d,H as l,I as u}from"./icons.a32e4022.js";import{d as b,ez as f,H as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.85da7913.js";import{a as w}from"./asyncComputed.4d91bb6c.js";import"./router.0af07e2a.js";import{O as z}from"./organization.43dcdf91.js";import"./columns.0c4377ba.js";import{B as h}from"./BaseLayout.e73c27d6.js";import"./Tooltip.aa74ccdb.js";import"./logo.084e5d7c.js";import"./Text.a44c7e65.js";import"./Title.affe633f.js";import"./transButton.a4c9888b.js";import"./index.02ac1740.js";import"./index.12704bcf.js";import"./Form.4439f3fc.js";import"./index.3f10ce62.js";import"./gateway.8ab62921.js";import"./activeRecord.f0bd1bcd.js";import"./pubsub.1ed2222f.js";import"./index.f4ac7424.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="25ccaed8-e06f-4900-a359-891db1750b9e",e._sentryDebugIdIdentifier="sentry-dbid-25ccaed8-e06f-4900-a359-891db1750b9e")}catch{}})();const Q=b({__name:"Organization",setup(e){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{Q as default};
//# sourceMappingURL=Organization.37c2c0a7.js.map
