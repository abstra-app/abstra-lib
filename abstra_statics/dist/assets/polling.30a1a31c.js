import"./vue-router.274d2c06.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cf59c8cb-dbb3-40c2-8f2a-d3b34171f83c",e._sentryDebugIdIdentifier="sentry-dbid-cf59c8cb-dbb3-40c2-8f2a-d3b34171f83c")}catch{}})();const i=1e3,s=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var o;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(o=e.interval)!=null?o:i)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{s as u};
//# sourceMappingURL=polling.30a1a31c.js.map
