import"./vue-router.d93c72db.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="deb5c1ba-7051-4a2e-97a8-3bae908b1a44",e._sentryDebugIdIdentifier="sentry-dbid-deb5c1ba-7051-4a2e-97a8-3bae908b1a44")}catch{}})();const i=1e3,a=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var o;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(o=e.interval)!=null?o:i)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{a as u};
//# sourceMappingURL=polling.be8756ca.js.map
