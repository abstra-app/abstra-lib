import"./index.0f630b70.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="930d4724-e44f-4cf1-99b5-a67afcae15b4",e._sentryDebugIdIdentifier="sentry-dbid-930d4724-e44f-4cf1-99b5-a67afcae15b4")}catch{}})();const a=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{a as d};
//# sourceMappingURL=utils.65c8b3c8.js.map
