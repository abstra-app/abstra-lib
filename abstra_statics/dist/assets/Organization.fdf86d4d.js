import{S as p}from"./Sidebar.cd2c78f8.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.0f6c054b.js";import{F as l,G as u,H as b}from"./icons.19b30445.js";import{d,ey as f,H as g,a as _,b as y,c as v,w as t,f as r}from"./registerWidgets.fdefa7fb.js";import{a as w}from"./asyncComputed.cd0c630d.js";import"./gateway.092968df.js";import{O as z}from"./organization.e141e0a8.js";import"./index.b99c3901.js";import{B as h}from"./BaseLayout.0aadb9c6.js";import"./Tooltip.174eb31f.js";import"./logo.084e5d7c.js";import"./passwordlessManager.442c59fd.js";import"./pubsub.41646617.js";import"./storage.33b83663.js";import"./index.ec792adf.js";import"./Title.cdb29e3b.js";import"./index.8c8d6366.js";import"./index.265e0c6b.js";import"./activeRecord.bfebc154.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="b463cfef-13eb-4f4b-998e-36507e25f693",e._sentryDebugIdIdentifier="sentry-dbid-b463cfef-13eb-4f4b-998e-36507e25f693")}catch{}})();const A=d({__name:"Organization",setup(e){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:l,path:"projects"},{name:"Members",icon:u,path:"members"},{name:"Billing",icon:b,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{A as default};
//# sourceMappingURL=Organization.fdf86d4d.js.map
