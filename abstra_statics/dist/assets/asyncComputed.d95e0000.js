import{R as c,H as l}from"./outputWidgets.0ab77049.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="e91f8985-2782-4801-8669-bc3b7b39526b",r._sentryDebugIdIdentifier="sentry-dbid-e91f8985-2782-4801-8669-bc3b7b39526b")}catch{}})();const i=r=>{const e=c({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),s=t=>{e.value={loading:!1,result:null,error:t}},o=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(s));o();const u=l(()=>e.value.loading),a=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:u,result:a,error:d,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.d95e0000.js.map
