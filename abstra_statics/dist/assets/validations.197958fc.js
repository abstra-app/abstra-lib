import{n as a,a as i}from"./string.29fc4c99.js";import"./index.756101fa.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f71d19de-bcf9-4718-804e-029e770f5f2d",e._sentryDebugIdIdentifier="sentry-dbid-f71d19de-bcf9-4718-804e-029e770f5f2d")}catch{}})();function o(e){return e.replace(/\.py$/,"").trim().length===0?{valid:!1,reason:"File name cannot be empty"}:e.length>255?{valid:!1,reason:"File name cannot be longer than 255 characters"}:e.endsWith(".py")?{valid:!0}:{valid:!1,reason:"File name must end with .py"}}function f(e){if(!o(e).valid)throw new Error("Invalid filename");const n=e.slice(0,-3);return a(n,!0,!0,!0,!0)+".py"}function u(e){return a(e,!0,!0,!0,!0)+".py"}function s(e){return e.trim().length===0?{valid:!1,reason:"Path cannot be empty"}:{valid:!0}}function c(e){if(!s(e).valid)throw new Error("Invalid path");return e.split("/").filter(Boolean).map(r=>i(r)).join("/")}export{s as a,u as b,f as c,c as n,o as v};
//# sourceMappingURL=validations.197958fc.js.map
