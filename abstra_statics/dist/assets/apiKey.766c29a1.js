var o=Object.defineProperty;var c=(s,e,t)=>e in s?o(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var i=(s,e,t)=>(c(s,typeof e!="symbol"?e+"":e,t),t);import{C as r}from"./gateway.33526140.js";import"./outputWidgets.e5a7a6db.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="ee44ce15-4e94-4a88-9fe5-7f84e9635388",s._sentryDebugIdIdentifier="sentry-dbid-ee44ce15-4e94-4a88-9fe5-7f84e9635388")}catch{}})();class u{constructor(){i(this,"urlPath","api-keys")}async create({projectId:e,name:t}){return r.post(`projects/${e}/${this.urlPath}`,{name:t})}async delete(e,t){await r.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return r.get(`projects/${e}/${this.urlPath}`)}}const a=new u;class n{constructor(e){this.dto=e}static async list(e){return(await a.list(e)).map(d=>new n(d))}static async create(e){const t=await a.create(e);return new n(t)}static async delete(e,t){await a.delete(e,t)}get id(){return this.dto.id}get name(){return this.dto.name}get createdAt(){return new Date(this.dto.createdAt)}get ownerId(){return this.dto.createdBy}get value(){var e;return(e=this.dto.value)!=null?e:null}}export{n as A};
//# sourceMappingURL=apiKey.766c29a1.js.map
