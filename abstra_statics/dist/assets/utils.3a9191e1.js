import"./vue-router.6c90459c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="91716325-dbbb-4d38-9c28-032b18135775",e._sentryDebugIdIdentifier="sentry-dbid-91716325-dbbb-4d38-9c28-032b18135775")}catch{}})();const r=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{r as d};
//# sourceMappingURL=utils.3a9191e1.js.map
