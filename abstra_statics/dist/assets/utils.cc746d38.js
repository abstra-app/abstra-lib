import"./vue-router.cfcddb21.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b14a30b1-21e4-407d-b43d-7f7c16414c92",e._sentryDebugIdIdentifier="sentry-dbid-b14a30b1-21e4-407d-b43d-7f7c16414c92")}catch{}})();const a=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{a as d};
//# sourceMappingURL=utils.cc746d38.js.map
