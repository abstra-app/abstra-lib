import{d as p,f as d,X as n,a,aR as l,ee as r,R as f,o,ea as _,ec as i,$ as u}from"./vue-router.545ea1f0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="d3dc881d-79c0-44f3-b3f5-5ad748de0b05",e._sentryDebugIdIdentifier="sentry-dbid-d3dc881d-79c0-44f3-b3f5-5ad748de0b05")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=d(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(o(),n("nav",m,[a("ol",y,[(o(!0),n(l,null,r(c.value,(v,t)=>(o(),n("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[a("span",b,[a("span",g,i(t+1),1)])],2))),128))])])):f("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.650e748a.js.map
