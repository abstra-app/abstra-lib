import{d as i,g as c,r as p,u as a,o as u,c as d,w as m,b as f,R as l,k as _,T as w,m as g,P as y,C as h,M as b,s as k,n as o,p as v,q as C,t as I,v as W}from"./vue-router.bdd95b3b.js";import{a as S,u as V,s as A,c as D,b as n}from"./workspaceStore.f8b3c08d.js";import{W as M}from"./WidgetsFrame.ea80f7bf.js";import"./url.fd6fde4b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="9b29c933-8506-4249-abfe-342763f69b88",t._sentryDebugIdIdentifier="sentry-dbid-9b29c933-8506-4249-abfe-342763f69b88")}catch{}})();const P=i({__name:"App",setup(t){const e=S(),s=V();return s.actions.fetch(),c(()=>e.user,s.actions.fetch),(R,B)=>{const r=p("RouterView");return a(s).state.workspace?(u(),d(M,{key:0,"main-color":a(s).state.workspace.mainColor,theme:a(s).state.workspace.theme,"font-family":a(s).state.workspace.fontFamily,locale:a(s).state.workspace.language},{default:m(()=>[f(r,{style:{height:"100vh",width:"100%"}})]),_:1},8,["main-color","theme","font-family","locale"])):l("",!0)}}});class x{static init(){setInterval(()=>fetch("/_version"),20*1e3)}}(async()=>{await A();const t=D(),e=_({render:()=>v(P)});w.init(),g(e,n),x.init(),e.use(n),e.use(t),e.use(y),e.mount("#app"),e.component("VSelect",h),e.component("Markdown",b),e.component("Message",k),o(e,C),o(e,I),o(e,W)})();
//# sourceMappingURL=player.824b80df.js.map
