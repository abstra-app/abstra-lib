import{A as n}from"./index.cebb9598.js";import{d as a,f as o,o as f,Y as r,b as c,u as l,Z as d,S as p,a0 as u}from"./index.756101fa.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a505f427-f05a-49fb-a1fb-fbc5018c1d6f",e._sentryDebugIdIdentifier="sentry-dbid-a505f427-f05a-49fb-a1fb-fbc5018c1d6f")}catch{}})();const i=a({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=o(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(b,m)=>e.stepsInfo?(f(),r("nav",{key:0,class:"p-steps",style:d({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[c(l(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):p("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.f1d7e300.js.map
