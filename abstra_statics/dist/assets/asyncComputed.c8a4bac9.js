import{Q as c,f as l}from"./vue-router.9480c2e0.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="d6a3695e-a8de-4e06-9052-360e16e0eab4",r._sentryDebugIdIdentifier="sentry-dbid-d6a3695e-a8de-4e06-9052-360e16e0eab4")}catch{}})();const i=r=>{const e=c({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),a=t=>{e.value={loading:!1,result:null,error:t}},o=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(a));o();const s=l(()=>e.value.loading),u=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:s,result:u,error:d,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.c8a4bac9.js.map
