import{_ as I}from"./logo.084e5d7c.js";import{v as B,b as s,et as y,eC as C,eD as w,e as h,d as k,ey as L,a as D,u as e,c,bE as S,w as t,f as o,aI as d,eB as i,c0 as m,cE as N,eF as E,eA as V,e_ as R,bf as T,ev as F}from"./outputWidgets.efa87d6e.js";import{a as b}from"./router.922aeec9.js";import{a as P}from"./asyncComputed.f1be5732.js";import{a as $}from"./index.a0e42192.js";import{A as g}from"./index.a8adb0b1.js";import{A as j,B as H,a as M,c as U}from"./index.2882bc4a.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="67ebdfcf-5225-4fc7-b4aa-6fc104d1312d",a._sentryDebugIdIdentifier="sentry-dbid-67ebdfcf-5225-4fc7-b4aa-6fc104d1312d")}catch{}})();const q={},v=a=>(C("data-v-439be421"),a=a(),w(),a),z={class:"logo"},G=v(()=>h("img",{class:"logo-img",src:I,alt:"Abstra cloud logo"},null,-1)),J=v(()=>h("span",null,"Abstra Cloud",-1)),K=[G,J];function O(a,r){return s(),y("div",z,K)}const Q=B(q,[["render",O],["__scopeId","data-v-439be421"]]),W=k({__name:"LoginBlock",setup(a){function r(p){const f=p.split("@")[0];return E.exports.kebabCase(f).toUpperCase().split("-").slice(0,2).map(_=>_[0]).join("")}const l=L(),{result:n,loading:u,refetch:A}=P(async()=>b.getAuthor());function x(){b.removeAuthor(),A(),l.push({name:"login"})}return(p,f)=>{const _=D("router-link");return e(u)?(s(),c(e(S),{key:0})):e(n)?(s(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[o(e(g),{direction:"vertical"},{default:t(()=>[o(e($),null,{default:t(()=>[d(i(e(n).claims.email),1)]),_:1}),o(e(m),{onClick:x},{default:t(()=>[d("Logout")]),_:1})]),_:1})]),default:t(()=>[o(e(g),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(j),null,{default:t(()=>[d(i(r(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(s(),c(e(m),{key:2},{default:t(()=>[o(_,{to:"/login"},{default:t(()=>[d("Login")]),_:1})]),_:1}))}}}),re=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(r,l)=>(s(),c(e(U),{style:{padding:"5px 10px"}},{breadcrumb:t(()=>[r.breadcrumb?(s(),c(e(H),{key:0},{default:t(()=>[(s(!0),y(T,null,V(r.breadcrumb,(n,u)=>(s(),c(e(M),{key:u},{default:t(()=>[o(e(R),{to:n.path},{default:t(()=>[d(i(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):F("",!0)]),title:t(()=>[o(Q)]),extra:t(()=>[o(W)]),_:1}))}});export{re as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.8ae22ccf.js.map
