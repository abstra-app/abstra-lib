import"./vue-router.ddf818f0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cf12f481-c235-406c-a7cc-33578d4c11f7",e._sentryDebugIdIdentifier="sentry-dbid-cf12f481-c235-406c-a7cc-33578d4c11f7")}catch{}})();const d=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const c=document.createElement("a");c.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),c.target="_blank",c.download=`${e.fileName}.csv`,c.click()};export{d};
//# sourceMappingURL=utils.de89279b.js.map
