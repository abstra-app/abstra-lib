import"./jwt-decode.esm.d8763b5b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b7cf6005-d049-41df-8abb-8466b3983e4a",e._sentryDebugIdIdentifier="sentry-dbid-b7cf6005-d049-41df-8abb-8466b3983e4a")}catch{}})();const r=e=>{if(e==null)return"";const n=String(e);return n.includes(";")||n.includes(`
`)||n.includes('"')?`"${n.replace(/"/g,'""')}"`:n},d=e=>{let n=e.columns.map(r).join(";")+`
`;e.rows.forEach(o=>{n+=o.map(r).join(";")+`
`});const t=document.createElement("a");t.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),t.target="_blank",t.download=`${e.fileName}.csv`,t.click()};function i(e){const n={};for(const t in e)if(e.hasOwnProperty(t)){if(typeof e[t]=="object"&&e[t]!==null){n[t]=JSON.stringify(e[t]);continue}n[t]=String(e[t])}return n}export{d,i as o};
//# sourceMappingURL=object.bdbfa151.js.map
