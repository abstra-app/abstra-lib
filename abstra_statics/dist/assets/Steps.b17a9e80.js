import{A as n}from"./index.ba4c4eaa.js";import{d as a,f as o,o as f,Y as r,b as l,u as d,Z as p,S as c,a0 as u}from"./index.abaf3ad4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a77ff2e3-afb2-4431-a944-f6bd7700121a",e._sentryDebugIdIdentifier="sentry-dbid-a77ff2e3-afb2-4431-a944-f6bd7700121a")}catch{}})();const i=a({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=o(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(m,_)=>e.stepsInfo?(f(),r("nav",{key:0,class:"p-steps",style:p({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[l(d(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):c("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.b17a9e80.js.map
