import{d as r,b as a,et as n,dm as s,e as t,ex as d,ev as i,t as c}from"./outputWidgets.cc88926c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="bd431b26-00fd-4225-b077-be8a8513f2e5",o._sentryDebugIdIdentifier="sentry-dbid-bd431b26-00fd-4225-b077-be8a8513f2e5")}catch{}})();const u={key:0,class:"canvas-container"},v={class:"canvas-content"},f={class:"canvas-absolute"},_={class:"canvas-footer"},b={key:1,class:"content-container"},y={class:"content-layout"},p={key:0,class:"content-footer"},m=r({__name:"BaseLayout",props:{fullCanvas:{type:Boolean}},setup(o){return(e,l)=>(a(),n("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),t("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(a(),n("div",u,[t("div",v,[t("div",f,[s(e.$slots,"content",{},void 0,!0)])]),t("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(a(),n("div",b,[t("div",y,[s(e.$slots,"content",{},void 0,!0)])]))],2),e.fullCanvas?i("",!0):(a(),n("div",p,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const B=c(m,[["__scopeId","data-v-f51eb3de"]]);export{B};
//# sourceMappingURL=BaseLayout.70ebfa4b.js.map
