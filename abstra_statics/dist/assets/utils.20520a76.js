import"./vue-router.2dfeb709.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fddfb19b-b172-41c6-b686-6b6e8bac046d",e._sentryDebugIdIdentifier="sentry-dbid-fddfb19b-b172-41c6-b686-6b6e8bac046d")}catch{}})();const a=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{a as d};
//# sourceMappingURL=utils.20520a76.js.map
