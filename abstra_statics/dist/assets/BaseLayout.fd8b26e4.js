import{d as r,b as n,eu as t,dj as s,e as a,ey as d,ew as i,v as c}from"./outputWidgets.ee4285cb.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="96f14f56-0c19-4ead-8ef3-4cb63e3f36f5",o._sentryDebugIdIdentifier="sentry-dbid-96f14f56-0c19-4ead-8ef3-4cb63e3f36f5")}catch{}})();const f={key:0,class:"canvas-container"},u={class:"canvas-content"},v={class:"canvas-absolute"},_={class:"canvas-footer"},y={key:1,class:"content-container"},p={key:0,class:"content-footer"},b=r({__name:"BaseLayout",props:{fullCanvas:{type:Boolean},noMargins:{type:Boolean}},setup(o){return(e,l)=>(n(),t("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),a("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(n(),t("div",f,[a("div",u,[a("div",v,[s(e.$slots,"content",{},void 0,!0)])]),a("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(n(),t("div",y,[a("div",{class:d(["content-layout",{"no-margins":e.noMargins}])},[s(e.$slots,"content",{},void 0,!0)],2)]))],2),e.fullCanvas?i("",!0):(n(),t("div",p,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const g=c(b,[["__scopeId","data-v-d7175bf5"]]);export{g as B};
//# sourceMappingURL=BaseLayout.fd8b26e4.js.map
