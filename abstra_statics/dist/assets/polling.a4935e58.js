import"./vue-router.0ce79355.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4de1276d-14e4-4155-a7fb-44291d66cddb",e._sentryDebugIdIdentifier="sentry-dbid-4de1276d-14e4-4155-a7fb-44291d66cddb")}catch{}})();const l=1e3,r=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var d;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(d=e.interval)!=null?d:l)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{r as u};
//# sourceMappingURL=polling.a4935e58.js.map
