import{R as c,f as l}from"./index.1a1f6336.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="67f68dbc-665f-4a6a-9aa6-2284d9f4ac78",r._sentryDebugIdIdentifier="sentry-dbid-67f68dbc-665f-4a6a-9aa6-2284d9f4ac78")}catch{}})();const i=r=>{const e=c({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),o=t=>{e.value={loading:!1,result:null,error:t}},a=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(o));a();const s=l(()=>e.value.loading),u=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:s,result:u,error:d,refetch:a}};export{i as a};
//# sourceMappingURL=asyncComputed.08ef64d3.js.map
