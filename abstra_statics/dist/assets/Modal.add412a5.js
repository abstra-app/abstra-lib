import{d as b,y as p,v as _,b as c,c as r,x as i,z as v,A as a,B as u,D as m,E as S,G as g,q as k}from"./registerWidgets.9f96e537.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="01ca7352-f2b9-4072-ac0d-d72adb75b2ab",e._sentryDebugIdIdentifier="sentry-dbid-01ca7352-f2b9-4072-ac0d-d72adb75b2ab")}catch{}})();const h=b({__name:"Modal",props:{containerStyle:null,headerStyle:null,contentStyle:null},emits:["open","close"],setup(e,{expose:s,emit:t}){const y=p(),f=()=>{n.isOpened=!0,t("open")},o=()=>{n.isOpened=!1,t("close")};s({open:f,close:o});const n=_({isOpened:!1});return(d,l)=>(c(),r("div",{class:g(["background",n.isOpened&&"visible"]),onClick:o},[i("div",{class:"container",style:a(e.containerStyle),onClick:l[0]||(l[0]=S(()=>{},["stop"]))},[v(y).header?(c(),r("div",{key:0,class:"header",style:a(e.headerStyle)},[u(d.$slots,"header",{},void 0,!0)],4)):m("",!0),i("div",{class:"content",style:a(e.contentStyle)},[u(d.$slots,"content",{},void 0,!0)],4)],4)],2))}});const I=k(h,[["__scopeId","data-v-24f739ca"]]);export{I as M};
//# sourceMappingURL=Modal.add412a5.js.map
