import{d as p,J as l,b as n,ew as a,e as o,aE as r,eF as d,eA as _,eH as i,ey as f,x as u}from"./outputWidgets.949e4725.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="1c22f177-ab52-4e89-b3ba-2be5283bbe53",e._sentryDebugIdIdentifier="sentry-dbid-1c22f177-ab52-4e89-b3ba-2be5283bbe53")}catch{}})();const b={key:0,class:"p-steps p-component"},m={class:"p-steps-list"},y={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),a("nav",b,[o("ol",m,[(n(!0),a(r,null,d(c.value,(v,t)=>(n(),a("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",y,[o("span",g,i(t+1),1)])],2))),128))])])):f("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.921c5ca3.js.map
