import{d as p,D as l,b as n,ey as a,e as o,aG as r,eH as d,eC as _,eJ as i,eA as u,E as f}from"./outputWidgets.e2a516cf.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="6aa2aea0-6627-4be0-ace2-819e63d4bcae",e._sentryDebugIdIdentifier="sentry-dbid-6aa2aea0-6627-4be0-ace2-819e63d4bcae")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),a("nav",m,[o("ol",y,[(n(!0),a(r,null,d(c.value,(v,t)=>(n(),a("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",b,[o("span",g,i(t+1),1)])],2))),128))])])):u("",!0)}});const w=f(I,[["__scopeId","data-v-c916ecf3"]]);export{w as S};
//# sourceMappingURL=Steps.ff24a2d4.js.map
