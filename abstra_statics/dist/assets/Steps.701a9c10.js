import{A as n}from"./index.9c25c235.js";import{d as a,f as o,o as r,Y as d,b as c,u as l,Z as p,S as f,a0 as u}from"./index.7c703ad7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c69b65ae-a10e-4d96-a6d4-54801e04b55a",e._sentryDebugIdIdentifier="sentry-dbid-c69b65ae-a10e-4d96-a6d4-54801e04b55a")}catch{}})();const i=a({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=o(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(m,_)=>e.stepsInfo?(r(),d("nav",{key:0,class:"p-steps",style:p({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[c(l(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):f("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.701a9c10.js.map
