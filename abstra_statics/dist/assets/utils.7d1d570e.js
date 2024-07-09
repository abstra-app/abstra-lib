import"./vue-router.e2bf802b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="30194d04-d50c-49ff-99c6-5ccc03b25ed8",e._sentryDebugIdIdentifier="sentry-dbid-30194d04-d50c-49ff-99c6-5ccc03b25ed8")}catch{}})();const c=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{c as d};
//# sourceMappingURL=utils.7d1d570e.js.map
