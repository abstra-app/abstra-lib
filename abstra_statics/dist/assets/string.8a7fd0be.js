import{N as l}from"./vue-router.3768b992.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="485167d0-dd4e-468e-ae65-654176d5c930",e._sentryDebugIdIdentifier="sentry-dbid-485167d0-dd4e-468e-ae65-654176d5c930")}catch{}})();function u(e){return l.string().email().safeParse(e).success}function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(e,r,n=!1,t=!0,a=!1){const o=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=a?o.replace(/[^a-zA-Z0-9/]/g,"_"):o.replace(/[^a-zA-Z0-9]/g,"_"),i=n?c:c.replace(/_+/g,"_");return r?i:i.replace(/_$/,"")}function p(e){var s;const n=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,a=n.match(t);return(s=a==null?void 0:a.join("-"))!=null?s:""}function m(e){try{return{valid:!0,parsed:JSON.parse(e)}}catch(r){return{valid:!1,message:r instanceof Error?r.message:"Unknown error"}}}export{p as a,f as c,u as i,g as n,m as v};
//# sourceMappingURL=string.8a7fd0be.js.map
