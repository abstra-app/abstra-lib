import"./vue-router.3ce6ce00.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1fde1d54-91af-4929-9e5b-185fa0d82fde",e._sentryDebugIdIdentifier="sentry-dbid-1fde1d54-91af-4929-9e5b-185fa0d82fde")}catch{}})();const l=1e3,s=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var d;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(d=e.interval)!=null?d:l)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{s as u};
//# sourceMappingURL=polling.a76c1902.js.map
