import{d,b as n,eu as t,dl as s,e as a,ey as c,ew as r,v as i}from"./outputWidgets.2f54a46f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="fe9fc1c4-5036-44cc-bc94-a4f8c762b000",o._sentryDebugIdIdentifier="sentry-dbid-fe9fc1c4-5036-44cc-bc94-a4f8c762b000")}catch{}})();const u={key:0,class:"canvas-container"},v={class:"canvas-content"},f={class:"canvas-absolute"},_={class:"canvas-footer"},y={key:1,class:"content-container"},b={key:0,class:"content-footer"},p=d({__name:"BaseLayout",props:{fullCanvas:{type:Boolean},noMargins:{type:Boolean}},setup(o){return(e,l)=>(n(),t("div",{class:c(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),a("div",{class:c(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(n(),t("div",u,[a("div",v,[a("div",f,[s(e.$slots,"content",{},void 0,!0)])]),a("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(n(),t("div",y,[a("div",{class:c(["content-layout",{"no-margins":e.noMargins}])},[s(e.$slots,"content",{},void 0,!0)],2)]))],2),e.fullCanvas?r("",!0):(n(),t("div",b,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const g=i(p,[["__scopeId","data-v-393a4c0b"]]);export{g as B};
//# sourceMappingURL=BaseLayout.60fb9582.js.map
