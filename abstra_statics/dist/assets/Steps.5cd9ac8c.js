import{A as n}from"./index.539da702.js";import{d as a,f as o,o as c,Y as f,b as r,u as d,Z as l,S as p,a0 as u}from"./index.273a97ee.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0f196057-cfc0-45f3-9ade-dc4bafda7c55",e._sentryDebugIdIdentifier="sentry-dbid-0f196057-cfc0-45f3-9ade-dc4bafda7c55")}catch{}})();const i=a({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=o(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(m,_)=>e.stepsInfo?(c(),f("nav",{key:0,class:"p-steps",style:l({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[r(d(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):p("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.5cd9ac8c.js.map
