import{O as l}from"./index.de1db9de.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="9ee5b86b-f6c4-4d61-94a3-60d4f68f115a",e._sentryDebugIdIdentifier="sentry-dbid-9ee5b86b-f6c4-4d61-94a3-60d4f68f115a")}catch{}})();function u(e){return l.string().email().safeParse(e).success}function d(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(e,a,r=!1,t=!0,n=!1){const s=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=n?s.replace(/[^a-zA-Z0-9/]/g,"_"):s.replace(/[^a-zA-Z0-9]/g,"_"),i=r?c:c.replace(/_+/g,"_");return a?i:i.replace(/_$/,"")}function p(e){var o;const r=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,n=r.match(t);return(o=n==null?void 0:n.join("-"))!=null?o:""}export{p as a,d as c,u as i,g as n};
//# sourceMappingURL=string.51fd0f47.js.map
