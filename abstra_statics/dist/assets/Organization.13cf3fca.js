import{S as p}from"./Sidebar.0bdd472c.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.287a776f.js";import{u as l,v as d,x as u}from"./icons.25d75b32.js";import{d as b,eB as f,G as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.92e6243c.js";import{a as w}from"./asyncComputed.053f4ea7.js";import"./router.cbdd6622.js";import"./index.fc47bff7.js";import{O as z}from"./organization.263183e7.js";import{B as h}from"./BaseLayout.f6cb2d84.js";import"./Tooltip.0643f94c.js";import"./logo.084e5d7c.js";import"./index.a30becc0.js";import"./transButton.f2e6f0f6.js";import"./Text.abd21109.js";import"./Base.890f34b6.js";import"./Title.ea3807aa.js";import"./index.286af5e5.js";import"./record.9e86adcb.js";import"./pubsub.6da0c1b4.js";import"./gateway.8aa97b73.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="76034a76-e028-4894-9355-623f9d210965",o._sentryDebugIdIdentifier="sentry-dbid-76034a76-e028-4894-9355-623f9d210965")}catch{}})();const J=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:l,path:"projects"},{name:"Members",icon:d,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{J as default};
//# sourceMappingURL=Organization.13cf3fca.js.map
