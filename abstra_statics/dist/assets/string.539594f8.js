import{N as l}from"./vue-router.427e5b1a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="3c0c9da5-7c53-4c38-a165-6595cb83693c",e._sentryDebugIdIdentifier="sentry-dbid-3c0c9da5-7c53-4c38-a165-6595cb83693c")}catch{}})();function d(e){return l.string().email().safeParse(e).success}function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(e,a,n=!1,t=!0,r=!1){const s=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),o=r?s.replace(/[^a-zA-Z0-9/]/g,"_"):s.replace(/[^a-zA-Z0-9]/g,"_"),i=n?o:o.replace(/_+/g,"_");return a?i:i.replace(/_$/,"")}function p(e){var c;const n=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,r=n.match(t);return(c=r==null?void 0:r.join("-"))!=null?c:""}function m(e){try{return{valid:!0,parsed:JSON.parse(e)}}catch(a){return{valid:!1,message:a instanceof Error?a.message:"Unknown error"}}}export{p as a,f as c,d as i,g as n,m as v};
//# sourceMappingURL=string.539594f8.js.map
