import"./vue-router.5a4c25bd.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b073d1df-d29f-4d4b-a853-8e5489213db7",e._sentryDebugIdIdentifier="sentry-dbid-b073d1df-d29f-4d4b-a853-8e5489213db7")}catch{}})();const l=1e3,f=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var d;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(d=e.interval)!=null?d:l)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{f as u};
//# sourceMappingURL=polling.540906c0.js.map
