import{d as p,H as l,b as n,eX as o,e as a,b3 as r,f4 as f,e$ as d,f6 as _,eZ as i,at as u}from"./outputWidgets.a62a98a2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="258392e3-9645-4183-8b4f-76ec8383b5fc",e._sentryDebugIdIdentifier="sentry-dbid-258392e3-9645-4183-8b4f-76ec8383b5fc")}catch{}})();const m={key:0,class:"p-steps p-component"},b={class:"p-steps-list"},y={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),o("nav",m,[a("ol",b,[(n(!0),o(r,null,f(c.value,(v,t)=>(n(),o("li",{key:t,class:d(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[a("span",y,[a("span",g,_(t+1),1)])],2))),128))])])):i("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.f19b8351.js.map
