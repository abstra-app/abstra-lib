import{S as d}from"./Sidebar.0738ea9a.js";import{N as m}from"./Navbar.3b994e79.js";import{E as p,F as l,G as b}from"./icons.521369d2.js";import{d as u,K as _,b as f,c as g,e as t,z as r,x as v,F as y,J as z,a as w,q as I}from"./registerWidgets.721ab253.js";import{a as h}from"./asyncComputed.6c31a589.js";import"./gateway.da612286.js";import{O}from"./organization.422df8a3.js";import"./index.b7996c5e.js";import"./Tooltip.c44c4029.js";import"./logo.084e5d7c.js";import"./passwordlessManager.40333042.js";import"./pubsub.38a955d6.js";import"./activeRecord.8d4d6999.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="dfe9027d-bc93-4f06-b4b7-e638abdb8725",e._sentryDebugIdIdentifier="sentry-dbid-dfe9027d-bc93-4f06-b4b7-e638abdb8725")}catch{}})();const x={class:"organization"},k=u({__name:"Organization",setup(e){const n=z().params.organizationId,{result:a}=h(()=>O.get(n)),s=_(()=>a.value?[{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),i=[{name:"Organization",items:[{name:"Projects",icon:p,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:b,path:"billing",unavailable:!0}]}];return(B,D)=>{const c=w("router-view");return f(),g(y,null,[t(m,{breadcrumb:r(s)},null,8,["breadcrumb"]),v("div",x,[t(d,{class:"sidebar",sections:r(i)},null,8,["sections"]),t(c)])],64)}}});const R=I(k,[["__scopeId","data-v-7eef90b7"]]);export{R as default};
//# sourceMappingURL=Organization.31a083ef.js.map
