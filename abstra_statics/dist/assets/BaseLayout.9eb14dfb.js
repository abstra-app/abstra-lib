import{d as c,b as t,et as n,at as s,e as a,ex as d,ev as r,v as i}from"./outputWidgets.e1ef7566.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="c73d1831-3e2f-41f9-ac79-8c67b68102fa",o._sentryDebugIdIdentifier="sentry-dbid-c73d1831-3e2f-41f9-ac79-8c67b68102fa")}catch{}})();const u={key:0,class:"canvas-container"},f={class:"canvas-content"},v={class:"canvas-absolute"},_={class:"canvas-footer"},y={key:1,class:"content-container"},p={class:"content-layout"},b={key:0,class:"content-footer"},m=c({__name:"BaseLayout",props:{fullCanvas:{type:Boolean}},setup(o){return(e,l)=>(t(),n("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),a("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(t(),n("div",u,[a("div",f,[a("div",v,[s(e.$slots,"content",{},void 0,!0)])]),a("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(t(),n("div",y,[a("div",p,[s(e.$slots,"content",{},void 0,!0)])]))],2),e.fullCanvas?r("",!0):(t(),n("div",b,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const B=i(m,[["__scopeId","data-v-4f211c13"]]);export{B};
//# sourceMappingURL=BaseLayout.9eb14dfb.js.map
