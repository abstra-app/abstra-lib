import{d as p,J as l,b as n,et as a,e as o,bw as r,eB as d,ey as _,eC as i,ew as u,x as f}from"./outputWidgets.eddbac36.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="6c321017-c4ea-41c0-b0ab-729ea19b3d79",e._sentryDebugIdIdentifier="sentry-dbid-6c321017-c4ea-41c0-b0ab-729ea19b3d79")}catch{}})();const b={key:0,class:"p-steps p-component"},m={class:"p-steps-list"},y={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,w)=>e.stepsInfo?(n(),a("nav",b,[o("ol",m,[(n(!0),a(r,null,d(c.value,(k,t)=>(n(),a("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",y,[o("span",g,i(t+1),1)])],2))),128))])])):u("",!0)}});const D=f(I,[["__scopeId","data-v-c6d9488a"]]);export{D as S};
//# sourceMappingURL=Steps.894c5f7d.js.map
