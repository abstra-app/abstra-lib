import{_ as B}from"./logo.084e5d7c.js";import{t as C,b as r,et as y,eC as I,eD as w,e as h,d as k,ey as L,a as D,u as e,c,be as S,w as t,f as o,ao as l,eB as i,bM as m,cA as b,cw as N,eJ as V,eA as R,f0 as T,bo as E,ev as M}from"./outputWidgets.7ee1756b.js";import{b as g}from"./router.3c970a49.js";import{a as P}from"./asyncComputed.794f0362.js";import{A as $}from"./Text.521fd491.js";import{A as j,B as F,a as H,c as J}from"./index.8b3bc040.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="15899a31-f781-4953-9cf9-5e3e52785d3a",a._sentryDebugIdIdentifier="sentry-dbid-15899a31-f781-4953-9cf9-5e3e52785d3a")}catch{}})();const U={},A=a=>(I("data-v-439be421"),a=a(),w(),a),q={class:"logo"},z=A(()=>h("img",{class:"logo-img",src:B,alt:"Abstra cloud logo"},null,-1)),G=A(()=>h("span",null,"Abstra Cloud",-1)),K=[z,G];function O(a,s){return r(),y("div",q,K)}const Q=C(U,[["render",O],["__scopeId","data-v-439be421"]]),W=k({__name:"LoginBlock",setup(a){function s(p){const f=p.split("@")[0];return V.exports.kebabCase(f).toUpperCase().split("-").slice(0,2).map(_=>_[0]).join("")}const u=L(),{result:n,loading:d,refetch:v}=P(async()=>g.getAuthor());function x(){g.removeAuthor(),v(),u.push({name:"login"})}return(p,f)=>{const _=D("router-link");return e(d)?(r(),c(e(S),{key:0})):e(n)?(r(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[o(e(b),{direction:"vertical"},{default:t(()=>[o(e($),null,{default:t(()=>[l(i(e(n).claims.email),1)]),_:1}),o(e(m),{onClick:x},{default:t(()=>[l("Logout")]),_:1})]),_:1})]),default:t(()=>[o(e(b),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(j),null,{default:t(()=>[l(i(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),c(e(m),{key:2},{default:t(()=>[o(_,{to:"/login"},{default:t(()=>[l("Login")]),_:1})]),_:1}))}}}),oe=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(s,u)=>(r(),c(e(J),{style:{padding:"5px 25px"}},{breadcrumb:t(()=>[s.breadcrumb?(r(),c(e(F),{key:0},{default:t(()=>[(r(!0),y(E,null,R(s.breadcrumb,(n,d)=>(r(),c(e(H),{key:d},{default:t(()=>[o(e(T),{to:n.path},{default:t(()=>[l(i(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):M("",!0)]),title:t(()=>[o(Q)]),extra:t(()=>[o(W)]),_:1}))}});export{oe as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.19ca85a9.js.map
