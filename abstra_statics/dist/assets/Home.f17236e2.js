import{d as m,es as b,E as y,b as d,et as c,e as l,u as g,eu as r,dm as p,ev as w,ew as h,ex as S,t as v,r as k,a as C,f,w as I,bo as x}from"./outputWidgets.8246053b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="48cbc5e0-e6c8-40e0-99e2-a2dd7bd76c0f",e._sentryDebugIdIdentifier="sentry-dbid-48cbc5e0-e6c8-40e0-99e2-a2dd7bd76c0f")}catch{}})();const D=m({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=b(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=y({isOpened:!1});return(t,u)=>(d(),c("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[l("div",{class:"container",style:r(t.containerStyle),onClick:u[0]||(u[0]=h(()=>{},["stop"]))},[g(i).header?(d(),c("div",{key:0,class:"header",style:r(t.headerStyle)},[p(t.$slots,"header",{},void 0,!0)],4)):w("",!0),l("div",{class:"content",style:r(t.contentStyle)},[p(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const M=v(D,[["__scopeId","data-v-4d878495"]]),O=["src"],B=m({__name:"Home",setup(e){const s=y({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("router-view");return d(),c(x,null,[f(n,{class:"router"}),f(M,{ref_key:"modal",ref:o},{content:I(()=>[l("iframe",{class:"form",src:s.onboardingForm},null,8,O)]),_:1},512)],64)}}});const F=v(B,[["__scopeId","data-v-7e290e34"]]);export{F as default};
//# sourceMappingURL=Home.f17236e2.js.map
