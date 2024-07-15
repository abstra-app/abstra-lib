import"./vue-router.3dfb4832.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b81ea87b-2e25-46f1-8068-ebff381cfb4b",e._sentryDebugIdIdentifier="sentry-dbid-b81ea87b-2e25-46f1-8068-ebff381cfb4b")}catch{}})();const f=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{f as d};
//# sourceMappingURL=utils.a391af54.js.map
