import{A as a}from"./index.73e917a8.js";import{d as n,f as o,o as f,Y as r,b as d,u as l,Z as p,S as c,a0 as u}from"./index.cda70faa.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="222a8a5a-42df-46ba-a6df-9544f2a6adbf",e._sentryDebugIdIdentifier="sentry-dbid-222a8a5a-42df-46ba-a6df-9544f2a6adbf")}catch{}})();const i=n({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=o(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(m,_)=>e.stepsInfo?(f(),r("nav",{key:0,class:"p-steps",style:p({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[d(l(a),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):c("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.38072a64.js.map
