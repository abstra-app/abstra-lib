import"./outputWidgets.44b55c7f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="13eaa309-ba93-48ff-b415-c694b3babee7",e._sentryDebugIdIdentifier="sentry-dbid-13eaa309-ba93-48ff-b415-c694b3babee7")}catch{}})();const d=e=>{let n=e.columns.join(",")+`
`;e.rows.forEach(t=>{n+=t.join(","),n+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),o.target="_blank",o.download=`${e.fileName}.csv`,o.click()};export{d};
//# sourceMappingURL=utils.831c14ab.js.map
