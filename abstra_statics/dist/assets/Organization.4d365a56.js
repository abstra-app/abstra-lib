import{S as m}from"./Sidebar.5f0afb8c.js";import{N as p}from"./Navbar.a3a83fd3.js";import{G as d,H as l,I as _}from"./icons.e3de8035.js";import{d as u,K as b,b as g,c as v,e,z as t,x as s,w as f,F as z,J as h,a as I,O,Q as w,q as x}from"./registerWidgets.bb4c7eff.js";import{a as S}from"./asyncComputed.0adffaf6.js";import"./gateway.99ed1590.js";import{O as y}from"./organization.d2c39bb5.js";import"./Tooltip.e8984c12.js";import"./logo.084e5d7c.js";import"./passwordlessManager.a806df6a.js";import"./activeRecord.57c6bf02.js";const B=a=>(O("data-v-580769d7"),a=a(),w(),a),C={class:"organization"},N=B(()=>s("div",null,"div",-1)),k=u({__name:"Organization",setup(a){const n=h().params.organizationId,{result:o}=S(()=>y.get(n)),r=b(()=>o.value?[{label:o.value.name,path:`/organizations/${o.value.id}`}]:void 0),i=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:_,path:"billing",unavailable:!0}]}];return(F,M)=>{const c=I("router-view");return g(),v(z,null,[e(p,{breadcrumb:t(r)},null,8,["breadcrumb"]),s("div",C,[e(m,{class:"sidebar",sections:t(i)},{default:f(()=>[N]),_:1},8,["sections"]),e(c)])],64)}}});const A=x(k,[["__scopeId","data-v-580769d7"]]);export{A as default};
//# sourceMappingURL=Organization.4d365a56.js.map
