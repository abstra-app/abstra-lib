import{_ as B}from"./logo.084e5d7c.js";import{t as C,b as r,eu as y,eE as I,eF as w,e as h,d as k,eA as L,a as D,u as e,c,bu as S,w as t,f as o,aq as l,eD as i,bU as m,cF as b,cB as N,eH as V,eC as E,eY as F,a_ as R,ew as H}from"./outputWidgets.917fb4ad.js";import{b as g}from"./router.573df02a.js";import{a as P}from"./asyncComputed.d5275e24.js";import{A as T,B as U,a as $,c as j}from"./index.0a641d0d.js";import{c as q}from"./Text.f6205589.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="050a3688-6f5d-41e6-a70f-aa299c69048f",a._sentryDebugIdIdentifier="sentry-dbid-050a3688-6f5d-41e6-a70f-aa299c69048f")}catch{}})();const M={},v=a=>(I("data-v-439be421"),a=a(),w(),a),Y={class:"logo"},z=v(()=>h("img",{class:"logo-img",src:B,alt:"Abstra cloud logo"},null,-1)),G=v(()=>h("span",null,"Abstra Cloud",-1)),J=[z,G];function K(a,s){return r(),y("div",Y,J)}const O=C(M,[["render",K],["__scopeId","data-v-439be421"]]),Q=k({__name:"LoginBlock",setup(a){function s(p){const f=p.split("@")[0];return V.exports.kebabCase(f).toUpperCase().split("-").slice(0,2).map(_=>_[0]).join("")}const u=L(),{result:n,loading:d,refetch:A}=P(async()=>g.getAuthor());function x(){g.removeAuthor(),A(),u.push({name:"login"})}return(p,f)=>{const _=D("router-link");return e(d)?(r(),c(e(S),{key:0})):e(n)?(r(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[o(e(b),{direction:"vertical"},{default:t(()=>[o(e(q),null,{default:t(()=>[l(i(e(n).claims.email),1)]),_:1}),o(e(m),{onClick:x},{default:t(()=>[l("Logout")]),_:1})]),_:1})]),default:t(()=>[o(e(b),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(T),null,{default:t(()=>[l(i(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),c(e(m),{key:2},{default:t(()=>[o(_,{to:"/login"},{default:t(()=>[l("Login")]),_:1})]),_:1}))}}}),oe=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(s,u)=>(r(),c(e(j),{style:{padding:"5px 10px"}},{breadcrumb:t(()=>[s.breadcrumb?(r(),c(e(U),{key:0},{default:t(()=>[(r(!0),y(R,null,E(s.breadcrumb,(n,d)=>(r(),c(e($),{key:d},{default:t(()=>[o(e(F),{to:n.path},{default:t(()=>[l(i(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):H("",!0)]),title:t(()=>[o(O)]),extra:t(()=>[o(Q)]),_:1}))}});export{oe as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.0665f47e.js.map
