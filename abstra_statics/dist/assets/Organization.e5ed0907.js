import{S as c}from"./Sidebar.608dc888.js";import{_ as p}from"./Navbar.vue_vue_type_script_setup_true_lang.37c6b34f.js";import{u as d,v as l,x as u}from"./icons.3869c437.js";import{d as f,eB as b,G as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.84fd06fb.js";import{a as w}from"./asyncComputed.da204aa5.js";import"./router.a59cab44.js";import"./index.0bfee40a.js";import{O as z}from"./organization.4a0219c9.js";import{B as h}from"./BaseLayout.f10be94e.js";import"./Tooltip.34ecc8fc.js";import"./logo.084e5d7c.js";import"./index.85c4f2b4.js";import"./transButton.64565967.js";import"./Text.9dbcc31d.js";import"./Base.67ffff63.js";import"./Title.564982df.js";import"./index.a606b6d8.js";import"./record.f0008bb4.js";import"./pubsub.8883f68b.js";import"./gateway.82cdc40d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="f47f7fd9-df97-4229-840e-35cc11a0dccd",o._sentryDebugIdIdentifier="sentry-dbid-f47f7fd9-df97-4229-840e-35cc11a0dccd")}catch{}})();const J=f({__name:"Organization",setup(o){const n=b().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(p,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(c,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{J as default};
//# sourceMappingURL=Organization.e5ed0907.js.map
