import{E as f,G as l}from"./outputWidgets.ddb799f6.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="4044dfc3-3d0d-40ff-9b6c-00ff752deaed",r._sentryDebugIdIdentifier="sentry-dbid-4044dfc3-3d0d-40ff-9b6c-00ff752deaed")}catch{}})();const i=r=>{const e=f({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),s=t=>{e.value={loading:!1,result:null,error:t}},o=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(s));o();const u=l(()=>e.value.loading),d=l(()=>e.value.result),a=l(()=>e.value.error);return{loading:u,result:d,error:a,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.76da9d27.js.map
