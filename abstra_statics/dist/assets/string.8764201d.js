import"./outputWidgets.71362013.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="6718b6c2-7fb3-409d-bc20-b645d539e4d1",e._sentryDebugIdIdentifier="sentry-dbid-6718b6c2-7fb3-409d-bc20-b645d539e4d1")}catch{}})();function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}function u(e,a,n=!1,t=!0,r=!1){const s=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=r?s.replace(/[^a-zA-Z0-9/]/g,"_"):s.replace(/[^a-zA-Z0-9]/g,"_"),l=n?c:c.replace(/_+/g,"_");return a?l:l.replace(/_$/,"")}function f(e){var o;const n=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,r=n.match(t);return(o=r==null?void 0:r.join("-"))!=null?o:""}function g(e){try{return{valid:!0,parsed:JSON.parse(e)}}catch(a){return{valid:!1,message:a.message}}}export{f as a,i as c,u as n,g as v};
//# sourceMappingURL=string.8764201d.js.map
