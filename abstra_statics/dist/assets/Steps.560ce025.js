import{d as p,H as l,b as n,ev as a,e as o,aD as r,eC as f,ez as d,eD as _,ex as i,v as u}from"./outputWidgets.b14d4ea2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="b0c0ef4b-f22a-41f3-aa83-28a086ee9738",e._sentryDebugIdIdentifier="sentry-dbid-b0c0ef4b-f22a-41f3-aa83-28a086ee9738")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,v)=>e.stepsInfo?(n(),a("nav",m,[o("ol",y,[(n(!0),a(r,null,f(c.value,(D,t)=>(n(),a("li",{key:t,class:d(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",b,[o("span",g,_(t+1),1)])],2))),128))])])):i("",!0)}});const w=u(I,[["__scopeId","data-v-c916ecf3"]]);export{w as S};
//# sourceMappingURL=Steps.560ce025.js.map
