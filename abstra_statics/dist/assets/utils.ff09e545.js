import"./index.5cd951eb.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[d]="673d04f6-0d56-4643-9e5e-da74d1a9807b",e._sentryDebugIdIdentifier="sentry-dbid-673d04f6-0d56-4643-9e5e-da74d1a9807b")}catch{}})();const a=e=>{let d=e.columns.join(",")+`
`;e.rows.forEach(o=>{d+=o.join(","),d+=`
`});const n=document.createElement("a");n.href="data:text/csv;charset=utf-8,"+encodeURIComponent(d),n.target="_blank",n.download=`${e.fileName}.csv`,n.click()};export{a as d};
//# sourceMappingURL=utils.ff09e545.js.map
