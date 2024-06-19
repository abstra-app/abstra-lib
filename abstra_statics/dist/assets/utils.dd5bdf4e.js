import"./outputWidgets.2c486d17.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5ade97c7-44c3-4126-a9b4-d38fe3ce7f78",e._sentryDebugIdIdentifier="sentry-dbid-5ade97c7-44c3-4126-a9b4-d38fe3ce7f78")}catch{}})();const a=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{a as d};
//# sourceMappingURL=utils.dd5bdf4e.js.map
