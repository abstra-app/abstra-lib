var d=Object.defineProperty;var o=(a,t,e)=>t in a?d(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var i=(a,t,e)=>(o(a,typeof t!="symbol"?t+"":t,e),e);import{C as s}from"./gateway.c90c4cc0.js";import"./index.3d66ab3f.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="c4b75673-eba9-4c1f-967f-e4f5beba3a06",a._sentryDebugIdIdentifier="sentry-dbid-c4b75673-eba9-4c1f-967f-e4f5beba3a06")}catch{}})();class u{constructor(){i(this,"urlPath","api-keys")}async create({projectId:t,name:e}){return s.post(`projects/${t}/${this.urlPath}`,{name:e})}async delete(t,e){await s.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t){return s.get(`projects/${t}/${this.urlPath}`)}}const r=new u;class n{constructor(t){this.dto=t}static async list(t){return(await r.list(t)).map(c=>new n(c))}static async create(t){const e=await r.create(t);return new n(e)}static async delete(t,e){await r.delete(t,e)}get id(){return this.dto.id}get name(){return this.dto.name}get createdAt(){return new Date(this.dto.createdAt)}get ownerId(){return this.dto.createdBy}get value(){var t;return(t=this.dto.value)!=null?t:null}}export{n as A};
//# sourceMappingURL=apiKey.a228fcd6.js.map
