import{d as p,f as l,o as n,V as a,a as o,aI as r,eD as d,ey as f,eA as _,R as i,Y as u}from"./vue-router.59ab4117.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="f66cf75e-3ac2-4710-a420-d55408487d50",e._sentryDebugIdIdentifier="sentry-dbid-f66cf75e-3ac2-4710-a420-d55408487d50")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},I={class:"p-menuitem-link"},g={class:"p-steps-number"},b=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),a("nav",m,[o("ol",y,[(n(!0),a(r,null,d(c.value,(v,t)=>(n(),a("li",{key:t,class:f(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",I,[o("span",g,_(t+1),1)])],2))),128))])])):i("",!0)}});const w=u(b,[["__scopeId","data-v-c916ecf3"]]);export{w as S};
//# sourceMappingURL=Steps.49c2e8f6.js.map
