import"./vue-router.f8901e1e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d418febb-9801-43c1-9612-b11d59401e83",e._sentryDebugIdIdentifier="sentry-dbid-d418febb-9801-43c1-9612-b11d59401e83")}catch{}})();const r=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{r as d};
//# sourceMappingURL=utils.4e3255b6.js.map
