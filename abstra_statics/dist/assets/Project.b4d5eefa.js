import{S as p}from"./Sidebar.5f0afb8c.js";import{N as u}from"./Navbar.a3a83fd3.js";import{J as d,F as v,K as _,L as g,M as b,G as f,H as h,I as j}from"./icons.e3de8035.js";import{a as n}from"./asyncComputed.0adffaf6.js";import{P as z}from"./project.8394fcae.js";import"./utils.f02a47e6.js";import{O as I}from"./organization.99ca3e7f.js";import{d as P,K as r,aq as y,b as k,c as x,e as t,z as i,x as B,F as $,J as w,a as M,q as N}from"./registerWidgets.bb4c7eff.js";import"./Tooltip.e8984c12.js";import"./logo.084e5d7c.js";import"./passwordlessManager.a806df6a.js";import"./pubsub.a0411919.js";const S={class:"project"},C=P({__name:"Project",setup(E){const c=w().params.projectId,{result:e}=n(()=>z.get(c)),{result:a}=n(()=>e.value?I.get(e.value.organizationId):Promise.resolve(null)),s=r(()=>{var o;return a.value&&e.value?[{label:(o=a.value)==null?void 0:o.name,path:`/organizations/${a.value.id}`},{label:e.value.name,path:`/projects/${e.value.id}`}]:void 0});y(()=>{console.log(s.value)});const l=r(()=>e.value?[{name:"Project",items:[{name:"Builds",path:"builds",icon:d},{name:"API Keys",path:"api-keys",icon:v},{name:"Env Vars",path:"env-vars",icon:_},{name:"Logs",icon:g,unavailable:!0,path:"logs"},{name:"Settings",icon:b,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:f,path:`/organizations/${e.value.organizationId}/projects`},{name:"Members",icon:h,path:`/organizations/${e.value.organizationId}/members`},{name:"Billing",icon:j,path:`/organizations/${e.value.organizationId}/billing`,unavailable:!0}]}]:[]);return(o,K)=>{const m=M("router-view");return k(),x($,null,[t(u,{class:"nav",breadcrumb:i(s)},null,8,["breadcrumb"]),B("div",S,[t(p,{class:"sidebar",sections:i(l)},null,8,["sections"]),t(m)])],64)}}});const U=N(C,[["__scopeId","data-v-a45eec8c"]]);export{U as default};
//# sourceMappingURL=Project.b4d5eefa.js.map
