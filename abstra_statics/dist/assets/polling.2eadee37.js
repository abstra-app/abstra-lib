import"./index.b24b0be8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e944560b-983c-4955-9360-551141409f67",e._sentryDebugIdIdentifier="sentry-dbid-e944560b-983c-4955-9360-551141409f67")}catch{}})();const i=1e3,r=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var o;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(o=e.interval)!=null?o:i)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{r as u};
//# sourceMappingURL=polling.2eadee37.js.map
