import{_ as B}from"./logo.084e5d7c.js";import{x as C,b as s,eu as y,eD as I,eE as w,e as h,d as k,ez as L,a as D,u as e,c,bF as S,w as t,f as o,aJ as l,eC as i,c1 as f,cF as N,t as V,eB as E,e_ as F,bg as R,ew as T}from"./outputWidgets.2173e1fe.js";import{a as g}from"./router.ba958fbb.js";import{a as P}from"./asyncComputed.6a46186d.js";import{a as $}from"./index.9bbd5863.js";import{A as b}from"./index.d1a21529.js";import{A as j,B as z,a as H,c as J}from"./index.699227ea.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="e1358956-c6c4-47dc-a334-7040835910b3",a._sentryDebugIdIdentifier="sentry-dbid-e1358956-c6c4-47dc-a334-7040835910b3")}catch{}})();const M={},v=a=>(I("data-v-439be421"),a=a(),w(),a),U={class:"logo"},q=v(()=>h("img",{class:"logo-img",src:B,alt:"Abstra cloud logo"},null,-1)),G=v(()=>h("span",null,"Abstra Cloud",-1)),K=[q,G];function O(a,r){return s(),y("div",U,K)}const Q=C(M,[["render",O],["__scopeId","data-v-439be421"]]),W=k({__name:"LoginBlock",setup(a){function r(p){const m=p.split("@")[0];return V.exports.kebabCase(m).toUpperCase().split("-").slice(0,2).map(_=>_[0]).join("")}const u=L(),{result:n,loading:d,refetch:x}=P(async()=>g.getAuthor());function A(){g.removeAuthor(),x(),u.push({name:"login"})}return(p,m)=>{const _=D("router-link");return e(d)?(s(),c(e(S),{key:0})):e(n)?(s(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[o(e(b),{direction:"vertical"},{default:t(()=>[o(e($),null,{default:t(()=>[l(i(e(n).claims.email),1)]),_:1}),o(e(f),{onClick:A},{default:t(()=>[l("Logout")]),_:1})]),_:1})]),default:t(()=>[o(e(b),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(j),null,{default:t(()=>[l(i(r(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(s(),c(e(f),{key:2},{default:t(()=>[o(_,{to:"/login"},{default:t(()=>[l("Login")]),_:1})]),_:1}))}}}),re=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(r,u)=>(s(),c(e(J),{style:{padding:"5px 10px"}},{breadcrumb:t(()=>[r.breadcrumb?(s(),c(e(z),{key:0},{default:t(()=>[(s(!0),y(R,null,E(r.breadcrumb,(n,d)=>(s(),c(e(H),{key:d},{default:t(()=>[o(e(F),{to:n.path},{default:t(()=>[l(i(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):T("",!0)]),title:t(()=>[o(Q)]),extra:t(()=>[o(W)]),_:1}))}});export{re as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.98904370.js.map
