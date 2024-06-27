import"./outputWidgets.e0cab0b1.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1a1612c5-6e6f-4a0c-823e-cb60ef83c5a0",e._sentryDebugIdIdentifier="sentry-dbid-1a1612c5-6e6f-4a0c-823e-cb60ef83c5a0")}catch{}})();const c=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{c as d};
//# sourceMappingURL=utils.db0d174b.js.map
