import{A as a}from"./index.ddcf4df4.js";import{d as n,f as o,X as r,b as c,u as f,Y as l,R as p,o as d,$ as u}from"./vue-router.d25b7f26.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="4b5a7abb-7acb-4caa-8c60-a57af12eb146",e._sentryDebugIdIdentifier="sentry-dbid-4b5a7abb-7acb-4caa-8c60-a57af12eb146")}catch{}})();const i=n({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=o(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(b,m)=>e.stepsInfo?(d(),r("nav",{key:0,class:"p-steps",style:l({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[c(f(a),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):p("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.aa274e91.js.map
