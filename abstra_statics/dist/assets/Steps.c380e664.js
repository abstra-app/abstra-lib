import{d as p,H as l,b as n,eu as o,e as a,aC as d,eC as r,ey as _,eE as f,ew as i,v as u}from"./outputWidgets.2f54a46f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="b8dd9321-c3fb-47e6-af3b-dd555bb0c186",e._sentryDebugIdIdentifier="sentry-dbid-b8dd9321-c3fb-47e6-af3b-dd555bb0c186")}catch{}})();const b={key:0,class:"p-steps p-component"},m={class:"p-steps-list"},y={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,v)=>e.stepsInfo?(n(),o("nav",b,[a("ol",m,[(n(!0),o(d,null,r(c.value,(k,t)=>(n(),o("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[a("span",y,[a("span",g,f(t+1),1)])],2))),128))])])):i("",!0)}});const C=u(I,[["__scopeId","data-v-c916ecf3"]]);export{C as S};
//# sourceMappingURL=Steps.c380e664.js.map
