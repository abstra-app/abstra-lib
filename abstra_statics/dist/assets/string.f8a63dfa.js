import{N as l}from"./vue-router.ddf818f0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="2c997e22-adbf-4362-940c-24f1ccf88bd2",e._sentryDebugIdIdentifier="sentry-dbid-2c997e22-adbf-4362-940c-24f1ccf88bd2")}catch{}})();function f(e){return l.string().email().safeParse(e).success}function d(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(e,r,n=!1,t=!0,a=!1){const o=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=a?o.replace(/[^a-zA-Z0-9/]/g,"_"):o.replace(/[^a-zA-Z0-9]/g,"_"),i=n?c:c.replace(/_+/g,"_");return r?i:i.replace(/_$/,"")}function p(e){var s;const n=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,a=n.match(t);return(s=a==null?void 0:a.join("-"))!=null?s:""}function b(e){try{return{valid:!0,parsed:JSON.parse(e)}}catch(r){return{valid:!1,message:r instanceof Error?r.message:"Unknown error"}}}export{p as a,d as c,f as i,g as n,b as v};
//# sourceMappingURL=string.f8a63dfa.js.map
