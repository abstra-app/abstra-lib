import{S as p}from"./Sidebar.07f4b89b.js";import{N as u}from"./Navbar.a1669887.js";import{I as d,E as v,J as _,K as g,L as b,F as f,G as h,H as j}from"./icons.1dc8a69b.js";import{a as n}from"./asyncComputed.1364aaa9.js";import{P as z}from"./project.decc3b4d.js";import"./utils.d92e4b23.js";import{O as I}from"./organization.b6064e11.js";import{d as P,K as r,ap as y,b as k,c as x,e as t,z as i,x as B,F as $,J as w,a as E,q as N}from"./registerWidgets.802bba2f.js";import"./Tooltip.345f0ce8.js";import"./logo.084e5d7c.js";import"./passwordlessManager.d5134797.js";import"./pubsub.a0411919.js";const S={class:"project"},C=P({__name:"Project",setup(F){const l=w().params.projectId,{result:e}=n(()=>z.get(l)),{result:a}=n(()=>e.value?I.get(e.value.organizationId):Promise.resolve(null)),s=r(()=>{var o;return a.value&&e.value?[{label:(o=a.value)==null?void 0:o.name,path:`/organizations/${a.value.id}`},{label:e.value.name,path:`/projects/${e.value.id}`}]:void 0});y(()=>{console.log(s.value)});const c=r(()=>e.value?[{name:"Project",items:[{name:"Builds",path:"builds",icon:d},{name:"API Keys",path:"api-keys",icon:v},{name:"Env Vars",path:"env-vars",icon:_},{name:"Logs",icon:g,unavailable:!0,path:"logs"},{name:"Settings",icon:b,unavailable:!0,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:f,path:`/organizations/${e.value.organizationId}/projects`},{name:"Members",icon:h,path:`/organizations/${e.value.organizationId}/members`},{name:"Billing",icon:j,path:`/organizations/${e.value.organizationId}/billing`,unavailable:!0}]}]:[]);return(o,L)=>{const m=E("router-view");return k(),x($,null,[t(u,{class:"nav",breadcrumb:i(s)},null,8,["breadcrumb"]),B("div",S,[t(p,{class:"sidebar",sections:i(c)},null,8,["sections"]),t(m)])],64)}}});const U=N(C,[["__scopeId","data-v-d700e412"]]);export{U as default};
//# sourceMappingURL=Project.1d401563.js.map
