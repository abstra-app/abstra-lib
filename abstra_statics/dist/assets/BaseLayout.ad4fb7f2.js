import{d as r,b as a,ev as n,dp as s,e as t,ez as d,ex as c,v as i}from"./outputWidgets.59990c05.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="495716df-7133-45d9-80f8-d8ffc2882d6d",o._sentryDebugIdIdentifier="sentry-dbid-495716df-7133-45d9-80f8-d8ffc2882d6d")}catch{}})();const f={key:0,class:"canvas-container"},u={class:"canvas-content"},v={class:"canvas-absolute"},_={class:"canvas-footer"},y={key:1,class:"content-container"},p={class:"content-layout"},b={key:0,class:"content-footer"},m=r({__name:"BaseLayout",props:{fullCanvas:{type:Boolean}},setup(o){return(e,l)=>(a(),n("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),t("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(a(),n("div",f,[t("div",u,[t("div",v,[s(e.$slots,"content",{},void 0,!0)])]),t("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(a(),n("div",y,[t("div",p,[s(e.$slots,"content",{},void 0,!0)])]))],2),e.fullCanvas?c("",!0):(a(),n("div",b,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const B=i(m,[["__scopeId","data-v-f51eb3de"]]);export{B};
//# sourceMappingURL=BaseLayout.ad4fb7f2.js.map
