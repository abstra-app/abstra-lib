import"./index.8c21522c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[d]="7a14a86c-1234-4d01-bdd2-0af5ba5dc416",e._sentryDebugIdIdentifier="sentry-dbid-7a14a86c-1234-4d01-bdd2-0af5ba5dc416")}catch{}})();const a=e=>{let d=e.columns.join(",")+`
`;e.rows.forEach(o=>{d+=o.join(","),d+=`
`});const n=document.createElement("a");n.href="data:text/csv;charset=utf-8,"+encodeURIComponent(d),n.target="_blank",n.download=`${e.fileName}.csv`,n.click()};export{a as d};
//# sourceMappingURL=utils.ef1d82c9.js.map
