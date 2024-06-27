import"./outputWidgets.216ab6ee.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8b484f1e-9e73-4138-a84d-c7de3a51212b",e._sentryDebugIdIdentifier="sentry-dbid-8b484f1e-9e73-4138-a84d-c7de3a51212b")}catch{}})();const a=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{a as d};
//# sourceMappingURL=utils.f90c47f1.js.map
