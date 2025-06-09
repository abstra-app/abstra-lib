import"./index.1ed78d6d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fe6c5ebd-2630-453d-ac88-5e1a3ac4dc02",e._sentryDebugIdIdentifier="sentry-dbid-fe6c5ebd-2630-453d-ac88-5e1a3ac4dc02")}catch{}})();const r=e=>{if(e==null)return"";const n=String(e);return n.includes(";")||n.includes(`
`)||n.includes('"')?`"${n.replace(/"/g,'""')}"`:n},d=e=>{let n=e.columns.map(r).join(";")+`
`;e.rows.forEach(o=>{n+=o.map(r).join(";")+`
`});const t=document.createElement("a");t.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),t.target="_blank",t.download=`${e.fileName}.csv`,t.click()};function s(e){const n={};for(const t in e)if(e.hasOwnProperty(t)){if(typeof e[t]=="object"&&e[t]!==null){n[t]=JSON.stringify(e[t]);continue}n[t]=String(e[t])}return n}export{d,s as o};
//# sourceMappingURL=object.68c8ac2b.js.map
