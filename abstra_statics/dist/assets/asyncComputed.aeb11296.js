import{Q as d,f as l}from"./vue-router.8ff1f30b.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="7e9f9f74-b8ed-4b4c-baec-484c6769c322",r._sentryDebugIdIdentifier="sentry-dbid-7e9f9f74-b8ed-4b4c-baec-484c6769c322")}catch{}})();const i=r=>{const e=d({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),s=t=>{e.value={loading:!1,result:null,error:t}},o=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(s));o();const u=l(()=>e.value.loading),a=l(()=>e.value.result),c=l(()=>e.value.error);return{loading:u,result:a,error:c,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.aeb11296.js.map
