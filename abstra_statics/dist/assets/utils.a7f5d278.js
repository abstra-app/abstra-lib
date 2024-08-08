import"./vue-router.6bf58d5e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8f844b2c-b579-4b05-a7cd-4e4fb3e1b3de",e._sentryDebugIdIdentifier="sentry-dbid-8f844b2c-b579-4b05-a7cd-4e4fb3e1b3de")}catch{}})();const a=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{a as d};
//# sourceMappingURL=utils.a7f5d278.js.map
