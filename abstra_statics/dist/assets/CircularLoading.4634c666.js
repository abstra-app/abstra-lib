import{L as c}from"./lottie.e46f0f68.js";import{d as l,r as u,o as f,F as r,b as p,c as _,er as y,et as s,c2 as g,t as v}from"./registerWidgets.f5996e62.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1c734f3c-1ced-402a-94df-a4aa84ae7f7c",e._sentryDebugIdIdentifier="sentry-dbid-1c734f3c-1ced-402a-94df-a4aa84ae7f7c")}catch{}})();const m=l({__name:"CircularLoading",props:{direction:{},justify:{},size:{}},setup(e){const n=e,a=u(null);f(()=>{!a.value||c.loadAnimation({container:a.value,renderer:"svg",loop:!0,autoplay:!0,path:"/circularLoading.json"})});const i=r(()=>{const{direction:t="row",justify:o="space-between"}=n;return{flexDirection:t,justifyContent:o}}),d=r(()=>{const{size:t="40"}=n;return{width:`${t}px`,height:`${t}px`}});return(t,o)=>(p(),_("div",{class:"container",style:s(i.value)},[y("div",{ref_key:"loading",ref:a,style:s(d.value)},null,4),g(t.$slots,"default",{},void 0,!0)],4))}});const I=v(m,[["__scopeId","data-v-a1f994d4"]]);export{I as L};
//# sourceMappingURL=CircularLoading.4634c666.js.map
