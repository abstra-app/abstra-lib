import{O as l}from"./index.97539a6c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="ec18cb80-d4c0-4ed4-ae3a-1a2a92bfcc2d",e._sentryDebugIdIdentifier="sentry-dbid-ec18cb80-d4c0-4ed4-ae3a-1a2a92bfcc2d")}catch{}})();function d(e){return l.string().email().safeParse(e).success}function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(e,a,r=!1,c=!0,n=!1){const o=(c?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),s=n?o.replace(/[^a-zA-Z0-9/]/g,"_"):o.replace(/[^a-zA-Z0-9]/g,"_"),i=r?s:s.replace(/_+/g,"_");return a?i:i.replace(/_$/,"")}function p(e){var t;const r=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=/[a-z0-9]+/g,n=r.match(c);return(t=n==null?void 0:n.join("-"))!=null?t:""}export{p as a,f as c,d as i,g as n};
//# sourceMappingURL=string.6ed9c163.js.map
