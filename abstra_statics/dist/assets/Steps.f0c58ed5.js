import{A as n}from"./index.f5ea7489.js";import{d as a,f as o,o as f,Y as r,b as c,u as l,Z as p,S as d,a0 as u}from"./index.94c209a7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="af977fe0-04b5-4700-9912-ec50afa9a6f3",e._sentryDebugIdIdentifier="sentry-dbid-af977fe0-04b5-4700-9912-ec50afa9a6f3")}catch{}})();const i=a({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=o(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(m,_)=>e.stepsInfo?(f(),r("nav",{key:0,class:"p-steps",style:p({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[c(l(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):d("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.f0c58ed5.js.map
