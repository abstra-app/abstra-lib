import{Q as c,f as l}from"./vue-router.03d2a9fc.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="a8fa0e22-94b9-418f-8607-435da229381c",r._sentryDebugIdIdentifier="sentry-dbid-a8fa0e22-94b9-418f-8607-435da229381c")}catch{}})();const i=r=>{const e=c({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),a=t=>{e.value={loading:!1,result:null,error:t}},o=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(a));o();const s=l(()=>e.value.loading),u=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:s,result:u,error:d,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.2cffa1e1.js.map
