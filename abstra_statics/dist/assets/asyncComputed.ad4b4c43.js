import{F as d,H as l}from"./outputWidgets.1809539d.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="77ddf6c0-f25c-452c-a122-ec54fc9893c3",r._sentryDebugIdIdentifier="sentry-dbid-77ddf6c0-f25c-452c-a122-ec54fc9893c3")}catch{}})();const i=r=>{const e=d({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),s=t=>{e.value={loading:!1,result:null,error:t}},o=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(s));o();const u=l(()=>e.value.loading),a=l(()=>e.value.result),c=l(()=>e.value.error);return{loading:u,result:a,error:c,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.ad4b4c43.js.map
