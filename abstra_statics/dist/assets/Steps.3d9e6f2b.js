import{d as p,f as l,o as n,eu as a,a as o,aE as r,eD as f,ey as d,eA as _,ew as i,S as u}from"./vue-router.944d4283.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a2f01398-1a2a-4923-b757-e63f2f9c594b",e._sentryDebugIdIdentifier="sentry-dbid-a2f01398-1a2a-4923-b757-e63f2f9c594b")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),a("nav",m,[o("ol",y,[(n(!0),a(r,null,f(c.value,(v,t)=>(n(),a("li",{key:t,class:d(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",b,[o("span",g,_(t+1),1)])],2))),128))])])):i("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.3d9e6f2b.js.map
