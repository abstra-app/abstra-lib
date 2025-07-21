import"./jwt-decode.esm.4678474b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f916ec5c-f4e5-4f90-9073-f0cd36f181c3",e._sentryDebugIdIdentifier="sentry-dbid-f916ec5c-f4e5-4f90-9073-f0cd36f181c3")}catch{}})();const r=e=>{if(e==null)return"";const n=String(e);return n.includes(";")||n.includes(`
`)||n.includes('"')?`"${n.replace(/"/g,'""')}"`:n},s=e=>{let n=e.columns.map(r).join(";")+`
`;e.rows.forEach(o=>{n+=o.map(r).join(";")+`
`});const t=document.createElement("a");t.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),t.target="_blank",t.download=`${e.fileName}.csv`,t.click()};function f(e){const n={};for(const t in e)if(e.hasOwnProperty(t)){if(typeof e[t]=="object"&&e[t]!==null){n[t]=JSON.stringify(e[t]);continue}n[t]=String(e[t])}return n}export{s as d,f as o};
//# sourceMappingURL=object.c8d97cd2.js.map
