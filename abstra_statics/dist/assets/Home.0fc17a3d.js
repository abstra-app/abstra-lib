import{d as y,e8 as b,D as m,X as c,a as d,u as g,Y as r,Z as p,R as w,e9 as h,ea as S,o as l,$ as v,e as k,r as C,b as u,w as I,aR as D}from"./vue-router.69927c79.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="28a4fe5b-ecf8-4e7f-a1cc-40d8a9c22e93",e._sentryDebugIdIdentifier="sentry-dbid-28a4fe5b-ecf8-4e7f-a1cc-40d8a9c22e93")}catch{}})();const V=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=b(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,f)=>(l(),c("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[d("div",{class:"container",style:r(t.containerStyle),onClick:f[0]||(f[0]=h(()=>{},["stop"]))},[g(i).header?(l(),c("div",{key:0,class:"header",style:r(t.headerStyle)},[p(t.$slots,"header",{},void 0,!0)],4)):w("",!0),d("div",{class:"content",style:r(t.contentStyle)},[p(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const M=v(V,[["__scopeId","data-v-4d878495"]]),O=["src"],R=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("RouterView");return l(),c(D,null,[u(n,{class:"router"}),u(M,{ref_key:"modal",ref:o},{content:I(()=>[d("iframe",{class:"form",src:s.onboardingForm},null,8,O)]),_:1},512)],64)}}});const x=v(R,[["__scopeId","data-v-f5f64833"]]);export{x as default};
//# sourceMappingURL=Home.0fc17a3d.js.map
