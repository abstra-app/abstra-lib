import{N as l}from"./vue-router.9fdef1c2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="74d4c44a-9d30-464f-891a-961e078d8df2",e._sentryDebugIdIdentifier="sentry-dbid-74d4c44a-9d30-464f-891a-961e078d8df2")}catch{}})();function u(e){return l.string().email().safeParse(e).success}function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(e,a,n=!1,t=!0,r=!1){const o=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=r?o.replace(/[^a-zA-Z0-9/]/g,"_"):o.replace(/[^a-zA-Z0-9]/g,"_"),i=n?c:c.replace(/_+/g,"_");return a?i:i.replace(/_$/,"")}function p(e){var s;const n=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,r=n.match(t);return(s=r==null?void 0:r.join("-"))!=null?s:""}function m(e){try{return{valid:!0,parsed:JSON.parse(e)}}catch(a){return{valid:!1,message:a instanceof Error?a.message:"Unknown error"}}}export{p as a,f as c,u as i,g as n,m as v};
//# sourceMappingURL=string.aab27b65.js.map
