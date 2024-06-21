import"./outputWidgets.c66cfd35.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="73fb5f31-0ef3-4460-8b75-79d5ab25d1e2",e._sentryDebugIdIdentifier="sentry-dbid-73fb5f31-0ef3-4460-8b75-79d5ab25d1e2")}catch{}})();const a=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{a as d};
//# sourceMappingURL=utils.9155a5fb.js.map
