var c=Object.defineProperty;var o=(s,t,e)=>t in s?c(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var d=(s,t,e)=>(o(s,typeof t!="symbol"?t+"":t,e),e);import{C as a}from"./gateway.f6f3dfe7.js";import"./outputWidgets.b4050bc1.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="3eabbdb9-186e-4866-91c3-21833168ca6e",s._sentryDebugIdIdentifier="sentry-dbid-3eabbdb9-186e-4866-91c3-21833168ca6e")}catch{}})();class u{constructor(){d(this,"urlPath","api-keys")}async create({projectId:t,name:e}){return a.post(`projects/${t}/${this.urlPath}`,{name:e})}async delete(t,e){await a.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t){return a.get(`projects/${t}/${this.urlPath}`)}}const r=new u;class n{constructor(t){this.dto=t}static async list(t){return(await r.list(t)).map(i=>new n(i))}static async create(t){const e=await r.create(t);return new n(e)}static async delete(t,e){await r.delete(t,e)}get id(){return this.dto.id}get name(){return this.dto.name}get createdAt(){return new Date(this.dto.createdAt)}get ownerId(){return this.dto.createdBy}get value(){var t;return(t=this.dto.value)!=null?t:null}}export{n as A};
//# sourceMappingURL=apiKey.56e4567a.js.map
