import{A as n}from"./index.c85d4218.js";import{d as a,f as o,o as r,X as c,b as f,u as l,Y as p,R as d,$ as u}from"./vue-router.7162dc98.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fff5cbc5-101b-4a13-9b4c-300e4301b58e",e._sentryDebugIdIdentifier="sentry-dbid-fff5cbc5-101b-4a13-9b4c-300e4301b58e")}catch{}})();const i=a({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=o(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(b,m)=>e.stepsInfo?(r(),c("nav",{key:0,class:"p-steps",style:p({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[f(l(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):d("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.9e0beb7b.js.map
