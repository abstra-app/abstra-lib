import{O as l}from"./index.f642553c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7623336d-2fb9-4e9f-9bf9-cf418166b7dd",e._sentryDebugIdIdentifier="sentry-dbid-7623336d-2fb9-4e9f-9bf9-cf418166b7dd")}catch{}})();function u(e){return l.string().email().safeParse(e).success}function d(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(e,n,a=!1,t=!0,r=!1){const s=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=r?s.replace(/[^a-zA-Z0-9/]/g,"_"):s.replace(/[^a-zA-Z0-9]/g,"_"),i=a?c:c.replace(/_+/g,"_");return n?i:i.replace(/_$/,"")}function b(e){var o;const a=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,r=a.match(t);return(o=r==null?void 0:r.join("-"))!=null?o:""}export{b as a,d as c,u as i,g as n};
//# sourceMappingURL=string.df9f642e.js.map
