import{d as y,es as b,D as m,o as d,et as c,a as l,u as g,eu as r,dA as f,ev as w,ew as h,ex as S,R as v,e as k,r as C,b as p,w as I,aD as D}from"./vue-router.dc261a27.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="255dadc7-4f73-4c85-ba04-d146c64f7542",e._sentryDebugIdIdentifier="sentry-dbid-255dadc7-4f73-4c85-ba04-d146c64f7542")}catch{}})();const V=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=b(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,u)=>(d(),c("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[l("div",{class:"container",style:r(t.containerStyle),onClick:u[0]||(u[0]=h(()=>{},["stop"]))},[g(i).header?(d(),c("div",{key:0,class:"header",style:r(t.headerStyle)},[f(t.$slots,"header",{},void 0,!0)],4)):w("",!0),l("div",{class:"content",style:r(t.contentStyle)},[f(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const x=v(V,[["__scopeId","data-v-4d878495"]]),M=["src"],O=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("RouterView");return d(),c(D,null,[p(n,{class:"router"}),p(x,{ref_key:"modal",ref:o},{content:I(()=>[l("iframe",{class:"form",src:s.onboardingForm},null,8,M)]),_:1},512)],64)}}});const F=v(O,[["__scopeId","data-v-f5f64833"]]);export{F as default};
//# sourceMappingURL=Home.f7196970.js.map
