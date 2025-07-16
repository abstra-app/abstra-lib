import"./jwt-decode.esm.b6d37558.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="36a5b3da-b39d-4b7d-9fac-71fdd1de6c74",e._sentryDebugIdIdentifier="sentry-dbid-36a5b3da-b39d-4b7d-9fac-71fdd1de6c74")}catch{}})();const d=e=>{if(e==null)return"";const n=String(e);return n.includes(";")||n.includes(`
`)||n.includes('"')?`"${n.replace(/"/g,'""')}"`:n},s=e=>{let n=e.columns.map(d).join(";")+`
`;e.rows.forEach(r=>{n+=r.map(d).join(";")+`
`});const t=document.createElement("a");t.href="data:text/csv;charset=utf-8,"+encodeURIComponent(n),t.target="_blank",t.download=`${e.fileName}.csv`,t.click()};function a(e){const n={};for(const t in e)if(e.hasOwnProperty(t)){if(typeof e[t]=="object"&&e[t]!==null){n[t]=JSON.stringify(e[t]);continue}n[t]=String(e[t])}return n}export{s as d,a as o};
//# sourceMappingURL=object.bf8bd920.js.map
