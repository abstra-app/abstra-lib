import"./index.5c5b8754.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d04172d1-be9b-4046-bbeb-6ede4118b4f0",e._sentryDebugIdIdentifier="sentry-dbid-d04172d1-be9b-4046-bbeb-6ede4118b4f0")}catch{}})();const d=1e3,b=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var o;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(o=e.interval)!=null?o:d)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{b as u};
//# sourceMappingURL=polling.cbd6f6d9.js.map
