import{A as n}from"./index.a2c1378c.js";import{d as o,f as a,o as r,Y as f,b as d,u as c,Z as l,S as p,a0 as u}from"./index.04707aff.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="262b5d05-c694-41be-8845-50175ff224d6",e._sentryDebugIdIdentifier="sentry-dbid-262b5d05-c694-41be-8845-50175ff224d6")}catch{}})();const i=o({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=a(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(m,_)=>e.stepsInfo?(r(),f("nav",{key:0,class:"p-steps",style:l({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[d(c(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):p("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.a27ff9e0.js.map
