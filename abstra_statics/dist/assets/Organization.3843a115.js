import{S as p}from"./Sidebar.0a2dc6f9.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.667e41af.js";import{v as d,x as l,y as u}from"./icons.099e1dc7.js";import{d as b,eB as f,G as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.a5da60a6.js";import{a as w}from"./asyncComputed.58f10dc0.js";import"./router.0b3c4665.js";import{O as z}from"./organization.2d870a88.js";import"./columns.5e2d6f72.js";import{B as h}from"./BaseLayout.3a4636c5.js";import"./Tooltip.1a511145.js";import"./logo.084e5d7c.js";import"./index.79eb7de6.js";import"./transButton.e35d2398.js";import"./Text.c76a501a.js";import"./Base.972c82de.js";import"./Title.2a7ef296.js";import"./index.6946a4fd.js";import"./gateway.97784f17.js";import"./activeRecord.1c0a77e0.js";import"./pubsub.00298000.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="7252ff05-95bb-4752-aed4-0ed829a20cf3",e._sentryDebugIdIdentifier="sentry-dbid-7252ff05-95bb-4752-aed4-0ed829a20cf3")}catch{}})();const J=b({__name:"Organization",setup(e){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{J as default};
//# sourceMappingURL=Organization.3843a115.js.map
