import{d as u,z as _,w as b,b as r,c,y as i,A as v,B as a,D as f,E as m,G as S,H as g,t as k}from"./registerWidgets.f8dfb33f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0bf79a3d-7099-43a6-97c5-f49fe09e80c7",e._sentryDebugIdIdentifier="sentry-dbid-0bf79a3d-7099-43a6-97c5-f49fe09e80c7")}catch{}})();const w=u({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:t,emit:n}){const p=_(),y=()=>{o.isOpened=!0,n("open")},d=()=>{o.isOpened=!1,n("close")};t({open:y,close:d});const o=b({isOpened:!1});return(s,l)=>(r(),c("div",{class:g(["background",o.isOpened&&"visible"]),onClick:d},[i("div",{class:"container",style:a(s.containerStyle),onClick:l[0]||(l[0]=S(()=>{},["stop"]))},[v(p).header?(r(),c("div",{key:0,class:"header",style:a(s.headerStyle)},[f(s.$slots,"header",{},void 0,!0)],4)):m("",!0),i("div",{class:"content",style:a(s.contentStyle)},[f(s.$slots,"content",{},void 0,!0)],4)],4)],2))}});const I=k(w,[["__scopeId","data-v-24f739ca"]]);export{I as M};
//# sourceMappingURL=Modal.b37564e2.js.map
