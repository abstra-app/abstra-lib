import{O as l}from"./index.5c5b8754.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="590996d4-9fdb-41aa-9f37-3599768d24dc",e._sentryDebugIdIdentifier="sentry-dbid-590996d4-9fdb-41aa-9f37-3599768d24dc")}catch{}})();function u(e){return l.string().email().safeParse(e).success}function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(e,a,r=!1,t=!0,n=!1){const s=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=n?s.replace(/[^a-zA-Z0-9/]/g,"_"):s.replace(/[^a-zA-Z0-9]/g,"_"),i=r?c:c.replace(/_+/g,"_");return a?i:i.replace(/_$/,"")}function p(e){var o;const r=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,n=r.match(t);return(o=n==null?void 0:n.join("-"))!=null?o:""}export{p as a,f as c,u as i,g as n};
//# sourceMappingURL=string.a8c51ad6.js.map
