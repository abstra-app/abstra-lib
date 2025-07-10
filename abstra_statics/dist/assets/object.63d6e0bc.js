import"./jwt-decode.esm.f0e7c156.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2c026bf2-5bca-465c-84af-bec5a5c4da5c",e._sentryDebugIdIdentifier="sentry-dbid-2c026bf2-5bca-465c-84af-bec5a5c4da5c")}catch{}})();const c=e=>{if(e==null)return"";const n=String(e);return n.includes(";")||n.includes(`
`)||n.includes('"')?`"${n.replace(/"/g,'""')}"`:n},a=e=>{let n=e.columns.map(c).join(";")+`
`;e.rows.forEach(r=>{n+=r.map(c).join(";")+`
`});const t=document.createElement("a");t.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),t.target="_blank",t.download=`${e.fileName}.csv`,t.click()};function s(e){const n={};for(const t in e)if(e.hasOwnProperty(t)){if(typeof e[t]=="object"&&e[t]!==null){n[t]=JSON.stringify(e[t]);continue}n[t]=String(e[t])}return n}export{a as d,s as o};
//# sourceMappingURL=object.63d6e0bc.js.map
