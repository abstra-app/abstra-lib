import{E as d,G as l}from"./outputWidgets.c4f3de67.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="0a8ea9c7-95dc-4089-9920-b3e1ce1b8eac",r._sentryDebugIdIdentifier="sentry-dbid-0a8ea9c7-95dc-4089-9920-b3e1ce1b8eac")}catch{}})();const f=r=>{const e=d({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),a=t=>{e.value={loading:!1,result:null,error:t}},o=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(a));o();const s=l(()=>e.value.loading),u=l(()=>e.value.result),c=l(()=>e.value.error);return{loading:s,result:u,error:c,refetch:o}};export{f as a};
//# sourceMappingURL=asyncComputed.c75b06d6.js.map
