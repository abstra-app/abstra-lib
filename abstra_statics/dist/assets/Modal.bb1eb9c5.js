import{d as p,y as _,v,b as c,c as r,x as i,z as b,A as o,B as u,D as m,E as S,G as g,q as k}from"./registerWidgets.eddc32f4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="60ddac57-3564-481f-8c1b-9d2323419866",e._sentryDebugIdIdentifier="sentry-dbid-60ddac57-3564-481f-8c1b-9d2323419866")}catch{}})();const h=p({__name:"Modal",props:{containerStyle:null,headerStyle:null,contentStyle:null},emits:["open","close"],setup(e,{expose:s,emit:t}){const y=_(),f=()=>{n.isOpened=!0,t("open")},a=()=>{n.isOpened=!1,t("close")};s({open:f,close:a});const n=v({isOpened:!1});return(d,l)=>(c(),r("div",{class:g(["background",n.isOpened&&"visible"]),onClick:a},[i("div",{class:"container",style:o(e.containerStyle),onClick:l[0]||(l[0]=S(()=>{},["stop"]))},[b(y).header?(c(),r("div",{key:0,class:"header",style:o(e.headerStyle)},[u(d.$slots,"header",{},void 0,!0)],4)):m("",!0),i("div",{class:"content",style:o(e.contentStyle)},[u(d.$slots,"content",{},void 0,!0)],4)],4)],2))}});const I=k(h,[["__scopeId","data-v-24f739ca"]]);export{I as M};
//# sourceMappingURL=Modal.bb1eb9c5.js.map
