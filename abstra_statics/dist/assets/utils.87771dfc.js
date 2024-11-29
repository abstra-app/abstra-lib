import"./index.0dbe12ae.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="aa77d838-063f-4a9c-a6be-332d8e0a92e0",e._sentryDebugIdIdentifier="sentry-dbid-aa77d838-063f-4a9c-a6be-332d8e0a92e0")}catch{}})();const t=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(d=>{n+=d.join(","),n+=`
`});const a=document.createElement("a");a.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),a.target="_blank",a.download=`${e.fileName}.csv`,a.click()};export{t as d};
//# sourceMappingURL=utils.87771dfc.js.map
