import{d as p,H as l,b as n,ev as o,e as a,aD as r,eC as d,ez as _,eD as i,ex as f,v as u}from"./outputWidgets.6eb42f16.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="828d4736-3891-4088-9c88-785412f10b7a",e._sentryDebugIdIdentifier="sentry-dbid-828d4736-3891-4088-9c88-785412f10b7a")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,v)=>e.stepsInfo?(n(),o("nav",m,[a("ol",y,[(n(!0),o(r,null,d(c.value,(D,t)=>(n(),o("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[a("span",b,[a("span",g,i(t+1),1)])],2))),128))])])):f("",!0)}});const w=u(I,[["__scopeId","data-v-c916ecf3"]]);export{w as S};
//# sourceMappingURL=Steps.35ad5d14.js.map
