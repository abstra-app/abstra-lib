var o=Object.defineProperty;var c=(s,t,e)=>t in s?o(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var d=(s,t,e)=>(c(s,typeof t!="symbol"?t+"":t,e),e);import{C as a}from"./gateway.72e5ec71.js";import"./index.a2b3ce50.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="b6ba65ed-18ca-418b-b337-4095e1f9bd83",s._sentryDebugIdIdentifier="sentry-dbid-b6ba65ed-18ca-418b-b337-4095e1f9bd83")}catch{}})();class u{constructor(){d(this,"urlPath","api-keys")}async create({projectId:t,name:e}){return a.post(`projects/${t}/${this.urlPath}`,{name:e})}async delete(t,e){await a.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t){return a.get(`projects/${t}/${this.urlPath}`)}}const r=new u;class n{constructor(t){this.dto=t}static async list(t){return(await r.list(t)).map(i=>new n(i))}static async create(t){const e=await r.create(t);return new n(e)}static async delete(t,e){await r.delete(t,e)}get id(){return this.dto.id}get name(){return this.dto.name}get createdAt(){return new Date(this.dto.createdAt)}get ownerId(){return this.dto.createdBy}get value(){var t;return(t=this.dto.value)!=null?t:null}}export{n as A};
//# sourceMappingURL=apiKey.3e55b2fd.js.map
