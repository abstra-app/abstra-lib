import{n as t,a as i}from"./string.a628f102.js";import"./index.00900164.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="6bc039af-b467-48cb-b02c-e45eca06eaf9",e._sentryDebugIdIdentifier="sentry-dbid-6bc039af-b467-48cb-b02c-e45eca06eaf9")}catch{}})();function o(e){return e.replace(/\.py$/,"").trim().length===0?{valid:!1,reason:"File name cannot be empty"}:e.length>255?{valid:!1,reason:"File name cannot be longer than 255 characters"}:e.endsWith(".py")?{valid:!0}:{valid:!1,reason:"File name must end with .py"}}function u(e){if(!o(e).valid)throw new Error("Invalid filename");const a=e.slice(0,-3);return t(a,!0,!0,!0,!0)+".py"}function c(e){return t(e,!0,!0,!0,!0)+".py"}function s(e){return e.trim().length===0?{valid:!1,reason:"Path cannot be empty"}:{valid:!0}}function f(e){if(!s(e).valid)throw new Error("Invalid path");return e.split("/").filter(Boolean).map(r=>i(r)).join("/")}export{s as a,c as b,f as c,u as n,o as v};
//# sourceMappingURL=validations.de4cc741.js.map
