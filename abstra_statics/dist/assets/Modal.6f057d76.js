import{d as y,es as _,E as b,b as l,c,er as i,bu as v,et as a,c2 as f,eu as m,ev as S,ew as g,t as k}from"./registerWidgets.f19e2bf7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cf5c3fe8-64c8-4469-9e00-bb262ddfe7d9",e._sentryDebugIdIdentifier="sentry-dbid-cf5c3fe8-64c8-4469-9e00-bb262ddfe7d9")}catch{}})();const w=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:t,emit:n}){const p=_(),u=()=>{o.isOpened=!0,n("open")},d=()=>{o.isOpened=!1,n("close")};t({open:u,close:d});const o=b({isOpened:!1});return(s,r)=>(l(),c("div",{class:g(["background",o.isOpened&&"visible"]),onClick:d},[i("div",{class:"container",style:a(s.containerStyle),onClick:r[0]||(r[0]=S(()=>{},["stop"]))},[v(p).header?(l(),c("div",{key:0,class:"header",style:a(s.headerStyle)},[f(s.$slots,"header",{},void 0,!0)],4)):m("",!0),i("div",{class:"content",style:a(s.contentStyle)},[f(s.$slots,"content",{},void 0,!0)],4)],4)],2))}});const I=k(w,[["__scopeId","data-v-24f739ca"]]);export{I as M};
//# sourceMappingURL=Modal.6f057d76.js.map
