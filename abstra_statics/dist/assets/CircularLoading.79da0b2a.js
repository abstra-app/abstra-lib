import{L as d}from"./lottie.629e6b5b.js";import{d as l,r as u,o as f,K as a,b as p,c as _,x as y,A as s,B as g,q as b}from"./registerWidgets.91711800.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6ec6cb45-1789-49fc-b48f-c649be99e1ec",e._sentryDebugIdIdentifier="sentry-dbid-6ec6cb45-1789-49fc-b48f-c649be99e1ec")}catch{}})();const v=l({__name:"CircularLoading",props:{direction:{},justify:{},size:{}},setup(e){const n=e,o=u(null);f(()=>{!o.value||d.loadAnimation({container:o.value,renderer:"svg",loop:!0,autoplay:!0,path:"/circularLoading.json"})});const i=a(()=>{const{direction:t="row",justify:r="space-between"}=n;return{flexDirection:t,justifyContent:r}}),c=a(()=>{const{size:t="40"}=n;return{width:`${t}px`,height:`${t}px`}});return(t,r)=>(p(),_("div",{class:"container",style:s(i.value)},[y("div",{ref_key:"loading",ref:o,style:s(c.value)},null,4),g(t.$slots,"default",{},void 0,!0)],4))}});const x=b(v,[["__scopeId","data-v-a1f994d4"]]);export{x as L};
//# sourceMappingURL=CircularLoading.79da0b2a.js.map
