import{d as c,b as n,eu as t,dj as s,e as a,ey as d,ew as r,v as i}from"./outputWidgets.3681a2a5.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="2e473163-c676-46bc-ab99-eec0ce5b1623",o._sentryDebugIdIdentifier="sentry-dbid-2e473163-c676-46bc-ab99-eec0ce5b1623")}catch{}})();const u={key:0,class:"canvas-container"},v={class:"canvas-content"},f={class:"canvas-absolute"},_={class:"canvas-footer"},y={key:1,class:"content-container"},b={key:0,class:"content-footer"},p=c({__name:"BaseLayout",props:{fullCanvas:{type:Boolean},noMargins:{type:Boolean}},setup(o){return(e,l)=>(n(),t("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),a("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(n(),t("div",u,[a("div",v,[a("div",f,[s(e.$slots,"content",{},void 0,!0)])]),a("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(n(),t("div",y,[a("div",{class:d(["content-layout",{"no-margins":e.noMargins}])},[s(e.$slots,"content",{},void 0,!0)],2)]))],2),e.fullCanvas?r("",!0):(n(),t("div",b,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const g=i(p,[["__scopeId","data-v-d7175bf5"]]);export{g as B};
//# sourceMappingURL=BaseLayout.409de48a.js.map
