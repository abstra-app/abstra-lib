import{O as l}from"./index.4aef4601.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="0bbd318c-7a10-4c95-91c9-693096100a3c",e._sentryDebugIdIdentifier="sentry-dbid-0bbd318c-7a10-4c95-91c9-693096100a3c")}catch{}})();function d(e){return l.string().email().safeParse(e).success}function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(e,a,r=!1,t=!0,n=!1){const o=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),s=n?o.replace(/[^a-zA-Z0-9/]/g,"_"):o.replace(/[^a-zA-Z0-9]/g,"_"),i=r?s:s.replace(/_+/g,"_");return a?i:i.replace(/_$/,"")}function p(e){var c;const r=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,n=r.match(t);return(c=n==null?void 0:n.join("-"))!=null?c:""}export{p as a,f as c,d as i,g as n};
//# sourceMappingURL=string.ae1843e2.js.map
