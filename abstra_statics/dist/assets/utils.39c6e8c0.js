import"./vue-router.e8eeedf5.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="933929ff-ffb1-41fb-b440-937f2cd82a47",e._sentryDebugIdIdentifier="sentry-dbid-933929ff-ffb1-41fb-b440-937f2cd82a47")}catch{}})();const d=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{d};
//# sourceMappingURL=utils.39c6e8c0.js.map
