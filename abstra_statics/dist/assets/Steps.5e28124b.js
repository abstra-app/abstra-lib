import{A as n}from"./index.77d79f62.js";import{d as a,f as o,X as r,b as f,u as c,Y as l,R as p,o as d,$ as u}from"./vue-router.fd306bcf.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="95fa11f8-32c6-4e57-82c1-26fb2118687a",e._sentryDebugIdIdentifier="sentry-dbid-95fa11f8-32c6-4e57-82c1-26fb2118687a")}catch{}})();const i=a({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=o(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(m,_)=>e.stepsInfo?(d(),r("nav",{key:0,class:"p-steps",style:l({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[f(c(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):p("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.5e28124b.js.map
