import"./vue-router.e398dced.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="883f89d9-c6ad-4fcf-8680-9ff0eb13a019",e._sentryDebugIdIdentifier="sentry-dbid-883f89d9-c6ad-4fcf-8680-9ff0eb13a019")}catch{}})();const f=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{f as d};
//# sourceMappingURL=utils.c1094007.js.map
