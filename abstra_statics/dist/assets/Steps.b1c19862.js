import{A as n}from"./index.2b4961ee.js";import{d as a,f as o,o as r,Y as d,b as c,u as f,Z as l,S as p,a0 as u}from"./index.0050062d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="50aadbab-efa9-4855-b710-95e2012c588d",e._sentryDebugIdIdentifier="sentry-dbid-50aadbab-efa9-4855-b710-95e2012c588d")}catch{}})();const i=a({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=o(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(b,m)=>e.stepsInfo?(r(),d("nav",{key:0,class:"p-steps",style:l({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[c(f(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):p("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.b1c19862.js.map
