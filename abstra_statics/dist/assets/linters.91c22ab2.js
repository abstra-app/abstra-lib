var o=Object.defineProperty;var l=(t,e,s)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var n=(t,e,s)=>(l(t,typeof e!="symbol"?e+"":e,s),s);import{a as f}from"./asyncComputed.fbe3bc3e.js";import"./index.9ced0c12.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="9ec37421-6ffa-4963-b589-7c09ec720da7",t._sentryDebugIdIdentifier="sentry-dbid-9ec37421-6ffa-4963-b589-7c09ec720da7")}catch{}})();class u{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,s){const a=await fetch(`/_editor/api/linters/fix/${e}/${s}`,{method:"POST"});if(!a.ok)throw new Error("Failed to fix");return i.refetch(),a.json()}}const r=new u,i=f(async()=>(await r.check()).map(e=>new m(e)));class d{constructor(e,s){n(this,"name");n(this,"label");n(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=s}async fix(){await r.fix(this.ruleName,this.name)}}class h{constructor(e,s){n(this,"label");n(this,"fixes");this.ruleName=s,this.label=e.label,this.fixes=e.fixes.map(a=>new d(a,s))}}class m{constructor(e){n(this,"name");n(this,"label");n(this,"type");n(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(s=>new h(s,this.name))}static get asyncComputed(){return i}static fromName(e){var a;const s=(a=i.result.value)==null?void 0:a.find(c=>c.name===e);if(!s)throw new Error(`Rule ${e} not found`);return s}}export{m as L};
//# sourceMappingURL=linters.91c22ab2.js.map
