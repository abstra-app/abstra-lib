import{d as c,F as l,b as n,c as a,er as o,bw as r,ez as d,ew as f,eA as _,eu as i,t as u}from"./registerWidgets.cd0230b6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="66f9fb08-7776-4d14-ba47-38f00d92bfa4",e._sentryDebugIdIdentifier="sentry-dbid-66f9fb08-7776-4d14-ba47-38f00d92bfa4")}catch{}})();const b={key:0,class:"p-steps p-component"},m={class:"p-steps-list"},y={class:"p-menuitem-link"},g={class:"p-steps-number"},I=c({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,p=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,w)=>e.stepsInfo?(n(),a("nav",b,[o("ol",m,[(n(!0),a(r,null,d(p.value,(k,t)=>(n(),a("li",{key:t,class:f(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",y,[o("span",g,_(t+1),1)])],2))),128))])])):i("",!0)}});const D=u(I,[["__scopeId","data-v-c6d9488a"]]);export{D as S};
//# sourceMappingURL=Steps.beece2f3.js.map
