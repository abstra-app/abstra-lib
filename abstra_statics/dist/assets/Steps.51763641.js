import{d as p,H as l,b as n,eu as a,e as o,aC as r,eB as f,ey as d,eD as _,ew as i,v as u}from"./outputWidgets.3c40e466.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="ceaf6bce-f5a5-489e-8cbb-a1b86222f5f7",e._sentryDebugIdIdentifier="sentry-dbid-ceaf6bce-f5a5-489e-8cbb-a1b86222f5f7")}catch{}})();const b={key:0,class:"p-steps p-component"},m={class:"p-steps-list"},y={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,v)=>e.stepsInfo?(n(),a("nav",b,[o("ol",m,[(n(!0),a(r,null,f(c.value,(k,t)=>(n(),a("li",{key:t,class:d(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",y,[o("span",g,_(t+1),1)])],2))),128))])])):i("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.51763641.js.map
