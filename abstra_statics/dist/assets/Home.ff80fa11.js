import{d as y,et as b,y as m,o as c,eu as d,a as l,u as g,ev as r,dB as p,ew as w,ex as h,ey as S,R as v,q as k,r as C,b as f,w as I,aD as D}from"./vue-router.533386a6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="1420e2ac-c4fe-43c8-ae44-2e530ba64642",e._sentryDebugIdIdentifier="sentry-dbid-1420e2ac-c4fe-43c8-ae44-2e530ba64642")}catch{}})();const x=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=b(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,u)=>(c(),d("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[l("div",{class:"container",style:r(t.containerStyle),onClick:u[0]||(u[0]=h(()=>{},["stop"]))},[g(i).header?(c(),d("div",{key:0,class:"header",style:r(t.headerStyle)},[p(t.$slots,"header",{},void 0,!0)],4)):w("",!0),l("div",{class:"content",style:r(t.contentStyle)},[p(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const B=v(x,[["__scopeId","data-v-4d878495"]]),M=["src"],O=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("router-view");return c(),d(D,null,[f(n,{class:"router"}),f(B,{ref_key:"modal",ref:o},{content:I(()=>[l("iframe",{class:"form",src:s.onboardingForm},null,8,M)]),_:1},512)],64)}}});const H=v(O,[["__scopeId","data-v-7e290e34"]]);export{H as default};
//# sourceMappingURL=Home.ff80fa11.js.map
