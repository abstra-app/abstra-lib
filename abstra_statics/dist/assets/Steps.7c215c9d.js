import{d as c,f as l,o as n,W as o,a,aJ as r,e9 as d,e4 as f,e6 as _,R as i,$ as u}from"./vue-router.9480c2e0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="339f5d21-7a76-4442-8420-e1fbf3d046de",e._sentryDebugIdIdentifier="sentry-dbid-339f5d21-7a76-4442-8420-e1fbf3d046de")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=c({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,p=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),o("nav",m,[a("ol",y,[(n(!0),o(r,null,d(p.value,(v,t)=>(n(),o("li",{key:t,class:f(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[a("span",b,[a("span",g,_(t+1),1)])],2))),128))])])):i("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.7c215c9d.js.map
