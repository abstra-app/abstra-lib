import{_ as x}from"./logo.084e5d7c.js";import{t as C,b as s,et as y,eC as I,eD as w,e as h,d as k,ey as L,a as D,u as e,c,bB as S,w as t,f as o,aA as l,eB as i,bZ as f,cB as N,eF as V,eA as R,e_ as T,b8 as E,ev as F}from"./outputWidgets.0fb707c7.js";import{a as b}from"./router.81de177d.js";import{a as P}from"./asyncComputed.a0ca296c.js";import{a as $}from"./Text.3ec0a64d.js";import{A as g}from"./index.a2e845fd.js";import{A as j,B as H,a as M,c as U}from"./index.ebe62e37.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="04dcebc6-aa86-4a3a-a2ad-f6a74b300c56",a._sentryDebugIdIdentifier="sentry-dbid-04dcebc6-aa86-4a3a-a2ad-f6a74b300c56")}catch{}})();const Z={},A=a=>(I("data-v-439be421"),a=a(),w(),a),q={class:"logo"},z=A(()=>h("img",{class:"logo-img",src:x,alt:"Abstra cloud logo"},null,-1)),G=A(()=>h("span",null,"Abstra Cloud",-1)),J=[z,G];function K(a,r){return s(),y("div",q,J)}const O=C(Z,[["render",K],["__scopeId","data-v-439be421"]]),Q=k({__name:"LoginBlock",setup(a){function r(p){const m=p.split("@")[0];return V.exports.kebabCase(m).toUpperCase().split("-").slice(0,2).map(_=>_[0]).join("")}const d=L(),{result:n,loading:u,refetch:v}=P(async()=>b.getAuthor());function B(){b.removeAuthor(),v(),d.push({name:"login"})}return(p,m)=>{const _=D("router-link");return e(u)?(s(),c(e(S),{key:0})):e(n)?(s(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[o(e(g),{direction:"vertical"},{default:t(()=>[o(e($),null,{default:t(()=>[l(i(e(n).claims.email),1)]),_:1}),o(e(f),{onClick:B},{default:t(()=>[l("Logout")]),_:1})]),_:1})]),default:t(()=>[o(e(g),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(j),null,{default:t(()=>[l(i(r(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(s(),c(e(f),{key:2},{default:t(()=>[o(_,{to:"/login"},{default:t(()=>[l("Login")]),_:1})]),_:1}))}}}),re=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(r,d)=>(s(),c(e(U),{style:{padding:"5px 10px"}},{breadcrumb:t(()=>[r.breadcrumb?(s(),c(e(H),{key:0},{default:t(()=>[(s(!0),y(E,null,R(r.breadcrumb,(n,u)=>(s(),c(e(M),{key:u},{default:t(()=>[o(e(T),{to:n.path},{default:t(()=>[l(i(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):F("",!0)]),title:t(()=>[o(O)]),extra:t(()=>[o(Q)]),_:1}))}});export{re as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.78422c92.js.map
