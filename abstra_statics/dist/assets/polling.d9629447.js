import"./index.94c209a7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="78bbbb4e-19f9-4388-9631-c16ef46362e0",e._sentryDebugIdIdentifier="sentry-dbid-78bbbb4e-19f9-4388-9631-c16ef46362e0")}catch{}})();const i=1e3,f=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var o;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(o=e.interval)!=null?o:i)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{f as u};
//# sourceMappingURL=polling.d9629447.js.map
