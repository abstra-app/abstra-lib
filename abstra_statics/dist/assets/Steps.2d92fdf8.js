import{d as p,f as d,o as n,eu as a,a as o,aE as l,eD as r,ey as _,eA as i,ew as f,S as u}from"./vue-router.e2bf802b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="f14da861-4a51-4c41-8d92-9d3530d5423d",e._sentryDebugIdIdentifier="sentry-dbid-f14da861-4a51-4c41-8d92-9d3530d5423d")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},g={class:"p-menuitem-link"},I={class:"p-steps-number"},b=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=d(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),a("nav",m,[o("ol",y,[(n(!0),a(l,null,r(c.value,(v,t)=>(n(),a("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",g,[o("span",I,i(t+1),1)])],2))),128))])])):f("",!0)}});const D=u(b,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.2d92fdf8.js.map
