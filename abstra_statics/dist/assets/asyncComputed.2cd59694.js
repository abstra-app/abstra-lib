import{G as c,J as l}from"./outputWidgets.bb3f51db.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="c1b66a9e-cbab-48fa-a76a-f93775b8a1f0",r._sentryDebugIdIdentifier="sentry-dbid-c1b66a9e-cbab-48fa-a76a-f93775b8a1f0")}catch{}})();const i=r=>{const e=c({loading:!0,result:null,error:null}),a=t=>(e.value={loading:!1,result:t,error:null},t),o=t=>{e.value={loading:!1,result:null,error:t}},n=()=>{e.value={loading:!0,result:e.value.result,error:null},r().then(a).catch(o)};n();const s=l(()=>e.value.loading),u=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:s,result:u,error:d,refetch:n}};export{i as a};
//# sourceMappingURL=asyncComputed.2cd59694.js.map
