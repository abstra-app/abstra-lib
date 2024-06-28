import"./outputWidgets.b678220b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[d]="68d61782-07cf-4164-9602-04d3eac05d8d",e._sentryDebugIdIdentifier="sentry-dbid-68d61782-07cf-4164-9602-04d3eac05d8d")}catch{}})();const a=e=>{let d=e.columns.join(",")+`
`;e.rows.forEach(o=>{d+=o.join(","),d+=`
`});const n=document.createElement("a");n.href="data:text/csv;charset=utf-8,"+encodeURIComponent(d),n.target="_blank",n.download=`${e.fileName}.csv`,n.click()};export{a as d};
//# sourceMappingURL=utils.526ebf21.js.map
