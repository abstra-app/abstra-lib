import{O as i}from"./index.a74817f2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f0d150db-c72d-4189-945d-742d7dc5e247",e._sentryDebugIdIdentifier="sentry-dbid-f0d150db-c72d-4189-945d-742d7dc5e247")}catch{}})();function u(e){return i.string().email().safeParse(e).success}function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(e,n,a=!1,t=!0,r=!1){const c=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),s=r?c.replace(/[^a-zA-Z0-9/]/g,"_"):c.replace(/[^a-zA-Z0-9]/g,"_"),d=a?s:s.replace(/_+/g,"_");return n?d:d.replace(/_$/,"")}function p(e){var o;const a=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,r=a.match(t);return(o=r==null?void 0:r.join("-"))!=null?o:""}export{p as a,f as c,u as i,g as n};
//# sourceMappingURL=string.5863537f.js.map
