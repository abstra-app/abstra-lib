import{d as y,eu as b,F as m,b as d,ev as l,e as c,u as g,ew as r,ds as p,ex as w,ey as h,ez as S,v,r as k,a as C,f,w as I,bq as x}from"./outputWidgets.43a10844.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a09494e5-294c-410f-bfee-1c507796a84b",e._sentryDebugIdIdentifier="sentry-dbid-a09494e5-294c-410f-bfee-1c507796a84b")}catch{}})();const D=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=b(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,u)=>(d(),l("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[c("div",{class:"container",style:r(t.containerStyle),onClick:u[0]||(u[0]=h(()=>{},["stop"]))},[g(i).header?(d(),l("div",{key:0,class:"header",style:r(t.headerStyle)},[p(t.$slots,"header",{},void 0,!0)],4)):w("",!0),c("div",{class:"content",style:r(t.contentStyle)},[p(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const F=v(D,[["__scopeId","data-v-4d878495"]]),M=["src"],O=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("router-view");return d(),l(x,null,[f(n,{class:"router"}),f(F,{ref_key:"modal",ref:o},{content:I(()=>[c("iframe",{class:"form",src:s.onboardingForm},null,8,M)]),_:1},512)],64)}}});const B=v(O,[["__scopeId","data-v-7e290e34"]]);export{B as default};
//# sourceMappingURL=Home.5add0faf.js.map
