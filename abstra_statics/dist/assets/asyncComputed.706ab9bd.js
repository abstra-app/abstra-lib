import{F as c,H as l}from"./outputWidgets.6eb42f16.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="a2f4aeb1-e959-4a4f-a8e5-ab19594488ec",r._sentryDebugIdIdentifier="sentry-dbid-a2f4aeb1-e959-4a4f-a8e5-ab19594488ec")}catch{}})();const i=r=>{const e=c({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),o=t=>{e.value={loading:!1,result:null,error:t}},a=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(o));a();const s=l(()=>e.value.loading),u=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:s,result:u,error:d,refetch:a}};export{i as a};
//# sourceMappingURL=asyncComputed.706ab9bd.js.map
