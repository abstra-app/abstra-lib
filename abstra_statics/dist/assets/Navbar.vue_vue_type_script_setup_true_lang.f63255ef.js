import{_ as C}from"./logo.084e5d7c.js";import{t as I,b as r,es as y,eB as B,eC as w,e as h,d as k,ex as L,a as S,u as e,c,bC as D,w as t,f as o,aA as l,eA as i,b_ as f,cI as b,cE as N,eE as E,ez as V,eZ as R,b8 as T,eu as P}from"./outputWidgets.350c2fca.js";import{a as g}from"./router.3322ffd5.js";import{a as $}from"./asyncComputed.227d5ac8.js";import{a as j}from"./Text.61be5876.js";import{A as z,B as F,a as H,c as M}from"./index.8cb2ffaf.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="f4218455-967a-4c9d-bb61-580a5aa30a85",a._sentryDebugIdIdentifier="sentry-dbid-f4218455-967a-4c9d-bb61-580a5aa30a85")}catch{}})();const U={},A=a=>(B("data-v-439be421"),a=a(),w(),a),Z={class:"logo"},q=A(()=>h("img",{class:"logo-img",src:C,alt:"Abstra cloud logo"},null,-1)),G=A(()=>h("span",null,"Abstra Cloud",-1)),J=[q,G];function K(a,s){return r(),y("div",Z,J)}const O=I(U,[["render",K],["__scopeId","data-v-439be421"]]),Q=k({__name:"LoginBlock",setup(a){function s(p){const m=p.split("@")[0];return E.exports.kebabCase(m).toUpperCase().split("-").slice(0,2).map(_=>_[0]).join("")}const u=L(),{result:n,loading:d,refetch:v}=$(async()=>g.getAuthor());function x(){g.removeAuthor(),v(),u.push({name:"login"})}return(p,m)=>{const _=S("router-link");return e(d)?(r(),c(e(D),{key:0})):e(n)?(r(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[o(e(b),{direction:"vertical"},{default:t(()=>[o(e(j),null,{default:t(()=>[l(i(e(n).claims.email),1)]),_:1}),o(e(f),{onClick:x},{default:t(()=>[l("Logout")]),_:1})]),_:1})]),default:t(()=>[o(e(b),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(z),null,{default:t(()=>[l(i(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),c(e(f),{key:2},{default:t(()=>[o(_,{to:"/login"},{default:t(()=>[l("Login")]),_:1})]),_:1}))}}}),oe=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(s,u)=>(r(),c(e(M),{style:{padding:"5px 10px"}},{breadcrumb:t(()=>[s.breadcrumb?(r(),c(e(F),{key:0},{default:t(()=>[(r(!0),y(T,null,V(s.breadcrumb,(n,d)=>(r(),c(e(H),{key:d},{default:t(()=>[o(e(R),{to:n.path},{default:t(()=>[l(i(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):P("",!0)]),title:t(()=>[o(O)]),extra:t(()=>[o(Q)]),_:1}))}});export{oe as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.f63255ef.js.map
