import{d as y,es as v,G as m,b as d,et as l,e as c,u as g,eu as r,aC as u,ev as w,ew as h,ex as S,v as b,r as k,a as C,f as p,w as I,bf as x}from"./outputWidgets.3a1a3161.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="56ebcb27-bfd4-4f75-aaf7-37e05b6bd773",e._sentryDebugIdIdentifier="sentry-dbid-56ebcb27-bfd4-4f75-aaf7-37e05b6bd773")}catch{}})();const D=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=v(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,f)=>(d(),l("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[c("div",{class:"container",style:r(t.containerStyle),onClick:f[0]||(f[0]=h(()=>{},["stop"]))},[g(i).header?(d(),l("div",{key:0,class:"header",style:r(t.headerStyle)},[u(t.$slots,"header",{},void 0,!0)],4)):w("",!0),c("div",{class:"content",style:r(t.contentStyle)},[u(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const M=b(D,[["__scopeId","data-v-24f739ca"]]),O=["src"],B=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("router-view");return d(),l(x,null,[p(n,{class:"router"}),p(M,{ref_key:"modal",ref:o},{content:I(()=>[c("iframe",{class:"form",src:s.onboardingForm},null,8,O)]),_:1},512)],64)}}});const H=b(B,[["__scopeId","data-v-7e290e34"]]);export{H as default};
//# sourceMappingURL=Home.75ff53f1.js.map
