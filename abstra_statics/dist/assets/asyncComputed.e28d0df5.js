import{F as d,H as l}from"./outputWidgets.78c1e9b1.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="69db46fe-0c63-4f75-9c41-47ec5aaa7437",r._sentryDebugIdIdentifier="sentry-dbid-69db46fe-0c63-4f75-9c41-47ec5aaa7437")}catch{}})();const i=r=>{const e=d({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),a=t=>{e.value={loading:!1,result:null,error:t}},o=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(a));o();const s=l(()=>e.value.loading),u=l(()=>e.value.result),c=l(()=>e.value.error);return{loading:s,result:u,error:c,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.e28d0df5.js.map
