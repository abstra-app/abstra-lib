import{d as p,y as l,b as n,eV as o,e as a,ay as r,f2 as f,eZ as d,f4 as _,eX as i,E as u}from"./outputWidgets.762923b6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="c534516a-e0c4-46bb-b3c3-3058e1cff3f6",e._sentryDebugIdIdentifier="sentry-dbid-c534516a-e0c4-46bb-b3c3-3058e1cff3f6")}catch{}})();const y={key:0,class:"p-steps p-component"},b={class:"p-steps-list"},m={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),o("nav",y,[a("ol",b,[(n(!0),o(r,null,f(c.value,(v,t)=>(n(),o("li",{key:t,class:d(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[a("span",m,[a("span",g,_(t+1),1)])],2))),128))])])):i("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.eb2f3160.js.map
