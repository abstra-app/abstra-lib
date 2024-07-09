import"./vue-router.a95bee0d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e172b155-989b-4ca2-93fe-1fd60c0489c1",e._sentryDebugIdIdentifier="sentry-dbid-e172b155-989b-4ca2-93fe-1fd60c0489c1")}catch{}})();const c=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{c as d};
//# sourceMappingURL=utils.04ea0dfb.js.map
