import"./vue-router.0ce79355.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ca6e63e8-ad70-4e62-ac27-073a6ffa914f",e._sentryDebugIdIdentifier="sentry-dbid-ca6e63e8-ad70-4e62-ac27-073a6ffa914f")}catch{}})();const d=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const a=document.createElement("a");a.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),a.target="_blank",a.download=`${e.fileName}.csv`,a.click()};export{d};
//# sourceMappingURL=utils.da531173.js.map
