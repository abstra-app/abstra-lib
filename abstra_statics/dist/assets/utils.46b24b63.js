import"./vue-router.dc17f8e9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="99e410f2-da28-48f1-8e60-7cc5cb598066",e._sentryDebugIdIdentifier="sentry-dbid-99e410f2-da28-48f1-8e60-7cc5cb598066")}catch{}})();const c=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{c as d};
//# sourceMappingURL=utils.46b24b63.js.map
