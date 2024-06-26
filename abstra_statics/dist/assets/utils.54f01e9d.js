import"./outputWidgets.a62a98a2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cfbc6217-007b-4c4b-91b8-e20a9dd2a0e3",e._sentryDebugIdIdentifier="sentry-dbid-cfbc6217-007b-4c4b-91b8-e20a9dd2a0e3")}catch{}})();const a=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{a as d};
//# sourceMappingURL=utils.54f01e9d.js.map
