import{Q as c,f as l}from"./vue-router.56e874b7.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="b438bf5b-a363-4bdb-8155-fa999bce81ac",r._sentryDebugIdIdentifier="sentry-dbid-b438bf5b-a363-4bdb-8155-fa999bce81ac")}catch{}})();const b=r=>{const e=c({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),a=t=>{e.value={loading:!1,result:null,error:t}},o=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(a));o();const s=l(()=>e.value.loading),u=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:s,result:u,error:d,refetch:o}};export{b as a};
//# sourceMappingURL=asyncComputed.d79e50da.js.map
