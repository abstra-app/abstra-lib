import{A as n}from"./index.968cfb11.js";import{d as o,f as a,o as c,Y as r,b as d,u as f,Z as l,S as p,a0 as u}from"./index.36dac945.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fc163cd2-4465-4990-9703-db85cc08b0bd",e._sentryDebugIdIdentifier="sentry-dbid-fc163cd2-4465-4990-9703-db85cc08b0bd")}catch{}})();const i=o({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=a(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(b,m)=>e.stepsInfo?(c(),r("nav",{key:0,class:"p-steps",style:l({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[d(f(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):p("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.d49086f4.js.map
