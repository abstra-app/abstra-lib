import{_ as w}from"./logo.084e5d7c.js";import{x as B,b as s,et as y,eD as C,eE as I,e as h,d as k,ez as L,a as D,u as e,c,bR as S,w as t,f as o,b2 as l,eC as _,cd as f,cP as N,t as R,eB as V,eY as E,bw as P,ew as T}from"./outputWidgets.b9aa154a.js";import{a as b}from"./console.ee73e2aa.js";import{a as $}from"./asyncComputed.9bda3979.js";import{a as j}from"./index.55488473.js";import{A as g}from"./index.6b140cad.js";import{A as z,B as F,a as H,c as M}from"./index.74d4e484.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="1c8d7796-c819-4273-97cb-aad3afce1363",a._sentryDebugIdIdentifier="sentry-dbid-1c8d7796-c819-4273-97cb-aad3afce1363")}catch{}})();const U={},v=a=>(C("data-v-439be421"),a=a(),I(),a),Y={class:"logo"},q=v(()=>h("img",{class:"logo-img",src:w,alt:"Abstra cloud logo"},null,-1)),G=v(()=>h("span",null,"Abstra Cloud",-1)),J=[q,G];function K(a,r){return s(),y("div",Y,J)}const O=B(U,[["render",K],["__scopeId","data-v-439be421"]]),Q=k({__name:"LoginBlock",setup(a){function r(p){const m=p.split("@")[0];return R.exports.kebabCase(m).toUpperCase().split("-").slice(0,2).map(i=>i[0]).join("")}const d=L(),{result:n,loading:u,refetch:x}=$(async()=>b.getAuthor());function A(){b.removeAuthor(),x(),d.push({name:"login"})}return(p,m)=>{const i=D("router-link");return e(u)?(s(),c(e(S),{key:0})):e(n)?(s(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[o(e(g),{direction:"vertical"},{default:t(()=>[o(e(j),null,{default:t(()=>[l(_(e(n).claims.email),1)]),_:1}),o(e(f),{onClick:A},{default:t(()=>[l("Logout")]),_:1})]),_:1})]),default:t(()=>[o(e(g),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(z),null,{default:t(()=>[l(_(r(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(s(),c(e(f),{key:2},{default:t(()=>[o(i,{to:"/login"},{default:t(()=>[l("Login")]),_:1})]),_:1}))}}}),re=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(r,d)=>(s(),c(e(M),{style:{padding:"5px 10px"}},{breadcrumb:t(()=>[r.breadcrumb?(s(),c(e(F),{key:0},{default:t(()=>[(s(!0),y(P,null,V(r.breadcrumb,(n,u)=>(s(),c(e(H),{key:u},{default:t(()=>[o(e(E),{to:n.path},{default:t(()=>[l(_(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):T("",!0)]),title:t(()=>[o(O)]),extra:t(()=>[o(Q)]),_:1}))}});export{re as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.905048c8.js.map
