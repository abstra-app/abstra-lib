import{Q as d,f as l}from"./vue-router.a7395b8f.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="a16fc649-8b8a-4186-9058-9a2c74b6873a",r._sentryDebugIdIdentifier="sentry-dbid-a16fc649-8b8a-4186-9058-9a2c74b6873a")}catch{}})();const i=r=>{const e=d({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),o=t=>{e.value={loading:!1,result:null,error:t}},a=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(o));a();const s=l(()=>e.value.loading),u=l(()=>e.value.result),c=l(()=>e.value.error);return{loading:s,result:u,error:c,refetch:a}};export{i as a};
//# sourceMappingURL=asyncComputed.e74b73c6.js.map
