import{A as n}from"./index.ff5213e8.js";import{d as o,f as a,o as r,X as d,b as l,u as p,Y as c,R as f,$ as u}from"./vue-router.f3adf768.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="28535d12-e6bb-4026-8d44-990575ded858",e._sentryDebugIdIdentifier="sentry-dbid-28535d12-e6bb-4026-8d44-990575ded858")}catch{}})();const i=o({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=a(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(m,_)=>e.stepsInfo?(r(),d("nav",{key:0,class:"p-steps",style:c({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[l(p(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):f("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.b48ccc1b.js.map
