import"./vue-router.668da569.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="442a59d9-7015-44ed-9572-77d230797fe1",e._sentryDebugIdIdentifier="sentry-dbid-442a59d9-7015-44ed-9572-77d230797fe1")}catch{}})();const d=1e3,r=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var o;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(o=e.interval)!=null?o:d)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{r as u};
//# sourceMappingURL=polling.f7e55e1e.js.map
