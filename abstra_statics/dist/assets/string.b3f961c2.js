import{O as l}from"./index.fba49db2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c7cd03e8-ccce-4eec-8bb3-e4d58971459d",e._sentryDebugIdIdentifier="sentry-dbid-c7cd03e8-ccce-4eec-8bb3-e4d58971459d")}catch{}})();function d(e){return l.string().email().safeParse(e).success}function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(e,n,a=!1,c=!0,r=!1){const o=(c?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),s=r?o.replace(/[^a-zA-Z0-9/]/g,"_"):o.replace(/[^a-zA-Z0-9]/g,"_"),i=a?s:s.replace(/_+/g,"_");return n?i:i.replace(/_$/,"")}function p(e){var t;const a=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=/[a-z0-9]+/g,r=a.match(c);return(t=r==null?void 0:r.join("-"))!=null?t:""}export{p as a,f as c,d as i,g as n};
//# sourceMappingURL=string.b3f961c2.js.map
