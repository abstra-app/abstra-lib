import{G as c,I as l}from"./outputWidgets.da1326db.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="41a587d3-de84-4442-ac95-155a7d2abe06",r._sentryDebugIdIdentifier="sentry-dbid-41a587d3-de84-4442-ac95-155a7d2abe06")}catch{}})();const f=r=>{const e=c({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),o=t=>{e.value={loading:!1,result:null,error:t}},a=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(o));a();const s=l(()=>e.value.loading),u=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:s,result:u,error:d,refetch:a}};export{f as a};
//# sourceMappingURL=asyncComputed.aed43f77.js.map
