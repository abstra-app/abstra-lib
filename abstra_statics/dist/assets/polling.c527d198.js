import"./vue-router.427e5b1a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cc35223d-f10d-460e-a585-1c84beb20cdd",e._sentryDebugIdIdentifier="sentry-dbid-cc35223d-f10d-460e-a585-1c84beb20cdd")}catch{}})();const l=1e3,c=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var d;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(d=e.interval)!=null?d:l)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{c as u};
//# sourceMappingURL=polling.c527d198.js.map
