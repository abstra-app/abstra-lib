import"./vue-router.0142926c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fb3d6644-104f-433c-9798-184bb0e7017d",e._sentryDebugIdIdentifier="sentry-dbid-fb3d6644-104f-433c-9798-184bb0e7017d")}catch{}})();const r=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{r as d};
//# sourceMappingURL=utils.f8a67825.js.map
