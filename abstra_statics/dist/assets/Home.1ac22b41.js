import{d as y,eu as v,F as m,b as c,ev as d,e as l,u as g,ew as r,dr as p,ex as w,ey as h,ez as S,v as b,r as k,a as C,f,w as I,bq as x}from"./outputWidgets.64db3741.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="dbbfc0c3-4ec6-47c8-a65c-cb870dbd45fa",e._sentryDebugIdIdentifier="sentry-dbid-dbbfc0c3-4ec6-47c8-a65c-cb870dbd45fa")}catch{}})();const D=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=v(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,u)=>(c(),d("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[l("div",{class:"container",style:r(t.containerStyle),onClick:u[0]||(u[0]=h(()=>{},["stop"]))},[g(i).header?(c(),d("div",{key:0,class:"header",style:r(t.headerStyle)},[p(t.$slots,"header",{},void 0,!0)],4)):w("",!0),l("div",{class:"content",style:r(t.contentStyle)},[p(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const F=b(D,[["__scopeId","data-v-4d878495"]]),M=["src"],O=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("router-view");return c(),d(x,null,[f(n,{class:"router"}),f(F,{ref_key:"modal",ref:o},{content:I(()=>[l("iframe",{class:"form",src:s.onboardingForm},null,8,M)]),_:1},512)],64)}}});const B=b(O,[["__scopeId","data-v-7e290e34"]]);export{B as default};
//# sourceMappingURL=Home.1ac22b41.js.map
