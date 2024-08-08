import"./vue-router.a1ff9813.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[d]="cb8848a8-b9d8-4501-8567-0d109d8bd597",e._sentryDebugIdIdentifier="sentry-dbid-cb8848a8-b9d8-4501-8567-0d109d8bd597")}catch{}})();const a=e=>{let d=e.columns.join(",")+`
`;e.rows.forEach(o=>{d+=o.join(","),d+=`
`});const n=document.createElement("a");n.href="data:text/csv;charset=utf-8,"+encodeURIComponent(d),n.target="_blank",n.download=`${e.fileName}.csv`,n.click()};export{a as d};
//# sourceMappingURL=utils.391175c2.js.map
