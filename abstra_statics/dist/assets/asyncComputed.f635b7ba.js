import{F as f,H as l}from"./outputWidgets.01471823.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="7922f774-f640-4afb-aaf7-7b1ec619dcf1",r._sentryDebugIdIdentifier="sentry-dbid-7922f774-f640-4afb-aaf7-7b1ec619dcf1")}catch{}})();const i=r=>{const e=f({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),a=t=>{e.value={loading:!1,result:null,error:t}},o=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(a));o();const s=l(()=>e.value.loading),u=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:s,result:u,error:d,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.f635b7ba.js.map
