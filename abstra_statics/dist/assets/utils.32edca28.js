import"./vue-router.a96f3cd6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="532fdbe1-cf8c-4f7f-9cbc-a9c91b0e61bd",e._sentryDebugIdIdentifier="sentry-dbid-532fdbe1-cf8c-4f7f-9cbc-a9c91b0e61bd")}catch{}})();const c=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{c as d};
//# sourceMappingURL=utils.32edca28.js.map
