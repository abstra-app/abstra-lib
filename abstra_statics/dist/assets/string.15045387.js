import{O as l}from"./index.e4bb4231.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="c9711eee-2b04-4c66-acf0-573f8eda55ba",e._sentryDebugIdIdentifier="sentry-dbid-c9711eee-2b04-4c66-acf0-573f8eda55ba")}catch{}})();function f(e){return l.string().email().safeParse(e).success}function d(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(e,a,n=!1,t=!0,r=!1){const o=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=r?o.replace(/[^a-zA-Z0-9/]/g,"_"):o.replace(/[^a-zA-Z0-9]/g,"_"),i=n?c:c.replace(/_+/g,"_");return a?i:i.replace(/_$/,"")}function p(e){var s;const n=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,r=n.match(t);return(s=r==null?void 0:r.join("-"))!=null?s:""}function b(e){try{return{valid:!0,parsed:JSON.parse(e)}}catch(a){return{valid:!1,message:a instanceof Error?a.message:"Unknown error"}}}export{p as a,d as c,f as i,g as n,b as v};
//# sourceMappingURL=string.15045387.js.map
