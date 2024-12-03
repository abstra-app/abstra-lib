import"./index.8c3f27aa.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6b86f153-e4df-4e8c-89b2-af111f7e585f",e._sentryDebugIdIdentifier="sentry-dbid-6b86f153-e4df-4e8c-89b2-af111f7e585f")}catch{}})();const f=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{f as d};
//# sourceMappingURL=utils.c92e833b.js.map
