import{H as c,J as l}from"./outputWidgets.24bbc644.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="9e39d295-7773-4c19-b49d-039b0e6ca560",r._sentryDebugIdIdentifier="sentry-dbid-9e39d295-7773-4c19-b49d-039b0e6ca560")}catch{}})();const f=r=>{const e=c({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),s=t=>{e.value={loading:!1,result:null,error:t}},o=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(s));o();const u=l(()=>e.value.loading),a=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:u,result:a,error:d,refetch:o}};export{f as a};
//# sourceMappingURL=asyncComputed.4e160e88.js.map
