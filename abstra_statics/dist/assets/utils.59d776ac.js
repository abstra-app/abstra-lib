import"./outputWidgets.8ff86542.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5cad3577-14ac-4533-b19c-7ba32cb4ab2c",e._sentryDebugIdIdentifier="sentry-dbid-5cad3577-14ac-4533-b19c-7ba32cb4ab2c")}catch{}})();const c=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{c as d};
//# sourceMappingURL=utils.59d776ac.js.map
