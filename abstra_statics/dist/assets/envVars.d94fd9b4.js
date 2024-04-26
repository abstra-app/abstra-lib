var f=Object.defineProperty;var p=(s,e,t)=>e in s?f(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var a=(s,e,t)=>(p(s,typeof e!="symbol"?e+"":e,t),t);import{a as l}from"./asyncComputed.8ab9e4d0.js";import"./outputWidgets.950bc458.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="01697158-d21c-4e8c-836b-e9c8780f6757",s._sentryDebugIdIdentifier="sentry-dbid-01697158-d21c-4e8c-836b-e9c8780f6757")}catch{}})();class h{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const n=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!n.ok)throw new Error("Failed to fix");return i.refetch(),n.json()}}const u=new h,i=l(async()=>(await u.check()).map(e=>new w(e)));class y{constructor(e,t){a(this,"name");a(this,"label");a(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await u.fix(this.ruleName,this.name)}}class m{constructor(e,t){a(this,"label");a(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(n=>new y(n,t))}}class w{constructor(e){a(this,"name");a(this,"label");a(this,"type");a(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new m(t,this.name))}static get asyncComputed(){return i}static fromName(e){var n;const t=(n=i.result.value)==null?void 0:n.find(d=>d.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}class b{async list(){const e=await fetch("/_editor/api/env-vars");if(!e.ok)throw new Error("Failed to list env vars");return e.json()}async create(e,t){const n=await fetch("/_editor/api/env-vars",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:e,value:t})});return c.refetch(),n.json()}async delete(e){if(!(await fetch(`/_editor/api/env-vars/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete env vars");c.refetch()}}const o=new b,c=l(async()=>(await o.list()).map(e=>r.fromDto(e.key,e.value)));class r{constructor(e,t){this._key=e,this._value=t}static get listComputed(){return c}static fromDto(e,t){return new r(e,t)}get key(){return this._key}get value(){return this._value}static async create(e,t){const n=await o.create(e,t);return new r(n.key,n.value)}async delete(){await o.delete(this._key)}}export{r as E,w as L};
//# sourceMappingURL=envVars.d94fd9b4.js.map
