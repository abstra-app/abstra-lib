import{d as c,b as n,ev as t,dp as s,e as a,ez as d,ex as r,v as i}from"./outputWidgets.4bc91b91.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="3c031263-afb9-4265-8cec-94022c25cd90",o._sentryDebugIdIdentifier="sentry-dbid-3c031263-afb9-4265-8cec-94022c25cd90")}catch{}})();const u={key:0,class:"canvas-container"},v={class:"canvas-content"},f={class:"canvas-absolute"},_={class:"canvas-footer"},y={key:1,class:"content-container"},p={key:0,class:"content-footer"},b=c({__name:"BaseLayout",props:{fullCanvas:{type:Boolean},noMargins:{type:Boolean}},setup(o){return(e,l)=>(n(),t("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),a("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(n(),t("div",u,[a("div",v,[a("div",f,[s(e.$slots,"content",{},void 0,!0)])]),a("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(n(),t("div",y,[a("div",{class:d(["content-layout",{"no-margins":e.noMargins}])},[s(e.$slots,"content",{},void 0,!0)],2)]))],2),e.fullCanvas?r("",!0):(n(),t("div",p,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const g=i(b,[["__scopeId","data-v-393a4c0b"]]);export{g as B};
//# sourceMappingURL=BaseLayout.a7095858.js.map
