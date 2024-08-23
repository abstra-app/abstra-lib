import"./vue-router.eed3d3bc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="97180fe5-81c0-4b2e-8f9e-894fb66f90de",e._sentryDebugIdIdentifier="sentry-dbid-97180fe5-81c0-4b2e-8f9e-894fb66f90de")}catch{}})();const f=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{f as d};
//# sourceMappingURL=utils.4f0e7137.js.map
