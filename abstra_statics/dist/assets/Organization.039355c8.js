import{S as p}from"./Sidebar.c207837c.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.905048c8.js";import{F as l,G as u,H as b}from"./icons.4ed83c58.js";import{d,eA as f,J as g,a as _,b as y,c as v,w as r,f as a}from"./outputWidgets.b9aa154a.js";import{a as w}from"./asyncComputed.9bda3979.js";import"./console.ee73e2aa.js";import{O as z}from"./organization.b0d8127b.js";import"./index.4d631048.js";import{B as h}from"./BaseLayout.ddf81c1c.js";import"./Tooltip.634a9437.js";import"./logo.084e5d7c.js";import"./index.55488473.js";import"./Title.6cd833fd.js";import"./index.6b140cad.js";import"./index.74d4e484.js";import"./index.ade1bec6.js";import"./Form.55f226f4.js";import"./index.29aa7167.js";import"./dayjs.d2a09bae.js";import"./index.ea68e603.js";import"./index.bb85a084.js";import"./TabPane.3d00468a.js";import"./index.ab1855db.js";import"./index.14f3ef13.js";import"./index.eb23b22d.js";import"./index.45ef6041.js";import"./index.45ac8fb9.js";import"./index.004b987c.js";import"./index.23063916.js";import"./gateway.5aa82c5f.js";import"./activeRecord.8939db5d.js";import"./pubsub.967f482a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="916e571b-62be-47e4-99ca-806f67f2b196",o._sentryDebugIdIdentifier="sentry-dbid-916e571b-62be-47e4-99ca-806f67f2b196")}catch{}})();const ro=d({__name:"Organization",setup(o){const i=f().params.organizationId,{result:e}=w(()=>z.get(i)),n=g(()=>e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.name,path:`/organizations/${e.value.id}`}]:void 0),m=[{name:"Organization",items:[{name:"Projects",icon:l,path:"projects"},{name:"Members",icon:u,path:"members"},{name:"Billing",icon:b,path:"billing",unavailable:!0}]}];return(I,B)=>{const s=_("router-view");return y(),v(h,null,{navbar:r(()=>[a(c,{breadcrumb:n.value},null,8,["breadcrumb"])]),sidebar:r(()=>[a(p,{class:"sidebar",sections:m})]),content:r(()=>[a(s)]),_:1})}}});export{ro as default};
//# sourceMappingURL=Organization.039355c8.js.map
