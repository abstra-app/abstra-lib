import{A as n}from"./index.13c95740.js";import{d as a,f as o,o as r,Y as c,b as l,u as p,Z as f,S as d,a0 as u}from"./index.da56bac1.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7209c62a-b920-412a-89a6-c76bae15ee07",e._sentryDebugIdIdentifier="sentry-dbid-7209c62a-b920-412a-89a6-c76bae15ee07")}catch{}})();const i=a({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=o(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(m,_)=>e.stepsInfo?(r(),c("nav",{key:0,class:"p-steps",style:f({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[l(p(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):d("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.4da96af4.js.map
