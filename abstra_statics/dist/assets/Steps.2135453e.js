import{d as p,H as l,b as n,ev as o,e as a,aD as r,eC as d,ez as _,eD as i,ex as f,v as u}from"./outputWidgets.33535317.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="45623048-1e8e-4c8d-b1fd-ca072d5e85e2",e._sentryDebugIdIdentifier="sentry-dbid-45623048-1e8e-4c8d-b1fd-ca072d5e85e2")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,v)=>e.stepsInfo?(n(),o("nav",m,[a("ol",y,[(n(!0),o(r,null,d(c.value,(D,t)=>(n(),o("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[a("span",b,[a("span",g,i(t+1),1)])],2))),128))])])):f("",!0)}});const w=u(I,[["__scopeId","data-v-c916ecf3"]]);export{w as S};
//# sourceMappingURL=Steps.2135453e.js.map
