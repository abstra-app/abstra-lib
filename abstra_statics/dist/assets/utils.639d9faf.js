import"./vue-router.888c1495.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2e9d2e3b-803a-4559-9839-2a195a103ea9",e._sentryDebugIdIdentifier="sentry-dbid-2e9d2e3b-803a-4559-9839-2a195a103ea9")}catch{}})();const d=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{d};
//# sourceMappingURL=utils.639d9faf.js.map
