import{d as y,eU as v,N as m,b as c,eV as d,e as l,u as g,eW as r,dy as p,eX as w,eY as h,eZ as S,E as b,r as k,a as C,f as u,w as I,ay as D}from"./outputWidgets.1789f8c8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="44bfc6a7-abdc-4ff9-9ef7-7ccf51ae355b",e._sentryDebugIdIdentifier="sentry-dbid-44bfc6a7-abdc-4ff9-9ef7-7ccf51ae355b")}catch{}})();const M=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=v(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,f)=>(c(),d("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[l("div",{class:"container",style:r(t.containerStyle),onClick:f[0]||(f[0]=h(()=>{},["stop"]))},[g(i).header?(c(),d("div",{key:0,class:"header",style:r(t.headerStyle)},[p(t.$slots,"header",{},void 0,!0)],4)):w("",!0),l("div",{class:"content",style:r(t.contentStyle)},[p(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const N=b(M,[["__scopeId","data-v-4d878495"]]),O=["src"],V=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("router-view");return c(),d(D,null,[u(n,{class:"router"}),u(N,{ref_key:"modal",ref:o},{content:I(()=>[l("iframe",{class:"form",src:s.onboardingForm},null,8,O)]),_:1},512)],64)}}});const B=b(V,[["__scopeId","data-v-7e290e34"]]);export{B as default};
//# sourceMappingURL=Home.743243d6.js.map
