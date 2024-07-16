import"./vue-router.8ceeff8f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b1564dcb-cf97-4914-ae1f-003f339142ec",e._sentryDebugIdIdentifier="sentry-dbid-b1564dcb-cf97-4914-ae1f-003f339142ec")}catch{}})();const c=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{c as d};
//# sourceMappingURL=utils.47a20825.js.map
