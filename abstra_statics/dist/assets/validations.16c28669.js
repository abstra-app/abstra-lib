import{n as t,a as i}from"./string.6882b5cf.js";import"./index.b04d38cb.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="83939015-6b3a-48a7-bedc-1837b2a9886d",e._sentryDebugIdIdentifier="sentry-dbid-83939015-6b3a-48a7-bedc-1837b2a9886d")}catch{}})();function o(e){return e.replace(/\.py$/,"").trim().length===0?{valid:!1,reason:"File name cannot be empty"}:e.length>255?{valid:!1,reason:"File name cannot be longer than 255 characters"}:e.endsWith(".py")?{valid:!0}:{valid:!1,reason:"File name must end with .py"}}function u(e){if(!o(e).valid)throw new Error("Invalid filename");const a=e.slice(0,-3);return t(a,!0,!0,!0,!0)+".py"}function f(e){return t(e,!0,!0,!0,!0)+".py"}function s(e){return e.trim().length===0?{valid:!1,reason:"Path cannot be empty"}:{valid:!0}}function c(e){if(!s(e).valid)throw new Error("Invalid path");return e.split("/").filter(Boolean).map(r=>i(r)).join("/")}export{s as a,f as b,u as c,c as n,o as v};
//# sourceMappingURL=validations.16c28669.js.map
