import{d as y,ev as b,I as m,b as d,ew as l,e as c,u as g,ex as r,dn as u,ey as w,ez as h,eA as S,x as v,r as k,a as I,f,w as C,aE as x}from"./outputWidgets.376900d4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="b2086cda-6859-4e72-a33a-3508dd6080a8",e._sentryDebugIdIdentifier="sentry-dbid-b2086cda-6859-4e72-a33a-3508dd6080a8")}catch{}})();const D=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=b(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,p)=>(d(),l("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[c("div",{class:"container",style:r(t.containerStyle),onClick:p[0]||(p[0]=h(()=>{},["stop"]))},[g(i).header?(d(),l("div",{key:0,class:"header",style:r(t.headerStyle)},[u(t.$slots,"header",{},void 0,!0)],4)):w("",!0),c("div",{class:"content",style:r(t.contentStyle)},[u(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const M=v(D,[["__scopeId","data-v-4d878495"]]),O=["src"],z=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=I("router-view");return d(),l(x,null,[f(n,{class:"router"}),f(M,{ref_key:"modal",ref:o},{content:C(()=>[c("iframe",{class:"form",src:s.onboardingForm},null,8,O)]),_:1},512)],64)}}});const E=v(z,[["__scopeId","data-v-7e290e34"]]);export{E as default};
//# sourceMappingURL=Home.50953ec8.js.map
