import{d as r,b as a,ev as n,dp as s,e as t,ez as d,ex as c,v as i}from"./outputWidgets.274d1699.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="e6574238-123c-4233-85b9-90631eb8ef1e",o._sentryDebugIdIdentifier="sentry-dbid-e6574238-123c-4233-85b9-90631eb8ef1e")}catch{}})();const u={key:0,class:"canvas-container"},v={class:"canvas-content"},f={class:"canvas-absolute"},_={class:"canvas-footer"},y={key:1,class:"content-container"},b={class:"content-layout"},p={key:0,class:"content-footer"},m=r({__name:"BaseLayout",props:{fullCanvas:{type:Boolean}},setup(o){return(e,l)=>(a(),n("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),t("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(a(),n("div",u,[t("div",v,[t("div",f,[s(e.$slots,"content",{},void 0,!0)])]),t("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(a(),n("div",y,[t("div",b,[s(e.$slots,"content",{},void 0,!0)])]))],2),e.fullCanvas?c("",!0):(a(),n("div",p,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const B=i(m,[["__scopeId","data-v-f51eb3de"]]);export{B};
//# sourceMappingURL=BaseLayout.5f587ed9.js.map
