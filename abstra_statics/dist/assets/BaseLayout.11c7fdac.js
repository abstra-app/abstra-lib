import{d as r,b as n,eu as t,dh as s,e as o,ey as d,ew as i,v as c}from"./outputWidgets.3d5619ad.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="93074ebf-59fd-47e0-a21b-baa3417a3ed4",a._sentryDebugIdIdentifier="sentry-dbid-93074ebf-59fd-47e0-a21b-baa3417a3ed4")}catch{}})();const u={key:0,class:"canvas-container"},v={class:"canvas-content"},f={class:"canvas-absolute"},_={class:"canvas-footer"},y={key:1,class:"content-container"},b={key:0,class:"content-footer"},p=r({__name:"BaseLayout",props:{fullCanvas:{type:Boolean},noMargins:{type:Boolean}},setup(a){return(e,l)=>(n(),t("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),o("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(n(),t("div",u,[o("div",v,[o("div",f,[s(e.$slots,"content",{},void 0,!0)])]),o("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(n(),t("div",y,[o("div",{class:d(["content-layout",{"no-margins":e.noMargins}])},[s(e.$slots,"content",{},void 0,!0)],2)]))],2),e.fullCanvas?i("",!0):(n(),t("div",b,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const g=c(p,[["__scopeId","data-v-d7175bf5"]]);export{g as B};
//# sourceMappingURL=BaseLayout.11c7fdac.js.map
