import{A as n}from"./index.5aea3a5f.js";import{d as o,f as a,o as r,Y as d,b as f,u as c,Z as l,S as p,a0 as u}from"./index.504d9e1e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d0b0f126-f2be-404c-b5eb-7bd1d9679b16",e._sentryDebugIdIdentifier="sentry-dbid-d0b0f126-f2be-404c-b5eb-7bd1d9679b16")}catch{}})();const b=o({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=a(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(i,m)=>e.stepsInfo?(r(),d("nav",{key:0,class:"p-steps",style:l({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[f(c(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):p("",!0)}});const I=u(b,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.ba36cc27.js.map
