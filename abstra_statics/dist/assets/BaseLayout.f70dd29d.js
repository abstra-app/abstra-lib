import{d as r,b as t,ev as n,ds as s,e as a,ez as d,ex as i,v as c}from"./outputWidgets.fdae7e91.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="bda3f8e4-5bf4-4a3e-892e-f7e51f1d62d6",o._sentryDebugIdIdentifier="sentry-dbid-bda3f8e4-5bf4-4a3e-892e-f7e51f1d62d6")}catch{}})();const f={key:0,class:"canvas-container"},u={class:"canvas-content"},v={class:"canvas-absolute"},_={class:"canvas-footer"},y={key:1,class:"content-container"},b={class:"content-layout"},p={key:0,class:"content-footer"},m=r({__name:"BaseLayout",props:{fullCanvas:{type:Boolean}},setup(o){return(e,l)=>(t(),n("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),a("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(t(),n("div",f,[a("div",u,[a("div",v,[s(e.$slots,"content",{},void 0,!0)])]),a("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(t(),n("div",y,[a("div",b,[s(e.$slots,"content",{},void 0,!0)])]))],2),e.fullCanvas?i("",!0):(t(),n("div",p,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const B=c(m,[["__scopeId","data-v-f51eb3de"]]);export{B};
//# sourceMappingURL=BaseLayout.f70dd29d.js.map
