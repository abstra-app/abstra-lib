import{L as l}from"./lottie.1c3b7cde.js";import{d as u,r as f,o as p,K as s,b as _,c as y,x as g,A as a,z as i,B as b,q as m}from"./registerWidgets.726232df.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cee6c876-4762-47cb-8931-28c2b76329c2",e._sentryDebugIdIdentifier="sentry-dbid-cee6c876-4762-47cb-8931-28c2b76329c2")}catch{}})();const v=u({__name:"CircularLoading",props:{direction:null,justify:null,size:null},setup(e){const t=e,o=f(null);p(()=>{!o.value||l.loadAnimation({container:o.value,renderer:"svg",loop:!0,autoplay:!0,path:"/circularLoading.json"})});const c=s(()=>{const{direction:n="row",justify:r="space-between"}=t;return{flexDirection:n,justifyContent:r}}),d=s(()=>{const{size:n="40"}=t;return{width:`${n}px`,height:`${n}px`}});return(n,r)=>(_(),y("div",{class:"container",style:a(i(c))},[g("div",{ref_key:"loading",ref:o,style:a(i(d))},null,4),b(n.$slots,"default",{},void 0,!0)],4))}});const I=m(v,[["__scopeId","data-v-a1f994d4"]]);export{I as L};
//# sourceMappingURL=CircularLoading.4a9d4906.js.map
