import{N as l}from"./vue-router.81670790.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="c66de201-6e63-4bb3-a7bb-ea17a569a5b3",e._sentryDebugIdIdentifier="sentry-dbid-c66de201-6e63-4bb3-a7bb-ea17a569a5b3")}catch{}})();function d(e){return l.string().email().safeParse(e).success}function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}function b(e,a,n=!1,t=!0,r=!1){const o=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=r?o.replace(/[^a-zA-Z0-9/]/g,"_"):o.replace(/[^a-zA-Z0-9]/g,"_"),i=n?c:c.replace(/_+/g,"_");return a?i:i.replace(/_$/,"")}function g(e){var s;const n=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,r=n.match(t);return(s=r==null?void 0:r.join("-"))!=null?s:""}function p(e){try{return{valid:!0,parsed:JSON.parse(e)}}catch(a){return{valid:!1,message:a instanceof Error?a.message:"Unknown error"}}}export{g as a,f as c,d as i,b as n,p as v};
//# sourceMappingURL=string.a7fc1b30.js.map
