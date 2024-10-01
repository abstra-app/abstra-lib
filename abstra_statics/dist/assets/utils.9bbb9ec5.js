import"./vue-router.e2dfd848.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1fe29f8f-0e4f-454f-87e5-f44390b23619",e._sentryDebugIdIdentifier="sentry-dbid-1fe29f8f-0e4f-454f-87e5-f44390b23619")}catch{}})();const d=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{d};
//# sourceMappingURL=utils.9bbb9ec5.js.map
