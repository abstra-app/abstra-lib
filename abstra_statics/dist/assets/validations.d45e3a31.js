import{n as t,a as i}from"./string.ac6f8dbb.js";import"./index.e5cf75e7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="089ccd60-0c62-466a-9b97-7a93f40af057",e._sentryDebugIdIdentifier="sentry-dbid-089ccd60-0c62-466a-9b97-7a93f40af057")}catch{}})();function o(e){return e.replace(/\.py$/,"").trim().length===0?{valid:!1,reason:"File name cannot be empty"}:e.length>255?{valid:!1,reason:"File name cannot be longer than 255 characters"}:e.endsWith(".py")?{valid:!0}:{valid:!1,reason:"File name must end with .py"}}function u(e){if(!o(e).valid)throw new Error("Invalid filename");const a=e.slice(0,-3);return t(a,!0,!0,!0,!0)+".py"}function f(e){return t(e,!0,!0,!0,!0)+".py"}function s(e){return e.trim().length===0?{valid:!1,reason:"Path cannot be empty"}:{valid:!0}}function c(e){if(!s(e).valid)throw new Error("Invalid path");return e.split("/").filter(Boolean).map(r=>i(r)).join("/")}export{s as a,f as b,u as c,c as n,o as v};
//# sourceMappingURL=validations.d45e3a31.js.map
