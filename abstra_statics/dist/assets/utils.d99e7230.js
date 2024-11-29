import"./index.94b9b69a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e5a3a7e7-66f1-43fe-98ae-494d70f96a6a",e._sentryDebugIdIdentifier="sentry-dbid-e5a3a7e7-66f1-43fe-98ae-494d70f96a6a")}catch{}})();const d=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const a=document.createElement("a");a.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),a.target="_blank",a.download=`${e.fileName}.csv`,a.click()};export{d};
//# sourceMappingURL=utils.d99e7230.js.map
