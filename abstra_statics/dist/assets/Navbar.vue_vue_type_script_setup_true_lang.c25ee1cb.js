import{_ as C}from"./logo.084e5d7c.js";import{t as I,b as r,eu as y,eE as w,eF as B,e as h,d as k,eA as L,a as D,u as e,c,bu as S,w as t,f as o,aq as d,eD as i,bU as m,cE as b,cA as N,eH as E,eC as V,eY as R,a_ as F,ew as H}from"./outputWidgets.e4740a46.js";import{b as g}from"./router.793abf88.js";import{a as P}from"./asyncComputed.d2f778f6.js";import{A as T,B as U,a as $,c as j}from"./index.de07fc0e.js";import{c as q}from"./Text.27a734ce.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="4d1d6a3f-fe10-44f1-b983-a266eb4344fd",a._sentryDebugIdIdentifier="sentry-dbid-4d1d6a3f-fe10-44f1-b983-a266eb4344fd")}catch{}})();const M={},A=a=>(w("data-v-439be421"),a=a(),B(),a),Y={class:"logo"},z=A(()=>h("img",{class:"logo-img",src:C,alt:"Abstra cloud logo"},null,-1)),G=A(()=>h("span",null,"Abstra Cloud",-1)),J=[z,G];function K(a,s){return r(),y("div",Y,J)}const O=I(M,[["render",K],["__scopeId","data-v-439be421"]]),Q=k({__name:"LoginBlock",setup(a){function s(p){const f=p.split("@")[0];return E.exports.kebabCase(f).toUpperCase().split("-").slice(0,2).map(_=>_[0]).join("")}const l=L(),{result:n,loading:u,refetch:v}=P(async()=>g.getAuthor());function x(){g.removeAuthor(),v(),l.push({name:"login"})}return(p,f)=>{const _=D("router-link");return e(u)?(r(),c(e(S),{key:0})):e(n)?(r(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[o(e(b),{direction:"vertical"},{default:t(()=>[o(e(q),null,{default:t(()=>[d(i(e(n).claims.email),1)]),_:1}),o(e(m),{onClick:x},{default:t(()=>[d("Logout")]),_:1})]),_:1})]),default:t(()=>[o(e(b),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(T),null,{default:t(()=>[d(i(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),c(e(m),{key:2},{default:t(()=>[o(_,{to:"/login"},{default:t(()=>[d("Login")]),_:1})]),_:1}))}}}),oe=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(s,l)=>(r(),c(e(j),{style:{padding:"5px 10px"}},{breadcrumb:t(()=>[s.breadcrumb?(r(),c(e(U),{key:0},{default:t(()=>[(r(!0),y(F,null,V(s.breadcrumb,(n,u)=>(r(),c(e($),{key:u},{default:t(()=>[o(e(R),{to:n.path},{default:t(()=>[d(i(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):H("",!0)]),title:t(()=>[o(O)]),extra:t(()=>[o(Q)]),_:1}))}});export{oe as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.c25ee1cb.js.map
