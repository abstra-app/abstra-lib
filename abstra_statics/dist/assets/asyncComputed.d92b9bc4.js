import{Q as c,f as l}from"./vue-router.a1f4ea8c.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="8b1b0d72-3006-4e32-8e38-db8cb5ab9994",r._sentryDebugIdIdentifier="sentry-dbid-8b1b0d72-3006-4e32-8e38-db8cb5ab9994")}catch{}})();const f=r=>{const e=c({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),s=t=>{e.value={loading:!1,result:null,error:t}},o=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(s));o();const u=l(()=>e.value.loading),a=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:u,result:a,error:d,refetch:o}};export{f as a};
//# sourceMappingURL=asyncComputed.d92b9bc4.js.map
