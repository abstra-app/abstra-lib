import"./outputWidgets.a0d0265d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="c92bb11b-c386-42ea-94bd-7683caaa9e29",e._sentryDebugIdIdentifier="sentry-dbid-c92bb11b-c386-42ea-94bd-7683caaa9e29")}catch{}})();function u(e){return e.charAt(0).toUpperCase()+e.slice(1)}function d(e,a,n=!1,t=!0,r=!1){const c=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),s=r?c.replace(/[^a-zA-Z0-9/]/g,"_"):c.replace(/[^a-zA-Z0-9]/g,"_"),l=n?s:s.replace(/_+/g,"_");return a?l:l.replace(/_$/,"")}function f(e){var o;const n=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,r=n.match(t);return(o=r==null?void 0:r.join("-"))!=null?o:""}function g(e){try{return{valid:!0,parsed:JSON.parse(e)}}catch(a){return{valid:!1,message:a.message}}}export{f as a,u as c,d as n,g as v};
//# sourceMappingURL=string.eb4ddc0e.js.map
