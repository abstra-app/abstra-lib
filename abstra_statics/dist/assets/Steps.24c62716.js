import{d as p,H as l,b as n,et as a,e as o,bf as r,eA as d,ex as _,eB as i,ev as u,v as f}from"./outputWidgets.3a1a3161.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="44e69936-766c-4586-965d-4a9200241c86",e._sentryDebugIdIdentifier="sentry-dbid-44e69936-766c-4586-965d-4a9200241c86")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,v)=>e.stepsInfo?(n(),a("nav",m,[o("ol",y,[(n(!0),a(r,null,d(c.value,(k,t)=>(n(),a("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",b,[o("span",g,i(t+1),1)])],2))),128))])])):u("",!0)}});const D=f(I,[["__scopeId","data-v-c6d9488a"]]);export{D as S};
//# sourceMappingURL=Steps.24c62716.js.map
