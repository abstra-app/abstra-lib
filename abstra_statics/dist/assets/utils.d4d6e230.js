import"./vue-router.dce14796.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3eb833b1-51a9-41e9-8df1-fc7cb252ecc9",e._sentryDebugIdIdentifier="sentry-dbid-3eb833b1-51a9-41e9-8df1-fc7cb252ecc9")}catch{}})();const c=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{c as d};
//# sourceMappingURL=utils.d4d6e230.js.map
