import{d as c,y as l,b as n,eV as a,e as o,ay as d,f2 as r,eZ as f,f4 as _,eX as i,E as u}from"./outputWidgets.26390fac.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="d40a7fa0-7b0d-4202-913f-60b668702dd6",e._sentryDebugIdIdentifier="sentry-dbid-d40a7fa0-7b0d-4202-913f-60b668702dd6")}catch{}})();const y={key:0,class:"p-steps p-component"},m={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=c({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,p=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),a("nav",y,[o("ol",m,[(n(!0),a(d,null,r(p.value,(v,t)=>(n(),a("li",{key:t,class:f(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",b,[o("span",g,_(t+1),1)])],2))),128))])])):i("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.9789212b.js.map
