import{S as c}from"./Sidebar.cd1ee47b.js";import{N as d}from"./Navbar.7e85decb.js";import{C as m,D as p,E as l}from"./icons.0e6d127e.js";import{d as u,K as b,L as f,a as _,b as g,c as v,e as t,y,F as z,t as h}from"./registerWidgets.a3d0cc27.js";import{a as w}from"./asyncComputed.0e523587.js";import"./gateway.42e4db37.js";import{O as I}from"./organization.dc2cabfe.js";import"./index.4ddf1360.js";import"./Tooltip.34bd929e.js";import"./logo.084e5d7c.js";import"./passwordlessManager.4da52a14.js";import"./pubsub.69586faa.js";import"./activeRecord.a6fcfbc1.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="b6f7f101-f14c-4be2-a80b-5edf9eb3ed2f",e._sentryDebugIdIdentifier="sentry-dbid-b6f7f101-f14c-4be2-a80b-5edf9eb3ed2f")}catch{}})();const O={class:"organization"},D=u({__name:"Organization",setup(e){const n=b().params.organizationId,{result:o}=w(()=>I.get(n)),r=f(()=>o.value?[{label:"My organizations",path:"/organizations"},{label:o.value.name,path:`/organizations/${o.value.id}`}]:void 0),i=[{name:"Organization",items:[{name:"Projects",icon:m,path:"projects"},{name:"Members",icon:p,path:"members"},{name:"Billing",icon:l,path:"billing",unavailable:!0}]}];return(k,x)=>{const s=_("router-view");return g(),v(z,null,[t(d,{breadcrumb:r.value},null,8,["breadcrumb"]),y("div",O,[t(c,{class:"sidebar",sections:i}),t(s)])],64)}}});const $=h(D,[["__scopeId","data-v-51ce7239"]]);export{$ as default};
//# sourceMappingURL=Organization.0d6339b6.js.map
