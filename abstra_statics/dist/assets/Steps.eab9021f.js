import{d as p,y as l,b as n,eV as a,e as o,ay as r,f2 as d,eZ as f,f4 as _,eX as i,E as u}from"./outputWidgets.ebb9dc3f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="df57b9b2-cb99-4735-af52-a4027a382766",e._sentryDebugIdIdentifier="sentry-dbid-df57b9b2-cb99-4735-af52-a4027a382766")}catch{}})();const y={key:0,class:"p-steps p-component"},b={class:"p-steps-list"},m={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),a("nav",y,[o("ol",b,[(n(!0),a(r,null,d(c.value,(v,t)=>(n(),a("li",{key:t,class:f(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",m,[o("span",g,_(t+1),1)])],2))),128))])])):i("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.eab9021f.js.map
