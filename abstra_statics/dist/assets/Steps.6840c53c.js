import{A as n}from"./index.329f3ce2.js";import{d as a,f as o,o as r,Y as l,b as d,u as p,Z as c,S as f,a0 as u}from"./index.ea15e788.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="3d311b00-3bb7-4107-8ab9-04b667501525",e._sentryDebugIdIdentifier="sentry-dbid-3d311b00-3bb7-4107-8ab9-04b667501525")}catch{}})();const i=a({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=o(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(b,m)=>e.stepsInfo?(r(),l("nav",{key:0,class:"p-steps",style:c({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[d(p(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):f("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.6840c53c.js.map
