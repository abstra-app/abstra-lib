import{A as n}from"./index.a150d124.js";import{d as a,f as o,X as r,b as d,u as c,Y as f,R as l,o as p,$ as u}from"./vue-router.5df83cd0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5b0dc2da-1ef9-4229-a505-d7bc9b9f11dc",e._sentryDebugIdIdentifier="sentry-dbid-5b0dc2da-1ef9-4229-a505-d7bc9b9f11dc")}catch{}})();const i=a({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=o(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(b,m)=>e.stepsInfo?(p(),r("nav",{key:0,class:"p-steps",style:f({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[d(c(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):l("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.c00eb7ce.js.map
