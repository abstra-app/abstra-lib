import{d as p,y as l,b as n,eV as a,e as o,ay as r,f2 as d,eZ as _,f4 as f,eX as i,E as u}from"./outputWidgets.049ac64d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="d8c27547-0b25-4aee-a7cd-d23fb24e9590",e._sentryDebugIdIdentifier="sentry-dbid-d8c27547-0b25-4aee-a7cd-d23fb24e9590")}catch{}})();const y={key:0,class:"p-steps p-component"},m={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),a("nav",y,[o("ol",m,[(n(!0),a(r,null,d(c.value,(v,t)=>(n(),a("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",b,[o("span",g,f(t+1),1)])],2))),128))])])):i("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.52000ab5.js.map
