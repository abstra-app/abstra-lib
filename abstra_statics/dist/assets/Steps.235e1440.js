import{d as c,f as l,o as n,W as a,a as o,aJ as d,e9 as r,e4 as _,e6 as i,R as f,$ as u}from"./vue-router.2175af64.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="3f97d0b5-ada3-463d-a725-113bd3976a17",e._sentryDebugIdIdentifier="sentry-dbid-3f97d0b5-ada3-463d-a725-113bd3976a17")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=c({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,p=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),a("nav",m,[o("ol",y,[(n(!0),a(d,null,r(p.value,(v,t)=>(n(),a("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",b,[o("span",g,i(t+1),1)])],2))),128))])])):f("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.235e1440.js.map
