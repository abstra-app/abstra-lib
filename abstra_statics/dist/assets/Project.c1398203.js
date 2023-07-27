import{d as b,K as i,b as _,c as g,e as s,z as c,x as l,F as v,J as f,a as y,q as h}from"./registerWidgets.2bf05ebf.js";import{a as p}from"./asyncComputed.62d26af7.js";import{P as I}from"./project.44e663d9.js";import"./gateway.61c8f3b2.js";import{O as j}from"./organization.17d2d71f.js";import{N as z}from"./Navbar.46fbd38e.js";import{S as w}from"./Sidebar.9c6fc9a0.js";import{I as P,E as k,J as x,K as B,L as $,F as D,G as E,H as N}from"./icons.2362754f.js";import"./activeRecord.ffd94d66.js";import"./passwordlessManager.08604e70.js";import"./logo.084e5d7c.js";import"./Tooltip.98630364.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="3e340ead-fcce-4405-b3e9-98ae66ac05cb",a._sentryDebugIdIdentifier="sentry-dbid-3e340ead-fcce-4405-b3e9-98ae66ac05cb")}catch{}})();const S={class:"project"},C={class:"content-wrapper"},F=b({__name:"Project",setup(a){const r=f().params.projectId,{result:e}=p(()=>I.get(r)),{result:t}=p(()=>e.value?j.get(e.value.organizationId):Promise.resolve(null)),m=i(()=>{var n;return t.value&&e.value?[{label:(n=t.value)==null?void 0:n.name,path:`/organizations/${t.value.id}`},{label:e.value.name,path:`/projects/${e.value.id}`}]:void 0}),d=i(()=>e.value?[{name:"Project",items:[{name:"Builds",path:"builds",icon:P},{name:"API Keys",path:"api-keys",icon:k},{name:"Env Vars",path:"env-vars",icon:x},{name:"Logs",icon:B,path:"logs",beta:!0},{name:"Settings",icon:$,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:D,path:`/organizations/${e.value.organizationId}/projects`},{name:"Members",icon:E,path:`/organizations/${e.value.organizationId}/members`},{name:"Billing",icon:N,path:`/organizations/${e.value.organizationId}/billing`,unavailable:!0}]}]:[]);return(n,K)=>{const u=y("router-view");return _(),g(v,null,[s(z,{class:"nav",breadcrumb:c(m)},null,8,["breadcrumb"]),l("div",S,[s(w,{class:"sidebar",sections:c(d)},null,8,["sections"]),l("div",C,[s(u)])])],64)}}});const U=h(F,[["__scopeId","data-v-cfb4011f"]]);export{U as default};
//# sourceMappingURL=Project.c1398203.js.map
