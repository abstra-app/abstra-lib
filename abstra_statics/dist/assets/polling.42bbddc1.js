import"./vue-router.9fdef1c2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="421dfb05-9d1d-463c-b62e-c056ddf03c23",e._sentryDebugIdIdentifier="sentry-dbid-421dfb05-9d1d-463c-b62e-c056ddf03c23")}catch{}})();const l=1e3,c=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var d;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(d=e.interval)!=null?d:l)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{c as u};
//# sourceMappingURL=polling.42bbddc1.js.map
