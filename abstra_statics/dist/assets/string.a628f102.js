import{O as u}from"./index.00900164.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="d7ad8641-6cb7-467d-a936-fffc19da3417",e._sentryDebugIdIdentifier="sentry-dbid-d7ad8641-6cb7-467d-a936-fffc19da3417")}catch{}})();function g(e){return u.string().email().safeParse(e).success}function p(e){return e.charAt(0).toUpperCase()+e.slice(1)}function w(e,r,n=!1,a=!0,s=!1){const c=(a?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),o=s?c.replace(/[^a-zA-Z0-9/]/g,"_"):c.replace(/[^a-zA-Z0-9]/g,"_"),l=n?o:o.replace(/_+/g,"_");return r?l:l.replace(/_$/,"")}function h(e){var t;const n=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),a=/[a-z0-9]+/g,s=n.match(a);return(t=s==null?void 0:s.join("-"))!=null?t:""}function b(e,r){if(e.length===0||r.length===0)return!1;const n=e.toLowerCase(),a=r.toLowerCase();return n.split("").reduce((t,c)=>{var l;if(t===!1)return!1;const o=(l=t[t.length-1])!=null?l:null;if(o===null){const f=a.indexOf(c);return f===-1?!1:[f]}else{const i=a.slice(o+1).indexOf(c);return i===-1?!1:[...t,o+1+i]}},[])}export{h as a,p as c,b as f,g as i,w as n};
//# sourceMappingURL=string.a628f102.js.map
