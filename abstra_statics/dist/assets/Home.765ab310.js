import{d as y,ep as v,D as m,W as d,a as l,u as g,X as r,Z as p,R as w,eq as h,er as S,o as c,$ as b,e as k,r as C,b as u,w as I,aJ as D}from"./vue-router.33ac8cf0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="b5ee4014-ae93-42da-868f-288cb83f991f",e._sentryDebugIdIdentifier="sentry-dbid-b5ee4014-ae93-42da-868f-288cb83f991f")}catch{}})();const V=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=v(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,f)=>(c(),d("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[l("div",{class:"container",style:r(t.containerStyle),onClick:f[0]||(f[0]=h(()=>{},["stop"]))},[g(i).header?(c(),d("div",{key:0,class:"header",style:r(t.headerStyle)},[p(t.$slots,"header",{},void 0,!0)],4)):w("",!0),l("div",{class:"content",style:r(t.contentStyle)},[p(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const M=b(V,[["__scopeId","data-v-4d878495"]]),O=["src"],$=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("RouterView");return c(),d(D,null,[u(n,{class:"router"}),u(M,{ref_key:"modal",ref:o},{content:I(()=>[l("iframe",{class:"form",src:s.onboardingForm},null,8,O)]),_:1},512)],64)}}});const B=b($,[["__scopeId","data-v-f5f64833"]]);export{B as default};
//# sourceMappingURL=Home.765ab310.js.map
