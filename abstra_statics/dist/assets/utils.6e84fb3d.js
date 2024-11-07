import"./vue-router.6c32e20c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e9765bd0-0867-48e7-9fd9-be9e00b47bcb",e._sentryDebugIdIdentifier="sentry-dbid-e9765bd0-0867-48e7-9fd9-be9e00b47bcb")}catch{}})();const r=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{r as d};
//# sourceMappingURL=utils.6e84fb3d.js.map
