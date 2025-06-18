import"./index.23d4ed73.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7f3b6d49-4682-41e8-9bff-48aa4237a4ae",e._sentryDebugIdIdentifier="sentry-dbid-7f3b6d49-4682-41e8-9bff-48aa4237a4ae")}catch{}})();const r=e=>{if(e==null)return"";const n=String(e);return n.includes(";")||n.includes(`
`)||n.includes('"')?`"${n.replace(/"/g,'""')}"`:n},s=e=>{let n=e.columns.map(r).join(";")+`
`;e.rows.forEach(o=>{n+=o.map(r).join(";")+`
`});const t=document.createElement("a");t.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),t.target="_blank",t.download=`${e.fileName}.csv`,t.click()};function i(e){const n={};for(const t in e)if(e.hasOwnProperty(t)){if(typeof e[t]=="object"&&e[t]!==null){n[t]=JSON.stringify(e[t]);continue}n[t]=String(e[t])}return n}export{s as d,i as o};
//# sourceMappingURL=object.e53ca37f.js.map
