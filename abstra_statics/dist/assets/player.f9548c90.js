import{d as i,r as c,u as s,o as p,c as m,w as d,b as u,R as f,k as l,T as _,m as w,P as y,C as g,M as h,s as k,n as o,p as b,q as v,t as C,v as I}from"./vue-router.33b1a225.js";import{s as W,c as V,a}from"./router.777a2ba8.js";import{W as A}from"./WidgetsFrame.04e4a9bb.js";import{u as D}from"./workspaceStore.c9df7df7.js";import"./api.923a4dfa.js";import"./runnerData.51753c56.js";import"./url.56afe455.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="7ec05c4e-48e3-426d-8c19-b456e3c81067",t._sentryDebugIdIdentifier="sentry-dbid-7ec05c4e-48e3-426d-8c19-b456e3c81067")}catch{}})();const M=i({__name:"App",setup(t){const e=D();return e.actions.fetch(),(n,S)=>{const r=c("RouterView");return s(e).state.workspace?(p(),m(A,{key:0,"main-color":s(e).state.workspace.mainColor,theme:s(e).state.workspace.theme,"font-family":s(e).state.workspace.fontFamily},{default:d(()=>[u(r,{style:{height:"100vh",width:"100%"}})]),_:1},8,["main-color","theme","font-family"])):f("",!0)}}});class P{static init(){setInterval(()=>fetch("/_version"),20*1e3)}}(async()=>{await W();const t=V(),e=l({render:()=>b(M)});_.init(),w(e,a),P.init(),e.use(a),e.use(t),e.use(y),e.mount("#app"),e.component("VSelect",g),e.component("Markdown",h),e.component("Message",k),o(e,v),o(e,C),o(e,I)})();
//# sourceMappingURL=player.f9548c90.js.map
