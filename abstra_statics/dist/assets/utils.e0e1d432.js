import"./outputWidgets.3f3d2696.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8e0b1d5b-02ca-471c-9490-1be451f326e9",e._sentryDebugIdIdentifier="sentry-dbid-8e0b1d5b-02ca-471c-9490-1be451f326e9")}catch{}})();const a=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{a as d};
//# sourceMappingURL=utils.e0e1d432.js.map
