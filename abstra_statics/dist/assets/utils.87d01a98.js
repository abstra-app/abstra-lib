import"./index.4b0f7fd1.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8a6beacf-febd-421f-863e-34ea54ad2a22",e._sentryDebugIdIdentifier="sentry-dbid-8a6beacf-febd-421f-863e-34ea54ad2a22")}catch{}})();const t=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(d=>{n+=d.join(","),n+=`
`});const a=document.createElement("a");a.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),a.target="_blank",a.download=`${e.fileName}.csv`,a.click()};export{t as d};
//# sourceMappingURL=utils.87d01a98.js.map
