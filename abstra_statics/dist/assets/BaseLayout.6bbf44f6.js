import{d as r,b as t,ev as n,dp as s,e as a,ez as d,ex as c,v as i}from"./outputWidgets.32262ea4.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="1ad57a6c-48bd-4413-b440-bd56bf118a95",o._sentryDebugIdIdentifier="sentry-dbid-1ad57a6c-48bd-4413-b440-bd56bf118a95")}catch{}})();const u={key:0,class:"canvas-container"},v={class:"canvas-content"},f={class:"canvas-absolute"},_={class:"canvas-footer"},b={key:1,class:"content-container"},y={class:"content-layout"},p={key:0,class:"content-footer"},m=r({__name:"BaseLayout",props:{fullCanvas:{type:Boolean}},setup(o){return(e,l)=>(t(),n("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),a("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(t(),n("div",u,[a("div",v,[a("div",f,[s(e.$slots,"content",{},void 0,!0)])]),a("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(t(),n("div",b,[a("div",y,[s(e.$slots,"content",{},void 0,!0)])]))],2),e.fullCanvas?c("",!0):(t(),n("div",p,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const B=i(m,[["__scopeId","data-v-f51eb3de"]]);export{B};
//# sourceMappingURL=BaseLayout.6bbf44f6.js.map
