import{A as n}from"./index.2fc011e2.js";import{d as o,f as a,o as r,Y as f,b as l,u as d,Z as p,S as c,a0 as u}from"./index.0ca8e457.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7335f522-8271-4d3e-9e9f-157eee8188b2",e._sentryDebugIdIdentifier="sentry-dbid-7335f522-8271-4d3e-9e9f-157eee8188b2")}catch{}})();const i=o({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=a(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(m,_)=>e.stepsInfo?(r(),f("nav",{key:0,class:"p-steps",style:p({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[l(d(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):c("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.bde697eb.js.map
