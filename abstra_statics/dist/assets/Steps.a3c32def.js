import{d as p,D as l,b as n,ey as o,e as a,aG as r,eH as d,eC as _,eJ as i,eA as f,E as u}from"./outputWidgets.b871b4c2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="c70e5083-35de-4f35-b0b3-886845054695",e._sentryDebugIdIdentifier="sentry-dbid-c70e5083-35de-4f35-b0b3-886845054695")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),o("nav",m,[a("ol",y,[(n(!0),o(r,null,d(c.value,(v,t)=>(n(),o("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[a("span",b,[a("span",g,i(t+1),1)])],2))),128))])])):f("",!0)}});const w=u(I,[["__scopeId","data-v-c916ecf3"]]);export{w as S};
//# sourceMappingURL=Steps.a3c32def.js.map
