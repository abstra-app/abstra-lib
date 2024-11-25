import"./vue-router.2ef96f70.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2fd87c57-6cee-43bd-8708-2184152c133f",e._sentryDebugIdIdentifier="sentry-dbid-2fd87c57-6cee-43bd-8708-2184152c133f")}catch{}})();const c=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(o=>{n+=o.join(","),n+=`
`});const d=document.createElement("a");d.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),d.target="_blank",d.download=`${e.fileName}.csv`,d.click()};export{c as d};
//# sourceMappingURL=utils.64855944.js.map
