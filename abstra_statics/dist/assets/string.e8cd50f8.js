import"./outputWidgets.e8054ca7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="c9eba559-3dac-423a-9f73-c157da685a76",e._sentryDebugIdIdentifier="sentry-dbid-c9eba559-3dac-423a-9f73-c157da685a76")}catch{}})();function d(e){return e.charAt(0).toUpperCase()+e.slice(1)}function u(e,a,n=!1,t=!0,r=!1){const c=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),s=r?c.replace(/[^a-zA-Z0-9/]/g,"_"):c.replace(/[^a-zA-Z0-9]/g,"_"),l=n?s:s.replace(/_+/g,"_");return a?l:l.replace(/_$/,"")}function f(e){var o;const n=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,r=n.match(t);return(o=r==null?void 0:r.join("-"))!=null?o:""}function g(e){try{return{valid:!0,parsed:JSON.parse(e)}}catch(a){return{valid:!1,message:a.message}}}export{f as a,d as c,u as n,g as v};
//# sourceMappingURL=string.e8cd50f8.js.map
