import{_ as C}from"./logo.084e5d7c.js";import{v as I,b as r,ev as y,eE as B,eF as w,e as h,d as k,eA as D,a as L,u as e,c,bg as N,w as t,f as o,ar as l,eD as i,bG as f,cE as b,cA as S,eN as E,eC as V,f4 as R,aD as F,ex as P}from"./outputWidgets.3c3deba7.js";import{b as g}from"./router.2687a12c.js";import{a as T}from"./asyncComputed.41e37f4b.js";import{A as $}from"./Text.9ff37267.js";import{A as j,B as G,a as H,c as M}from"./index.9a533a9a.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="0928ca69-61b4-4c9f-bb9e-d33aa354e999",a._sentryDebugIdIdentifier="sentry-dbid-0928ca69-61b4-4c9f-bb9e-d33aa354e999")}catch{}})();const U={},v=a=>(B("data-v-439be421"),a=a(),w(),a),q={class:"logo"},z=v(()=>h("img",{class:"logo-img",src:C,alt:"Abstra cloud logo"},null,-1)),J=v(()=>h("span",null,"Abstra Cloud",-1)),K=[z,J];function O(a,s){return r(),y("div",q,K)}const Q=I(U,[["render",O],["__scopeId","data-v-439be421"]]),W=k({__name:"LoginBlock",setup(a){function s(p){const m=p.split("@")[0];return E.exports.kebabCase(m).toUpperCase().split("-").slice(0,2).map(_=>_[0]).join("")}const u=D(),{result:n,loading:d,refetch:A}=T(async()=>g.getAuthor());function x(){g.removeAuthor(),A(),u.push({name:"login"})}return(p,m)=>{const _=L("router-link");return e(d)?(r(),c(e(N),{key:0})):e(n)?(r(),c(e(S),{key:1,placement:"bottomRight"},{content:t(()=>[o(e(b),{direction:"vertical"},{default:t(()=>[o(e($),null,{default:t(()=>[l(i(e(n).claims.email),1)]),_:1}),o(e(f),{onClick:x},{default:t(()=>[l("Logout")]),_:1})]),_:1})]),default:t(()=>[o(e(b),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(j),null,{default:t(()=>[l(i(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),c(e(f),{key:2},{default:t(()=>[o(_,{to:"/login"},{default:t(()=>[l("Login")]),_:1})]),_:1}))}}}),oe=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(s,u)=>(r(),c(e(M),{style:{padding:"5px 25px"}},{breadcrumb:t(()=>[s.breadcrumb?(r(),c(e(G),{key:0},{default:t(()=>[(r(!0),y(F,null,V(s.breadcrumb,(n,d)=>(r(),c(e(H),{key:d},{default:t(()=>[o(e(R),{to:n.path},{default:t(()=>[l(i(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):P("",!0)]),title:t(()=>[o(Q)]),extra:t(()=>[o(W)]),_:1}))}});export{oe as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.a6eee27d.js.map
