import"./outputWidgets.b408cd47.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="10a3e6ef-87de-424b-8118-4ceb325e03e3",e._sentryDebugIdIdentifier="sentry-dbid-10a3e6ef-87de-424b-8118-4ceb325e03e3")}catch{}})();const a=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{a as d};
//# sourceMappingURL=utils.4987245c.js.map
