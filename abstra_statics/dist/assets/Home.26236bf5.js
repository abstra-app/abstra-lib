import{d as y,et as b,D as m,o as d,eu as l,a as c,u as g,ev as r,dB as u,ew as w,ex as S,ey as h,S as v,e as k,r as C,b as p,w as I,aE as D}from"./vue-router.41854a3c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="ff40d423-fb21-42c5-b838-d72f0e8d0f01",e._sentryDebugIdIdentifier="sentry-dbid-ff40d423-fb21-42c5-b838-d72f0e8d0f01")}catch{}})();const x=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=b(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,f)=>(d(),l("div",{class:h(["background",a.isOpened&&"visible"]),onClick:n},[c("div",{class:"container",style:r(t.containerStyle),onClick:f[0]||(f[0]=S(()=>{},["stop"]))},[g(i).header?(d(),l("div",{key:0,class:"header",style:r(t.headerStyle)},[u(t.$slots,"header",{},void 0,!0)],4)):w("",!0),c("div",{class:"content",style:r(t.contentStyle)},[u(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const B=v(x,[["__scopeId","data-v-4d878495"]]),M=["src"],O=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("router-view");return d(),l(D,null,[p(n,{class:"router"}),p(B,{ref_key:"modal",ref:o},{content:I(()=>[c("iframe",{class:"form",src:s.onboardingForm},null,8,M)]),_:1},512)],64)}}});const F=v(O,[["__scopeId","data-v-7e290e34"]]);export{F as default};
//# sourceMappingURL=Home.26236bf5.js.map
