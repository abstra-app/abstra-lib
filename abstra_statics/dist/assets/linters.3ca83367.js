var c=Object.defineProperty;var l=(t,e,s)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var n=(t,e,s)=>(l(t,typeof e!="symbol"?e+"":e,s),s);import{a as f}from"./asyncComputed.2cc1ee42.js";import"./index.ed04b5ab.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="2fd01a92-ac86-41b6-b778-3bbbefdfa545",t._sentryDebugIdIdentifier="sentry-dbid-2fd01a92-ac86-41b6-b778-3bbbefdfa545")}catch{}})();class u{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,s){const a=await fetch(`/_editor/api/linters/fix/${e}/${s}`,{method:"POST"});if(!a.ok)throw new Error("Failed to fix");return i.refetch(),a.json()}}const r=new u,i=f(async()=>(await r.check()).map(e=>new h(e)));class b{constructor(e,s){n(this,"name");n(this,"label");n(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=s}async fix(){await r.fix(this.ruleName,this.name)}}class d{constructor(e,s){n(this,"label");n(this,"fixes");this.ruleName=s,this.label=e.label,this.fixes=e.fixes.map(a=>new b(a,s))}}class h{constructor(e){n(this,"name");n(this,"label");n(this,"type");n(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(s=>new d(s,this.name))}static get asyncComputed(){return i}static fromName(e){var a;const s=(a=i.result.value)==null?void 0:a.find(o=>o.name===e);if(!s)throw new Error(`Rule ${e} not found`);return s}}export{h as L};
//# sourceMappingURL=linters.3ca83367.js.map
