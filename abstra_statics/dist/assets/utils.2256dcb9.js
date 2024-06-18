import"./outputWidgets.589d5db6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="39371d44-f529-44cd-b5f2-5537694df905",e._sentryDebugIdIdentifier="sentry-dbid-39371d44-f529-44cd-b5f2-5537694df905")}catch{}})();const f=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{f as d};
//# sourceMappingURL=utils.2256dcb9.js.map
