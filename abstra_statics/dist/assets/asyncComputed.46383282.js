import{E as c,G as l}from"./outputWidgets.bf3b4f42.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="dd8f2a44-3a0d-46bf-9578-62dddde5b4ec",r._sentryDebugIdIdentifier="sentry-dbid-dd8f2a44-3a0d-46bf-9578-62dddde5b4ec")}catch{}})();const i=r=>{const e=c({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),o=t=>{e.value={loading:!1,result:null,error:t}},d=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(o));d();const s=l(()=>e.value.loading),u=l(()=>e.value.result),a=l(()=>e.value.error);return{loading:s,result:u,error:a,refetch:d}};export{i as a};
//# sourceMappingURL=asyncComputed.46383282.js.map
