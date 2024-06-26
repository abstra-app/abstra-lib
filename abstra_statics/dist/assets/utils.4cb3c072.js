import"./outputWidgets.c5eb219d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[d]="da5f4edb-b081-4cd5-8dfc-e7647a18cfef",e._sentryDebugIdIdentifier="sentry-dbid-da5f4edb-b081-4cd5-8dfc-e7647a18cfef")}catch{}})();const a=e=>{let d=e.columns.join(",")+`
`;e.rows.forEach(o=>{d+=o.join(","),d+=`
`});const n=document.createElement("a");n.href="data:text/csv;charset=utf-8,"+encodeURIComponent(d),n.target="_blank",n.download=`${e.fileName}.csv`,n.click()};export{a as d};
//# sourceMappingURL=utils.4cb3c072.js.map
