import{O as l}from"./index.d72204b4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="41da0325-65fb-4606-9655-b45bd7998fb8",e._sentryDebugIdIdentifier="sentry-dbid-41da0325-65fb-4606-9655-b45bd7998fb8")}catch{}})();function f(e){return l.string().email().safeParse(e).success}function d(e){return e.charAt(0).toUpperCase()+e.slice(1)}function b(e,n,r=!1,t=!0,a=!1){const s=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=a?s.replace(/[^a-zA-Z0-9/]/g,"_"):s.replace(/[^a-zA-Z0-9]/g,"_"),i=r?c:c.replace(/_+/g,"_");return n?i:i.replace(/_$/,"")}function g(e){var o;const r=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,a=r.match(t);return(o=a==null?void 0:a.join("-"))!=null?o:""}export{g as a,d as c,f as i,b as n};
//# sourceMappingURL=string.ce17c88b.js.map
