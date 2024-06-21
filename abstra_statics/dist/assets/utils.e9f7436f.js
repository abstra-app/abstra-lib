import"./outputWidgets.b4050bc1.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="20669a42-e9af-4502-a35c-aa4bcb5abb3f",e._sentryDebugIdIdentifier="sentry-dbid-20669a42-e9af-4502-a35c-aa4bcb5abb3f")}catch{}})();const d=e=>{let a=e.columns.join(",")+`
`;e.rows.forEach(o=>{a+=o.join(","),a+=`
`});const n=document.createElement("a");n.href="data:text/csv;charset=utf-8,"+encodeURIComponent(a),n.target="_blank",n.download=`${e.fileName}.csv`,n.click()};export{d};
//# sourceMappingURL=utils.e9f7436f.js.map
