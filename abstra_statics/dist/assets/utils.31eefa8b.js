import"./vue-router.cf1db12e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a71406ac-85f5-4c2d-921f-9634aa468324",e._sentryDebugIdIdentifier="sentry-dbid-a71406ac-85f5-4c2d-921f-9634aa468324")}catch{}})();const d=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{d};
//# sourceMappingURL=utils.31eefa8b.js.map
