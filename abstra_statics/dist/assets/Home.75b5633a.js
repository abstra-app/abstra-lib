import{d as y,eW as v,E as m,b as d,eX as c,e as l,u as g,eY as r,dC as u,eZ as w,e_ as h,e$ as S,at as b,r as k,a as C,f,w as I,b3 as D}from"./outputWidgets.a62a98a2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="2f7a43c5-9031-4ec5-895b-c98dfeb9b8f7",e._sentryDebugIdIdentifier="sentry-dbid-2f7a43c5-9031-4ec5-895b-c98dfeb9b8f7")}catch{}})();const M=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=v(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,p)=>(d(),c("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[l("div",{class:"container",style:r(t.containerStyle),onClick:p[0]||(p[0]=h(()=>{},["stop"]))},[g(i).header?(d(),c("div",{key:0,class:"header",style:r(t.headerStyle)},[u(t.$slots,"header",{},void 0,!0)],4)):w("",!0),l("div",{class:"content",style:r(t.contentStyle)},[u(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const O=b(M,[["__scopeId","data-v-4d878495"]]),$=["src"],x=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("router-view");return d(),c(D,null,[f(n,{class:"router"}),f(O,{ref_key:"modal",ref:o},{content:I(()=>[l("iframe",{class:"form",src:s.onboardingForm},null,8,$)]),_:1},512)],64)}}});const E=b(x,[["__scopeId","data-v-7e290e34"]]);export{E as default};
//# sourceMappingURL=Home.75b5633a.js.map
