import{d as i,r as c,u as s,o as p,c as d,w as m,b as u,R as l,k as f,T as _,m as w,P as g,C as y,M as h,s as k,n as a,p as b,q as v,t as C,v as I}from"./vue-router.70fdc9ff.js";import{s as W,c as V,a as o}from"./router.07482c0f.js";import{W as A}from"./WidgetsFrame.e74a5db3.js";import{u as D}from"./workspaceStore.ec6dd7c1.js";import"./api.fbedf89b.js";import"./runnerData.e6f7c1f5.js";import"./url.834e2a78.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="7e2b108c-d299-4161-8f5d-98d31acc06de",t._sentryDebugIdIdentifier="sentry-dbid-7e2b108c-d299-4161-8f5d-98d31acc06de")}catch{}})();const M=i({__name:"App",setup(t){const e=D();return e.actions.fetch(),(n,S)=>{const r=c("RouterView");return s(e).state.workspace?(p(),d(A,{key:0,"main-color":s(e).state.workspace.mainColor,theme:s(e).state.workspace.theme,"font-family":s(e).state.workspace.fontFamily,locale:s(e).state.workspace.language},{default:m(()=>[u(r,{style:{height:"100vh",width:"100%"}})]),_:1},8,["main-color","theme","font-family","locale"])):l("",!0)}}});class P{static init(){setInterval(()=>fetch("/_version"),20*1e3)}}(async()=>{await W();const t=V(),e=f({render:()=>b(M)});_.init(),w(e,o),P.init(),e.use(o),e.use(t),e.use(g),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",h),e.component("Message",k),a(e,v),a(e,C),a(e,I)})();
//# sourceMappingURL=player.a91b0ad3.js.map
