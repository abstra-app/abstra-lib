import{H as c,J as l}from"./outputWidgets.456f91fe.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="3b2fd941-1d76-44ae-a452-ac3388f3a0cd",r._sentryDebugIdIdentifier="sentry-dbid-3b2fd941-1d76-44ae-a452-ac3388f3a0cd")}catch{}})();const i=r=>{const e=c({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),o=t=>{e.value={loading:!1,result:null,error:t}},a=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(o));a();const s=l(()=>e.value.loading),u=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:s,result:u,error:d,refetch:a}};export{i as a};
//# sourceMappingURL=asyncComputed.40ccc1a0.js.map
