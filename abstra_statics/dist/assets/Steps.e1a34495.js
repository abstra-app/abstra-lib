import{A as n}from"./index.d9ccce1d.js";import{d as o,f as a,o as r,Y as d,b as c,u as f,Z as l,S as p,a0 as u}from"./index.f0b92b7e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d4bb96cb-3061-4b28-805f-f2d22dc1b46d",e._sentryDebugIdIdentifier="sentry-dbid-d4bb96cb-3061-4b28-805f-f2d22dc1b46d")}catch{}})();const i=o({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=a(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(b,m)=>e.stepsInfo?(r(),d("nav",{key:0,class:"p-steps",style:l({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[c(f(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):p("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.e1a34495.js.map
