import{d as i,g as c,r as p,u as a,o as d,c as u,w as f,b as m,R as l,k as _,T as w,m as g,P as y,C as h,M as b,s as k,n as o,p as v,q as C,t as I,v as W}from"./vue-router.6ac97ff6.js";import{a as S,u as V,s as A,c as D,b as n}from"./workspaceStore.6d16e36f.js";import{W as M}from"./WidgetsFrame.b94cf89a.js";import"./url.30955cfd.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="a49ba6f6-6d0f-48fa-b19d-958df1156a3b",t._sentryDebugIdIdentifier="sentry-dbid-a49ba6f6-6d0f-48fa-b19d-958df1156a3b")}catch{}})();const P=i({__name:"App",setup(t){const e=S(),s=V();return s.actions.fetch(),c(()=>e.user,s.actions.fetch),(R,B)=>{const r=p("RouterView");return a(s).state.workspace?(d(),u(M,{key:0,"main-color":a(s).state.workspace.mainColor,theme:a(s).state.workspace.theme,"font-family":a(s).state.workspace.fontFamily,locale:a(s).state.workspace.language},{default:f(()=>[m(r,{style:{height:"100vh",width:"100%"}})]),_:1},8,["main-color","theme","font-family","locale"])):l("",!0)}}});class x{static init(){setInterval(()=>fetch("/_version"),20*1e3)}}(async()=>{await A();const t=D(),e=_({render:()=>v(P)});w.init(),g(e,n),x.init(),e.use(n),e.use(t),e.use(y),e.mount("#app"),e.component("VSelect",h),e.component("Markdown",b),e.component("Message",k),o(e,C),o(e,I),o(e,W)})();
//# sourceMappingURL=player.db8f5d41.js.map
