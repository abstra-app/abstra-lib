import{n as t,a as i}from"./string.d79077da.js";import"./index.b7995d96.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="900b67a7-fb3a-475f-a4bf-be307e9f7538",e._sentryDebugIdIdentifier="sentry-dbid-900b67a7-fb3a-475f-a4bf-be307e9f7538")}catch{}})();function o(e){return e.replace(/\.py$/,"").trim().length===0?{valid:!1,reason:"File name cannot be empty"}:e.length>255?{valid:!1,reason:"File name cannot be longer than 255 characters"}:e.endsWith(".py")?{valid:!0}:{valid:!1,reason:"File name must end with .py"}}function f(e){if(!o(e).valid)throw new Error("Invalid filename");const a=e.slice(0,-3);return t(a,!0,!0,!0,!0)+".py"}function u(e){return t(e,!0,!0,!0,!0)+".py"}function s(e){return e.trim().length===0?{valid:!1,reason:"Path cannot be empty"}:{valid:!0}}function b(e){if(!s(e).valid)throw new Error("Invalid path");return e.split("/").filter(Boolean).map(r=>i(r)).join("/")}export{s as a,u as b,f as c,b as n,o as v};
//# sourceMappingURL=validations.3758ecc3.js.map
