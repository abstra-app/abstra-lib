import"./outputWidgets.250fb051.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a58fc652-c329-4546-83fa-c0aa4cab2f5d",e._sentryDebugIdIdentifier="sentry-dbid-a58fc652-c329-4546-83fa-c0aa4cab2f5d")}catch{}})();const d=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const a=document.createElement("a");a.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),a.target="_blank",a.download=`${e.fileName}.csv`,a.click()};export{d};
//# sourceMappingURL=utils.83e061c5.js.map
