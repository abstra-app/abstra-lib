import{O as l}from"./index.78f907b4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="640edbe8-1adb-48a8-8e86-54057f20bc07",e._sentryDebugIdIdentifier="sentry-dbid-640edbe8-1adb-48a8-8e86-54057f20bc07")}catch{}})();function d(e){return l.string().email().safeParse(e).success}function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(e,a,r=!1,t=!0,n=!1){const s=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=n?s.replace(/[^a-zA-Z0-9/]/g,"_"):s.replace(/[^a-zA-Z0-9]/g,"_"),i=r?c:c.replace(/_+/g,"_");return a?i:i.replace(/_$/,"")}function b(e){var o;const r=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,n=r.match(t);return(o=n==null?void 0:n.join("-"))!=null?o:""}export{b as a,f as c,d as i,g as n};
//# sourceMappingURL=string.b6cade14.js.map
