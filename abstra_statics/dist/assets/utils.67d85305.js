import"./vue-router.364debaa.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1dff7a1f-9d7c-437f-86f5-2a7d34873479",e._sentryDebugIdIdentifier="sentry-dbid-1dff7a1f-9d7c-437f-86f5-2a7d34873479")}catch{}})();const f=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{f as d};
//# sourceMappingURL=utils.67d85305.js.map
