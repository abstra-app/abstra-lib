import{d as c,y as l,b as n,eV as o,e as a,ay as r,f2 as f,eZ as d,f4 as _,eX as i,E as u}from"./outputWidgets.8ff86542.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="1ef58f34-4d05-4fb6-93a2-931640be5fe4",e._sentryDebugIdIdentifier="sentry-dbid-1ef58f34-4d05-4fb6-93a2-931640be5fe4")}catch{}})();const y={key:0,class:"p-steps p-component"},m={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=c({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,p=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),o("nav",y,[a("ol",m,[(n(!0),o(r,null,f(p.value,(v,t)=>(n(),o("li",{key:t,class:d(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[a("span",b,[a("span",g,_(t+1),1)])],2))),128))])])):i("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.3f857544.js.map
