import{A as n}from"./index.d1f9c79d.js";import{d as a,f as o,o as r,X as d,b as c,u as l,Y as p,R as f,$ as u}from"./vue-router.db6ffb32.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="4d5a4192-9e63-459c-9c55-9dd273db7c52",e._sentryDebugIdIdentifier="sentry-dbid-4d5a4192-9e63-459c-9c55-9dd273db7c52")}catch{}})();const i=a({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=o(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(m,_)=>e.stepsInfo?(r(),d("nav",{key:0,class:"p-steps",style:p({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[c(l(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):f("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.32d9e09b.js.map
