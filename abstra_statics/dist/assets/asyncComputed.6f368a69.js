import{G as f,J as l}from"./outputWidgets.a2ba4435.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="75f5f9a2-7985-46be-a8c8-6fcdf6b5c4fe",r._sentryDebugIdIdentifier="sentry-dbid-75f5f9a2-7985-46be-a8c8-6fcdf6b5c4fe")}catch{}})();const i=r=>{const e=f({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),s=t=>{e.value={loading:!1,result:null,error:t}},o=()=>{e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(s)};o();const u=l(()=>e.value.loading),a=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:u,result:a,error:d,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.6f368a69.js.map
