import{d as p,y as b,v as _,b as c,c as r,x as i,z as v,A as o,B as f,D as m,E as S,G as g,q as k}from"./registerWidgets.deaf8486.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="aeda1ce4-db05-4054-9bc3-711fb9a31eef",e._sentryDebugIdIdentifier="sentry-dbid-aeda1ce4-db05-4054-9bc3-711fb9a31eef")}catch{}})();const h=p({__name:"Modal",props:{containerStyle:null,headerStyle:null,contentStyle:null},emits:["open","close"],setup(e,{expose:s,emit:t}){const u=b(),y=()=>{n.isOpened=!0,t("open")},a=()=>{n.isOpened=!1,t("close")};s({open:y,close:a});const n=_({isOpened:!1});return(l,d)=>(c(),r("div",{class:g(["background",n.isOpened&&"visible"]),onClick:a},[i("div",{class:"container",style:o(e.containerStyle),onClick:d[0]||(d[0]=S(()=>{},["stop"]))},[v(u).header?(c(),r("div",{key:0,class:"header",style:o(e.headerStyle)},[f(l.$slots,"header",{},void 0,!0)],4)):m("",!0),i("div",{class:"content",style:o(e.contentStyle)},[f(l.$slots,"content",{},void 0,!0)],4)],4)],2))}});const I=k(h,[["__scopeId","data-v-24f739ca"]]);export{I as M};
//# sourceMappingURL=Modal.64cb459c.js.map
