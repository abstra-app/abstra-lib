import"./vue-router.d3011e56.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[d]="ad42a568-efce-4dd3-95cc-a7e62844cfdc",e._sentryDebugIdIdentifier="sentry-dbid-ad42a568-efce-4dd3-95cc-a7e62844cfdc")}catch{}})();const c=e=>{let d=e.columns.join(",")+`
`;e.rows.forEach(o=>{d+=o.join(","),d+=`
`});const n=document.createElement("a");n.href="data:text/csv;charset=utf-8,"+encodeURIComponent(d),n.target="_blank",n.download=`${e.fileName}.csv`,n.click()};export{c as d};
//# sourceMappingURL=utils.76063a31.js.map
