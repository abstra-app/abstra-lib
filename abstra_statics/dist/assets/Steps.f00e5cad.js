import{d as p,y as l,b as n,eV as o,e as a,ay as r,f2 as d,eZ as _,f4 as f,eX as i,E as u}from"./outputWidgets.03a58f88.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="50304b72-a523-46c8-86eb-7def88468385",e._sentryDebugIdIdentifier="sentry-dbid-50304b72-a523-46c8-86eb-7def88468385")}catch{}})();const y={key:0,class:"p-steps p-component"},m={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),o("nav",y,[a("ol",m,[(n(!0),o(r,null,d(c.value,(v,t)=>(n(),o("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[a("span",b,[a("span",g,f(t+1),1)])],2))),128))])])):i("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.f00e5cad.js.map
