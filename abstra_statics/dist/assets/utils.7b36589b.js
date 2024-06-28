import"./outputWidgets.94ca2a88.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4f767efd-b931-4ec6-8d73-71124836d1f8",e._sentryDebugIdIdentifier="sentry-dbid-4f767efd-b931-4ec6-8d73-71124836d1f8")}catch{}})();const f=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{f as d};
//# sourceMappingURL=utils.7b36589b.js.map
