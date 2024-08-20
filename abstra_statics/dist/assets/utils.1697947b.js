import"./vue-router.2175af64.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fe69432f-99c2-4bd6-ac7b-bfd77a55c16f",e._sentryDebugIdIdentifier="sentry-dbid-fe69432f-99c2-4bd6-ac7b-bfd77a55c16f")}catch{}})();const a=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{a as d};
//# sourceMappingURL=utils.1697947b.js.map
