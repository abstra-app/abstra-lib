import"./index.a701e366.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="71b32dbd-f55e-4d46-8836-7fd57b26e288",e._sentryDebugIdIdentifier="sentry-dbid-71b32dbd-f55e-4d46-8836-7fd57b26e288")}catch{}})();const l=1e3,f=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var d;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(d=e.interval)!=null?d:l)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{f as u};
//# sourceMappingURL=polling.14f9e66c.js.map
