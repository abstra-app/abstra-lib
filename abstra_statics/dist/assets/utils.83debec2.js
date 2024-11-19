import"./vue-router.d93c72db.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="665d94fd-709e-49f4-9dc6-6b50c41c1ac2",e._sentryDebugIdIdentifier="sentry-dbid-665d94fd-709e-49f4-9dc6-6b50c41c1ac2")}catch{}})();const c=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{c as d};
//# sourceMappingURL=utils.83debec2.js.map
