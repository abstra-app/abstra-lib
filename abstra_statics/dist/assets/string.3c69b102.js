import{O as l}from"./index.d87350ae.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="c9624a78-0efe-4596-951a-106b822b6e32",e._sentryDebugIdIdentifier="sentry-dbid-c9624a78-0efe-4596-951a-106b822b6e32")}catch{}})();function f(e){return l.string().email().safeParse(e).success}function d(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(e,a,r=!1,t=!0,n=!1){const s=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=n?s.replace(/[^a-zA-Z0-9/]/g,"_"):s.replace(/[^a-zA-Z0-9]/g,"_"),i=r?c:c.replace(/_+/g,"_");return a?i:i.replace(/_$/,"")}function p(e){var o;const r=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,n=r.match(t);return(o=n==null?void 0:n.join("-"))!=null?o:""}export{p as a,d as c,f as i,g as n};
//# sourceMappingURL=string.3c69b102.js.map
