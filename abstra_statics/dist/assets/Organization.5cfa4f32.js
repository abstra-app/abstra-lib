import{S as p}from"./Sidebar.3d434e83.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.206ffdeb.js";import{F as l,G as d,H as u}from"./icons.20b5fc8a.js";import{d as b,eA as f,J as g,a as _,b as y,c as v,w as e,f as a}from"./outputWidgets.d6897520.js";import{a as w}from"./asyncComputed.2c363ccc.js";import"./console.526446d9.js";import{O as z}from"./organization.1bd1ec32.js";import"./index.a8a303e6.js";import{B as h}from"./BaseLayout.a0b2c3e1.js";import"./Tooltip.446f8c24.js";import"./logo.084e5d7c.js";import"./index.59123055.js";import"./Title.9e102f51.js";import"./index.dcf9fd0a.js";import"./index.65fddafd.js";import"./index.40bea6c2.js";import"./Form.a2bccbf0.js";import"./index.09e1dc09.js";import"./dayjs.dccbdd6f.js";import"./index.0f5fc52a.js";import"./index.fd09b35e.js";import"./TabPane.c8258ec5.js";import"./index.b11f642a.js";import"./index.7c1a9101.js";import"./index.e63bacfa.js";import"./index.30191c77.js";import"./index.33e7eca5.js";import"./index.16598f32.js";import"./index.a2784b6b.js";import"./gateway.c13063b9.js";import"./activeRecord.e97440b4.js";import"./pubsub.e0b33cd4.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="9bf41b2a-7371-4d8c-8685-f3961c7e2cfc",o._sentryDebugIdIdentifier="sentry-dbid-9bf41b2a-7371-4d8c-8685-f3961c7e2cfc")}catch{}})();const eo=b({__name:"Organization",setup(o){const i=f().params.organizationId,{result:r}=w(()=>z.get(i)),n=g(()=>r.value?[{label:"My organizations",path:"/organizations"},{label:r.value.name,path:`/organizations/${r.value.id}`}]:void 0),m=[{name:"Organization",items:[{name:"Projects",icon:l,path:"projects"},{name:"Members",icon:d,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const s=_("router-view");return y(),v(h,null,{navbar:e(()=>[a(c,{breadcrumb:n.value},null,8,["breadcrumb"])]),sidebar:e(()=>[a(p,{class:"sidebar",sections:m})]),content:e(()=>[a(s)]),_:1})}}});export{eo as default};
//# sourceMappingURL=Organization.5cfa4f32.js.map
