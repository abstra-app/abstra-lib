import"./index.97539a6c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ddd77988-a0d4-40ef-ac6c-f40d1dc32a20",e._sentryDebugIdIdentifier="sentry-dbid-ddd77988-a0d4-40ef-ac6c-f40d1dc32a20")}catch{}})();const l=1e3,c=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var d;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(d=e.interval)!=null?d:l)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{c as u};
//# sourceMappingURL=polling.c91c39e8.js.map
