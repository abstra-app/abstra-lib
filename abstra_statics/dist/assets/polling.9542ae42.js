import"./vue-router.85c27f05.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9654c70a-4160-4c3f-84b0-574e57221c84",e._sentryDebugIdIdentifier="sentry-dbid-9654c70a-4160-4c3f-84b0-574e57221c84")}catch{}})();const i=1e3,c=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var o;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(o=e.interval)!=null?o:i)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{c as u};
//# sourceMappingURL=polling.9542ae42.js.map
