import{d as y,eU as v,N as m,b as d,eV as l,e as c,u as g,eW as r,dy as u,eX as w,eY as h,eZ as S,E as b,r as k,a as C,f,w as I,ay as D}from"./outputWidgets.9e7bd3a6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="b93d8f38-e2b9-4dae-bdf8-65477c87e7ec",e._sentryDebugIdIdentifier="sentry-dbid-b93d8f38-e2b9-4dae-bdf8-65477c87e7ec")}catch{}})();const M=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=v(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,p)=>(d(),l("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[c("div",{class:"container",style:r(t.containerStyle),onClick:p[0]||(p[0]=h(()=>{},["stop"]))},[g(i).header?(d(),l("div",{key:0,class:"header",style:r(t.headerStyle)},[u(t.$slots,"header",{},void 0,!0)],4)):w("",!0),c("div",{class:"content",style:r(t.contentStyle)},[u(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const N=b(M,[["__scopeId","data-v-4d878495"]]),O=["src"],V=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("router-view");return d(),l(D,null,[f(n,{class:"router"}),f(N,{ref_key:"modal",ref:o},{content:I(()=>[c("iframe",{class:"form",src:s.onboardingForm},null,8,O)]),_:1},512)],64)}}});const B=b(V,[["__scopeId","data-v-7e290e34"]]);export{B as default};
//# sourceMappingURL=Home.ec7d94ac.js.map
