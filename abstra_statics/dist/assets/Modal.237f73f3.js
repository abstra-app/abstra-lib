import{d as u,eu as _,H as v,b as r,et as i,e as c,u as b,ev as a,aD as p,ew as m,ex as S,ey as g,x as k}from"./outputWidgets.5987cc3b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8844848f-5ee2-4386-8214-e46003170e61",e._sentryDebugIdIdentifier="sentry-dbid-8844848f-5ee2-4386-8214-e46003170e61")}catch{}})();const w=u({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:t,emit:n}){const y=_(),f=()=>{o.isOpened=!0,n("open")},d=()=>{o.isOpened=!1,n("close")};t({open:f,close:d});const o=v({isOpened:!1});return(s,l)=>(r(),i("div",{class:g(["background",o.isOpened&&"visible"]),onClick:d},[c("div",{class:"container",style:a(s.containerStyle),onClick:l[0]||(l[0]=S(()=>{},["stop"]))},[b(y).header?(r(),i("div",{key:0,class:"header",style:a(s.headerStyle)},[p(s.$slots,"header",{},void 0,!0)],4)):m("",!0),c("div",{class:"content",style:a(s.contentStyle)},[p(s.$slots,"content",{},void 0,!0)],4)],4)],2))}});const I=k(w,[["__scopeId","data-v-24f739ca"]]);export{I as M};
//# sourceMappingURL=Modal.237f73f3.js.map
