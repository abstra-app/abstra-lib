import{d as y,et as b,F as m,b as c,eu as d,e as l,u as g,ev as r,dh as u,ew as w,ex as h,ey as S,t as v,r as k,a as C,f as p,w as I,a_ as x}from"./outputWidgets.5ad528ac.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="bc658786-02f4-410f-8867-e7483df1c6b8",e._sentryDebugIdIdentifier="sentry-dbid-bc658786-02f4-410f-8867-e7483df1c6b8")}catch{}})();const D=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:t}){const i=b(),_=()=>{a.isOpened=!0,t("open")},n=()=>{a.isOpened=!1,t("close")};s({open:_,close:n});const a=m({isOpened:!1});return(o,f)=>(c(),d("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[l("div",{class:"container",style:r(o.containerStyle),onClick:f[0]||(f[0]=h(()=>{},["stop"]))},[g(i).header?(c(),d("div",{key:0,class:"header",style:r(o.headerStyle)},[u(o.$slots,"header",{},void 0,!0)],4)):w("",!0),l("div",{class:"content",style:r(o.contentStyle)},[u(o.$slots,"content",{},void 0,!0)],4)],4)],2))}});const F=v(D,[["__scopeId","data-v-24f739ca"]]),M=["src"],O=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),t=k(null);return(i,_)=>{const n=C("router-view");return c(),d(x,null,[p(n,{class:"router"}),p(F,{ref_key:"modal",ref:t},{content:I(()=>[l("iframe",{class:"form",src:s.onboardingForm},null,8,M)]),_:1},512)],64)}}});const H=v(O,[["__scopeId","data-v-7e290e34"]]);export{H as default};
//# sourceMappingURL=Home.9481c77d.js.map
