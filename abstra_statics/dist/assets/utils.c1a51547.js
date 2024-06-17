import"./outputWidgets.762923b6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="657bfa36-5351-4736-a171-f8fa93fa8ef2",e._sentryDebugIdIdentifier="sentry-dbid-657bfa36-5351-4736-a171-f8fa93fa8ef2")}catch{}})();const f=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{f as d};
//# sourceMappingURL=utils.c1a51547.js.map
