import{A as n}from"./index.3b8715ff.js";import{d as a,f as o,o as r,Y as c,b as f,u as l,Z as d,S as p,a0 as u}from"./index.473e0632.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8c89a401-e036-478e-bde0-f621c76c6451",e._sentryDebugIdIdentifier="sentry-dbid-8c89a401-e036-478e-bde0-f621c76c6451")}catch{}})();const i=a({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=o(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(m,_)=>e.stepsInfo?(r(),c("nav",{key:0,class:"p-steps",style:d({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[f(l(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):p("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.58113225.js.map
