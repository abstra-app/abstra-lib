import"./vue-router.f3adf768.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c2b5638a-597b-44b7-bb53-5dccd22a162b",e._sentryDebugIdIdentifier="sentry-dbid-c2b5638a-597b-44b7-bb53-5dccd22a162b")}catch{}})();const a=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{a as d};
//# sourceMappingURL=utils.867bdfd0.js.map
