import{d as p,f as l,o as n,W as o,a,aJ as d,eD as r,ey as f,eA as _,R as i,$ as u}from"./vue-router.e3a418ab.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="e07b839d-9565-4d9e-80bd-ec1ff5860dbf",e._sentryDebugIdIdentifier="sentry-dbid-e07b839d-9565-4d9e-80bd-ec1ff5860dbf")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),o("nav",m,[a("ol",y,[(n(!0),o(d,null,r(c.value,(v,t)=>(n(),o("li",{key:t,class:f(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[a("span",b,[a("span",g,_(t+1),1)])],2))),128))])])):i("",!0)}});const w=u(I,[["__scopeId","data-v-c916ecf3"]]);export{w as S};
//# sourceMappingURL=Steps.2e6933eb.js.map
