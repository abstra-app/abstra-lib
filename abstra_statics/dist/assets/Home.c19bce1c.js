import{d as y,et as b,D as m,o as d,eu as l,a as c,u as g,ev as r,dB as p,ew as w,ex as S,ey as h,S as v,e as k,r as C,b as f,w as I,aE as D}from"./vue-router.182eb029.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="9a926cec-d16d-4ede-9534-bf6e7b8a62e2",e._sentryDebugIdIdentifier="sentry-dbid-9a926cec-d16d-4ede-9534-bf6e7b8a62e2")}catch{}})();const x=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=b(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,u)=>(d(),l("div",{class:h(["background",a.isOpened&&"visible"]),onClick:n},[c("div",{class:"container",style:r(t.containerStyle),onClick:u[0]||(u[0]=S(()=>{},["stop"]))},[g(i).header?(d(),l("div",{key:0,class:"header",style:r(t.headerStyle)},[p(t.$slots,"header",{},void 0,!0)],4)):w("",!0),c("div",{class:"content",style:r(t.contentStyle)},[p(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const B=v(x,[["__scopeId","data-v-4d878495"]]),M=["src"],O=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("router-view");return d(),l(D,null,[f(n,{class:"router"}),f(B,{ref_key:"modal",ref:o},{content:I(()=>[c("iframe",{class:"form",src:s.onboardingForm},null,8,M)]),_:1},512)],64)}}});const F=v(O,[["__scopeId","data-v-7e290e34"]]);export{F as default};
//# sourceMappingURL=Home.c19bce1c.js.map
