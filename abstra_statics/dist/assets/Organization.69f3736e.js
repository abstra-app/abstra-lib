import{S as c}from"./Sidebar.275e4349.js";import{N as d}from"./Navbar.4c08def3.js";import{C as m,D as p,E as l}from"./icons.9934ec86.js";import{d as u,K as _,L as b,a as f,b as g,c as v,e as t,y,F as z,t as h}from"./registerWidgets.806e8dbb.js";import{a as w}from"./asyncComputed.587fb9ea.js";import"./gateway.c6bb77d9.js";import{O as I}from"./organization.73caff8a.js";import"./index.ced9e157.js";import"./Tooltip.95962fb9.js";import"./logo.084e5d7c.js";import"./passwordlessManager.374f37c6.js";import"./pubsub.82c690a5.js";import"./activeRecord.6e695fda.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="4dfd254c-5ac9-4298-8f75-4578798e698a",e._sentryDebugIdIdentifier="sentry-dbid-4dfd254c-5ac9-4298-8f75-4578798e698a")}catch{}})();const O={class:"organization"},D=u({__name:"Organization",setup(e){const n=_().params.organizationId,{result:o}=w(()=>I.get(n)),r=b(()=>o.value?[{label:"My organizations",path:"/organizations"},{label:o.value.name,path:`/organizations/${o.value.id}`}]:void 0),i=[{name:"Organization",items:[{name:"Projects",icon:m,path:"projects"},{name:"Members",icon:p,path:"members"},{name:"Billing",icon:l,path:"billing",unavailable:!0}]}];return(k,x)=>{const s=f("router-view");return g(),v(z,null,[t(d,{breadcrumb:r.value},null,8,["breadcrumb"]),y("div",O,[t(c,{class:"sidebar",sections:i}),t(s)])],64)}}});const $=h(D,[["__scopeId","data-v-51ce7239"]]);export{$ as default};
//# sourceMappingURL=Organization.69f3736e.js.map
