import"./vue-router.baf1d741.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ba57ae2f-cd8e-4e03-82d9-5cc3c23b4be4",e._sentryDebugIdIdentifier="sentry-dbid-ba57ae2f-cd8e-4e03-82d9-5cc3c23b4be4")}catch{}})();const c=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{c as d};
//# sourceMappingURL=utils.69e56909.js.map
