import{n as a,a as i}from"./string.a56a2ab5.js";import"./index.04707aff.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d6887f6f-dc65-4c87-98c7-c768821f8c61",e._sentryDebugIdIdentifier="sentry-dbid-d6887f6f-dc65-4c87-98c7-c768821f8c61")}catch{}})();function o(e){return e.replace(/\.py$/,"").trim().length===0?{valid:!1,reason:"File name cannot be empty"}:e.length>255?{valid:!1,reason:"File name cannot be longer than 255 characters"}:e.endsWith(".py")?{valid:!0}:{valid:!1,reason:"File name must end with .py"}}function u(e){if(!o(e).valid)throw new Error("Invalid filename");const n=e.slice(0,-3);return a(n,!0,!0,!0,!0)+".py"}function c(e){return a(e,!0,!0,!0,!0)+".py"}function s(e){return e.trim().length===0?{valid:!1,reason:"Path cannot be empty"}:{valid:!0}}function f(e){if(!s(e).valid)throw new Error("Invalid path");return e.split("/").filter(Boolean).map(r=>i(r)).join("/")}export{s as a,c as b,u as c,f as n,o as v};
//# sourceMappingURL=validations.172f61c1.js.map
