import"./jwt-decode.esm.e3da50c3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="887a19de-07af-4043-9754-de6a5bc5e7c4",e._sentryDebugIdIdentifier="sentry-dbid-887a19de-07af-4043-9754-de6a5bc5e7c4")}catch{}})();const r=e=>{if(e==null)return"";const n=String(e);return n.includes(";")||n.includes(`
`)||n.includes('"')?`"${n.replace(/"/g,'""')}"`:n},a=e=>{let n=e.columns.map(r).join(";")+`
`;e.rows.forEach(o=>{n+=o.map(r).join(";")+`
`});const t=document.createElement("a");t.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),t.target="_blank",t.download=`${e.fileName}.csv`,t.click()};function d(e){const n={};for(const t in e)if(e.hasOwnProperty(t)){if(typeof e[t]=="object"&&e[t]!==null){n[t]=JSON.stringify(e[t]);continue}n[t]=String(e[t])}return n}export{a as d,d as o};
//# sourceMappingURL=object.5bcbc8c8.js.map
