import{O as f}from"./index.da417b99.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="136d395b-745b-414b-bd71-7dd2e1c6b202",e._sentryDebugIdIdentifier="sentry-dbid-136d395b-745b-414b-bd71-7dd2e1c6b202")}catch{}})();function g(e){return f.string().email().safeParse(e).success}function b(e){return e.charAt(0).toUpperCase()+e.slice(1)}function p(e,r,n=!1,a=!0,s=!1){const c=(a?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),o=s?c.replace(/[^a-zA-Z0-9/]/g,"_"):c.replace(/[^a-zA-Z0-9]/g,"_"),l=n?o:o.replace(/_+/g,"_");return r?l:l.replace(/_$/,"")}function w(e){var t;const n=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),a=/[a-z0-9]+/g,s=n.match(a);return(t=s==null?void 0:s.join("-"))!=null?t:""}function h(e,r){if(e.length===0||r.length===0)return!1;const n=e.toLowerCase(),a=r.toLowerCase();return n.split("").reduce((t,c)=>{var l;if(t===!1)return!1;const o=(l=t[t.length-1])!=null?l:null;if(o===null){const i=a.indexOf(c);return i===-1?!1:[i]}else{const u=a.slice(o+1).indexOf(c);return u===-1?!1:[...t,o+1+u]}},[])}export{w as a,b as c,h as f,g as i,p as n};
//# sourceMappingURL=string.1fa787b5.js.map
