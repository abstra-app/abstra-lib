import"./outputWidgets.049ac64d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9ed0e2b4-5448-4133-8b8f-180776c8711a",e._sentryDebugIdIdentifier="sentry-dbid-9ed0e2b4-5448-4133-8b8f-180776c8711a")}catch{}})();const a=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{a as d};
//# sourceMappingURL=utils.daf9d554.js.map
