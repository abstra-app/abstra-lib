var o=Object.defineProperty;var c=(a,t,e)=>t in a?o(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var d=(a,t,e)=>(c(a,typeof t!="symbol"?t+"":t,e),e);import{C as s}from"./gateway.d74797a6.js";import"./index.c80219e2.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="f02d0aea-fadd-4471-9bb9-c48e33222be1",a._sentryDebugIdIdentifier="sentry-dbid-f02d0aea-fadd-4471-9bb9-c48e33222be1")}catch{}})();class u{constructor(){d(this,"urlPath","api-keys")}async create({projectId:t,name:e}){return s.post(`projects/${t}/${this.urlPath}`,{name:e})}async delete(t,e){await s.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t){return s.get(`projects/${t}/${this.urlPath}`)}}const r=new u;class n{constructor(t){this.dto=t}static async list(t){return(await r.list(t)).map(i=>new n(i))}static async create(t){const e=await r.create(t);return new n(e)}static async delete(t,e){await r.delete(t,e)}get id(){return this.dto.id}get name(){return this.dto.name}get createdAt(){return new Date(this.dto.createdAt)}get ownerId(){return this.dto.createdBy}get value(){var t;return(t=this.dto.value)!=null?t:null}}export{n as A};
//# sourceMappingURL=apiKey.7f028497.js.map
