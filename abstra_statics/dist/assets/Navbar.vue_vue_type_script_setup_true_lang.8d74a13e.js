import{_ as B}from"./logo.084e5d7c.js";import{v as C,b as r,ev as y,eE as I,eF as w,e as h,d as k,eA as L,a as D,u as e,c,bv as S,w as t,f as o,ar as l,eD as i,bV as f,cF as b,cB as N,eL as V,eC as E,f3 as F,a$ as R,ex as $}from"./outputWidgets.83751d1a.js";import{b as g}from"./router.a97dd462.js";import{a as P}from"./asyncComputed.00b2a54a.js";import{A as T}from"./Text.50196cd9.js";import{A as j,B as H,a as M,c as U}from"./index.e0b69d29.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="410de30d-6b55-40a8-8f82-638620038230",a._sentryDebugIdIdentifier="sentry-dbid-410de30d-6b55-40a8-8f82-638620038230")}catch{}})();const q={},v=a=>(I("data-v-439be421"),a=a(),w(),a),z={class:"logo"},G=v(()=>h("img",{class:"logo-img",src:B,alt:"Abstra cloud logo"},null,-1)),J=v(()=>h("span",null,"Abstra Cloud",-1)),K=[G,J];function O(a,s){return r(),y("div",z,K)}const Q=C(q,[["render",O],["__scopeId","data-v-439be421"]]),W=k({__name:"LoginBlock",setup(a){function s(p){const m=p.split("@")[0];return V.exports.kebabCase(m).toUpperCase().split("-").slice(0,2).map(_=>_[0]).join("")}const d=L(),{result:n,loading:u,refetch:A}=P(async()=>g.getAuthor());function x(){g.removeAuthor(),A(),d.push({name:"login"})}return(p,m)=>{const _=D("router-link");return e(u)?(r(),c(e(S),{key:0})):e(n)?(r(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[o(e(b),{direction:"vertical"},{default:t(()=>[o(e(T),null,{default:t(()=>[l(i(e(n).claims.email),1)]),_:1}),o(e(f),{onClick:x},{default:t(()=>[l("Logout")]),_:1})]),_:1})]),default:t(()=>[o(e(b),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(j),null,{default:t(()=>[l(i(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),c(e(f),{key:2},{default:t(()=>[o(_,{to:"/login"},{default:t(()=>[l("Login")]),_:1})]),_:1}))}}}),oe=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(s,d)=>(r(),c(e(U),{style:{padding:"5px 25px"}},{breadcrumb:t(()=>[s.breadcrumb?(r(),c(e(H),{key:0},{default:t(()=>[(r(!0),y(R,null,E(s.breadcrumb,(n,u)=>(r(),c(e(M),{key:u},{default:t(()=>[o(e(F),{to:n.path},{default:t(()=>[l(i(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):$("",!0)]),title:t(()=>[o(Q)]),extra:t(()=>[o(W)]),_:1}))}});export{oe as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.8d74a13e.js.map
