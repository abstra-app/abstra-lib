import{E as d,G as l}from"./outputWidgets.ed48fa42.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="e8c4c5e7-8243-4755-a344-42573fec9621",r._sentryDebugIdIdentifier="sentry-dbid-e8c4c5e7-8243-4755-a344-42573fec9621")}catch{}})();const i=r=>{const e=d({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),s=t=>{e.value={loading:!1,result:null,error:t}},o=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(s));o();const u=l(()=>e.value.loading),a=l(()=>e.value.result),c=l(()=>e.value.error);return{loading:u,result:a,error:c,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.bb2b1403.js.map
