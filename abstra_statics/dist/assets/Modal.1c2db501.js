import{d as p,y as _,v,b as d,c as r,x as i,z as b,A as o,B as f,D as m,E as S,G as g,q as k}from"./registerWidgets.6206a3cb.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="7c03cafb-65f5-4cf1-9e03-0579a5889365",e._sentryDebugIdIdentifier="sentry-dbid-7c03cafb-65f5-4cf1-9e03-0579a5889365")}catch{}})();const h=p({__name:"Modal",props:{containerStyle:null,headerStyle:null,contentStyle:null},emits:["open","close"],setup(e,{expose:s,emit:t}){const u=_(),y=()=>{n.isOpened=!0,t("open")},a=()=>{n.isOpened=!1,t("close")};s({open:y,close:a});const n=v({isOpened:!1});return(l,c)=>(d(),r("div",{class:g(["background",n.isOpened&&"visible"]),onClick:a},[i("div",{class:"container",style:o(e.containerStyle),onClick:c[0]||(c[0]=S(()=>{},["stop"]))},[b(u).header?(d(),r("div",{key:0,class:"header",style:o(e.headerStyle)},[f(l.$slots,"header",{},void 0,!0)],4)):m("",!0),i("div",{class:"content",style:o(e.contentStyle)},[f(l.$slots,"content",{},void 0,!0)],4)],4)],2))}});const I=k(h,[["__scopeId","data-v-24f739ca"]]);export{I as M};
//# sourceMappingURL=Modal.1c2db501.js.map
