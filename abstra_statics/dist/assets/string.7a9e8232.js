import{O as l}from"./index.abaf3ad4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="769ecfe8-b601-47e1-88db-104453b0cf8f",e._sentryDebugIdIdentifier="sentry-dbid-769ecfe8-b601-47e1-88db-104453b0cf8f")}catch{}})();function u(e){return l.string().email().safeParse(e).success}function d(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(e,n,a=!1,t=!0,r=!1){const c=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),s=r?c.replace(/[^a-zA-Z0-9/]/g,"_"):c.replace(/[^a-zA-Z0-9]/g,"_"),i=a?s:s.replace(/_+/g,"_");return n?i:i.replace(/_$/,"")}function b(e){var o;const a=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,r=a.match(t);return(o=r==null?void 0:r.join("-"))!=null?o:""}export{b as a,d as c,u as i,g as n};
//# sourceMappingURL=string.7a9e8232.js.map
