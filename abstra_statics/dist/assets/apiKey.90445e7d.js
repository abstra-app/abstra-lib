var o=Object.defineProperty;var c=(s,t,e)=>t in s?o(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var d=(s,t,e)=>(c(s,typeof t!="symbol"?t+"":t,e),e);import{C as r}from"./router.61162211.js";import"./outputWidgets.aa08cfde.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="01309c97-83f4-427e-86e8-f0237ddb311f",s._sentryDebugIdIdentifier="sentry-dbid-01309c97-83f4-427e-86e8-f0237ddb311f")}catch{}})();class u{constructor(){d(this,"urlPath","api-keys")}async create({projectId:t,name:e}){return r.post(`projects/${t}/${this.urlPath}`,{name:e})}async delete(t,e){await r.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t){return r.get(`projects/${t}/${this.urlPath}`)}}const a=new u;class n{constructor(t){this.dto=t}static async list(t){return(await a.list(t)).map(i=>new n(i))}static async create(t){const e=await a.create(t);return new n(e)}static async delete(t,e){await a.delete(t,e)}get id(){return this.dto.id}get name(){return this.dto.name}get createdAt(){return new Date(this.dto.createdAt)}get ownerId(){return this.dto.createdBy}get value(){var t;return(t=this.dto.value)!=null?t:null}}export{n as A};
//# sourceMappingURL=apiKey.90445e7d.js.map
