import"./vue-router.b2658b40.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9ad275db-400a-42b6-93e6-5bc15acf193d",e._sentryDebugIdIdentifier="sentry-dbid-9ad275db-400a-42b6-93e6-5bc15acf193d")}catch{}})();const d=1e3,r=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var o;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(o=e.interval)!=null?o:d)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{r as u};
//# sourceMappingURL=polling.59a79688.js.map
