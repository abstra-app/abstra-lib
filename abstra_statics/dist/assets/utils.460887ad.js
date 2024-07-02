import"./vue-router.3e46e4bf.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="05914015-bf1f-43d3-8615-e4d0f75af21f",e._sentryDebugIdIdentifier="sentry-dbid-05914015-bf1f-43d3-8615-e4d0f75af21f")}catch{}})();const f=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{f as d};
//# sourceMappingURL=utils.460887ad.js.map
