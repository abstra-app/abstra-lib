import"./index.0ca8e457.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cfab2993-b764-4f62-bc90-5fdf06250eda",e._sentryDebugIdIdentifier="sentry-dbid-cfab2993-b764-4f62-bc90-5fdf06250eda")}catch{}})();const i=1e3,s=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var o;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(o=e.interval)!=null?o:i)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{s as u};
//# sourceMappingURL=polling.5b08df29.js.map
