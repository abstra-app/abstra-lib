import{A as n}from"./index.b51b7ea7.js";import{d as a,f as o,o as r,X as c,b as f,u as l,Y as d,R as p,$ as u}from"./vue-router.15b5a782.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="03ecf562-cdf7-46ca-ab02-21a2bbba2219",e._sentryDebugIdIdentifier="sentry-dbid-03ecf562-cdf7-46ca-ab02-21a2bbba2219")}catch{}})();const i=a({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=o(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(b,m)=>e.stepsInfo?(r(),c("nav",{key:0,class:"p-steps",style:d({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[f(l(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):p("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.be62bbce.js.map
