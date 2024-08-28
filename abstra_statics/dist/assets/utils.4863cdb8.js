import"./vue-router.e363248c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="599056a2-378c-4397-9a6c-a364092cd534",e._sentryDebugIdIdentifier="sentry-dbid-599056a2-378c-4397-9a6c-a364092cd534")}catch{}})();const a=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{a as d};
//# sourceMappingURL=utils.4863cdb8.js.map
