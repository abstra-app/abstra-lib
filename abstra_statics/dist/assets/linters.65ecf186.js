var c=Object.defineProperty;var l=(t,e,s)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var n=(t,e,s)=>(l(t,typeof e!="symbol"?e+"":e,s),s);import{a as f}from"./asyncComputed.94aa5810.js";import"./index.ed89996a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="dee00d5f-752f-407c-b15e-ed152c01d11f",t._sentryDebugIdIdentifier="sentry-dbid-dee00d5f-752f-407c-b15e-ed152c01d11f")}catch{}})();class u{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,s){const i=await fetch(`/_editor/api/linters/fix/${e}/${s}`,{method:"POST"});if(!i.ok)throw new Error("Failed to fix");return a.refetch(),i.json()}}const r=new u,a=f(async()=>(await r.check()).map(e=>new m(e)));class d{constructor(e,s){n(this,"name");n(this,"label");n(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=s}async fix(){await r.fix(this.ruleName,this.name)}}class h{constructor(e,s){n(this,"label");n(this,"fixes");this.ruleName=s,this.label=e.label,this.fixes=e.fixes.map(i=>new d(i,s))}}class m{constructor(e){n(this,"name");n(this,"label");n(this,"type");n(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(s=>new h(s,this.name))}static get asyncComputed(){return a}static fromName(e){var i;const s=(i=a.result.value)==null?void 0:i.find(o=>o.name===e);if(!s)throw new Error(`Rule ${e} not found`);return s}}export{m as L};
//# sourceMappingURL=linters.65ecf186.js.map
