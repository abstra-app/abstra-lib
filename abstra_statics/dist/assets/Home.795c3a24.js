import{d as y,es as b,G as m,b as l,et as d,e as c,u as g,eu as r,aC as p,ev as w,ew as h,ex as S,v,r as k,a as C,f,w as I,bf as x}from"./outputWidgets.26432679.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="23890cb4-5785-48de-8308-782b4973245f",e._sentryDebugIdIdentifier="sentry-dbid-23890cb4-5785-48de-8308-782b4973245f")}catch{}})();const D=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=b(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,u)=>(l(),d("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[c("div",{class:"container",style:r(t.containerStyle),onClick:u[0]||(u[0]=h(()=>{},["stop"]))},[g(i).header?(l(),d("div",{key:0,class:"header",style:r(t.headerStyle)},[p(t.$slots,"header",{},void 0,!0)],4)):w("",!0),c("div",{class:"content",style:r(t.contentStyle)},[p(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const M=v(D,[["__scopeId","data-v-24f739ca"]]),O=["src"],B=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("router-view");return l(),d(x,null,[f(n,{class:"router"}),f(M,{ref_key:"modal",ref:o},{content:I(()=>[c("iframe",{class:"form",src:s.onboardingForm},null,8,O)]),_:1},512)],64)}}});const H=v(B,[["__scopeId","data-v-7e290e34"]]);export{H as default};
//# sourceMappingURL=Home.795c3a24.js.map
