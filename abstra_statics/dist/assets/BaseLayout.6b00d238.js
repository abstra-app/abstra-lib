import{d as l,b as t,eu as n,dh as s,e as a,ey as d,ew as r,t as i}from"./outputWidgets.df68f70a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="c51dec04-94ed-497f-9ea5-bac3b4015c03",o._sentryDebugIdIdentifier="sentry-dbid-c51dec04-94ed-497f-9ea5-bac3b4015c03")}catch{}})();const u={key:0,class:"canvas-container"},v={class:"canvas-content"},f={class:"canvas-absolute"},_={class:"canvas-footer"},y={key:1,class:"content-container"},p={class:"content-layout"},b={key:0,class:"content-footer"},h=l({__name:"BaseLayout",props:{fullCanvas:{type:Boolean}},setup(o){return(e,c)=>(t(),n("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),a("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(t(),n("div",u,[a("div",v,[a("div",f,[s(e.$slots,"content",{},void 0,!0)])]),a("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(t(),n("div",y,[a("div",p,[s(e.$slots,"content",{},void 0,!0)])]))],2),e.fullCanvas?r("",!0):(t(),n("div",b,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const B=i(h,[["__scopeId","data-v-4f211c13"]]);export{B};
//# sourceMappingURL=BaseLayout.6b00d238.js.map
