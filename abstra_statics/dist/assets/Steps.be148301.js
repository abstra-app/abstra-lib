import{A as n}from"./index.8a5355e5.js";import{d as a,f as o,o as c,Y as r,b as d,u as f,Z as l,S as p,a0 as u}from"./index.4e5c0e37.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6a24cc8a-04dc-4ecc-9fa5-23d646a53df8",e._sentryDebugIdIdentifier="sentry-dbid-6a24cc8a-04dc-4ecc-9fa5-23d646a53df8")}catch{}})();const i=a({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=o(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(m,_)=>e.stepsInfo?(c(),r("nav",{key:0,class:"p-steps",style:l({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[d(f(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):p("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.be148301.js.map
