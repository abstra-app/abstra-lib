import"./outputWidgets.67d01534.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="e9ccc139-dbcd-4754-91d2-59edd7964536",e._sentryDebugIdIdentifier="sentry-dbid-e9ccc139-dbcd-4754-91d2-59edd7964536")}catch{}})();function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}function u(e,a,n=!1,t=!0,r=!1){const o=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),s=r?o.replace(/[^a-zA-Z0-9/]/g,"_"):o.replace(/[^a-zA-Z0-9]/g,"_"),d=n?s:s.replace(/_+/g,"_");return a?d:d.replace(/_$/,"")}function f(e){var c;const n=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,r=n.match(t);return(c=r==null?void 0:r.join("-"))!=null?c:""}function g(e){try{return{valid:!0,parsed:JSON.parse(e)}}catch(a){return{valid:!1,message:a.message}}}export{f as a,i as c,u as n,g as v};
//# sourceMappingURL=string.73a83215.js.map
