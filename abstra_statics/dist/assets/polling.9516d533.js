import"./vue-router.2288e6be.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2e6788c5-0f59-44db-ba2b-a44dc46cd531",e._sentryDebugIdIdentifier="sentry-dbid-2e6788c5-0f59-44db-ba2b-a44dc46cd531")}catch{}})();const d=1e3,c=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var o;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(o=e.interval)!=null?o:d)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{c as u};
//# sourceMappingURL=polling.9516d533.js.map
