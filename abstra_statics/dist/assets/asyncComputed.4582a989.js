import{H as d,J as l}from"./outputWidgets.b0def7ba.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="fe03b2a9-1f4c-4ec6-81d4-99a66a22b6c4",r._sentryDebugIdIdentifier="sentry-dbid-fe03b2a9-1f4c-4ec6-81d4-99a66a22b6c4")}catch{}})();const i=r=>{const e=d({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),a=t=>{e.value={loading:!1,result:null,error:t}},o=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(a));o();const s=l(()=>e.value.loading),u=l(()=>e.value.result),c=l(()=>e.value.error);return{loading:s,result:u,error:c,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.4582a989.js.map
