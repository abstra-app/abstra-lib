import{d as r,b as n,ev as t,dm as s,e as o,ez as d,ex as i,v as c}from"./outputWidgets.b14d4ea2.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="1b722a87-ab0a-480b-a55d-dd75f97906b1",a._sentryDebugIdIdentifier="sentry-dbid-1b722a87-ab0a-480b-a55d-dd75f97906b1")}catch{}})();const u={key:0,class:"canvas-container"},v={class:"canvas-content"},f={class:"canvas-absolute"},_={class:"canvas-footer"},b={key:1,class:"content-container"},y={key:0,class:"content-footer"},p=r({__name:"BaseLayout",props:{fullCanvas:{type:Boolean},noMargins:{type:Boolean}},setup(a){return(e,l)=>(n(),t("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),o("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(n(),t("div",u,[o("div",v,[o("div",f,[s(e.$slots,"content",{},void 0,!0)])]),o("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(n(),t("div",b,[o("div",{class:d(["content-layout",{"no-margins":e.noMargins}])},[s(e.$slots,"content",{},void 0,!0)],2)]))],2),e.fullCanvas?i("",!0):(n(),t("div",y,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const g=c(p,[["__scopeId","data-v-393a4c0b"]]);export{g as B};
//# sourceMappingURL=BaseLayout.0338aa05.js.map
