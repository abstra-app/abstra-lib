import{L as c}from"./lottie.0b007633.js";import{d as l,r as u,o as f,F as r,b as p,c as _,er as y,et as s,c2 as g,t as b}from"./registerWidgets.a7f9f083.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0c4d5787-87fc-43bd-a4b9-8447ab687420",e._sentryDebugIdIdentifier="sentry-dbid-0c4d5787-87fc-43bd-a4b9-8447ab687420")}catch{}})();const v=l({__name:"CircularLoading",props:{direction:{},justify:{},size:{}},setup(e){const n=e,o=u(null);f(()=>{!o.value||c.loadAnimation({container:o.value,renderer:"svg",loop:!0,autoplay:!0,path:"/circularLoading.json"})});const i=r(()=>{const{direction:t="row",justify:a="space-between"}=n;return{flexDirection:t,justifyContent:a}}),d=r(()=>{const{size:t="40"}=n;return{width:`${t}px`,height:`${t}px`}});return(t,a)=>(p(),_("div",{class:"container",style:s(i.value)},[y("div",{ref_key:"loading",ref:o,style:s(d.value)},null,4),g(t.$slots,"default",{},void 0,!0)],4))}});const I=b(v,[["__scopeId","data-v-a1f994d4"]]);export{I as L};
//# sourceMappingURL=CircularLoading.f04a39f3.js.map
