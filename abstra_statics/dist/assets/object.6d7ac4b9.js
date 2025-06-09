import"./index.c08812ce.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4ecac5cf-cba3-4c32-8e0e-eec0bccb115e",e._sentryDebugIdIdentifier="sentry-dbid-4ecac5cf-cba3-4c32-8e0e-eec0bccb115e")}catch{}})();const c=e=>{if(e==null)return"";const n=String(e);return n.includes(";")||n.includes(`
`)||n.includes('"')?`"${n.replace(/"/g,'""')}"`:n},s=e=>{let n=e.columns.map(c).join(";")+`
`;e.rows.forEach(r=>{n+=r.map(c).join(";")+`
`});const t=document.createElement("a");t.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),t.target="_blank",t.download=`${e.fileName}.csv`,t.click()};function i(e){const n={};for(const t in e)if(e.hasOwnProperty(t)){if(typeof e[t]=="object"&&e[t]!==null){n[t]=JSON.stringify(e[t]);continue}n[t]=String(e[t])}return n}export{s as d,i as o};
//# sourceMappingURL=object.6d7ac4b9.js.map
