import{d as y,e8 as v,D as m,X as d,a as c,u as g,Y as r,Z as u,R as w,e9 as h,ea as S,o as l,$ as b,e as k,r as C,b as f,w as I,aR as D}from"./vue-router.5df83cd0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="d220b69c-d66a-4c1b-8f78-ce3163d9742b",e._sentryDebugIdIdentifier="sentry-dbid-d220b69c-d66a-4c1b-8f78-ce3163d9742b")}catch{}})();const V=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=v(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,p)=>(l(),d("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[c("div",{class:"container",style:r(t.containerStyle),onClick:p[0]||(p[0]=h(()=>{},["stop"]))},[g(i).header?(l(),d("div",{key:0,class:"header",style:r(t.headerStyle)},[u(t.$slots,"header",{},void 0,!0)],4)):w("",!0),c("div",{class:"content",style:r(t.contentStyle)},[u(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const M=b(V,[["__scopeId","data-v-4d878495"]]),O=["src"],R=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("RouterView");return l(),d(D,null,[f(n,{class:"router"}),f(M,{ref_key:"modal",ref:o},{content:I(()=>[c("iframe",{class:"form",src:s.onboardingForm},null,8,O)]),_:1},512)],64)}}});const x=b(R,[["__scopeId","data-v-f5f64833"]]);export{x as default};
//# sourceMappingURL=Home.cc58e45d.js.map
