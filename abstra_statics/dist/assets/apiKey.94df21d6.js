var i=Object.defineProperty;var o=(s,t,e)=>t in s?i(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var n=(s,t,e)=>(o(s,typeof t!="symbol"?t+"":t,e),e);import{C as r}from"./gateway.4c384311.js";import"./index.10d18eeb.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="1d75474d-bd17-47dc-adc2-6c747cd1392b",s._sentryDebugIdIdentifier="sentry-dbid-1d75474d-bd17-47dc-adc2-6c747cd1392b")}catch{}})();class u{constructor(){n(this,"urlPath","api-keys")}async create({projectId:t,name:e}){return r.post(`projects/${t}/${this.urlPath}`,{name:e})}async delete(t,e){await r.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t){return r.get(`projects/${t}/${this.urlPath}`)}}const a=new u;class d{constructor(t){this.dto=t}static async list(t){return(await a.list(t)).map(c=>new d(c))}static async create(t){const e=await a.create(t);return new d(e)}static async delete(t,e){await a.delete(t,e)}get id(){return this.dto.id}get name(){return this.dto.name}get createdAt(){return new Date(this.dto.createdAt)}get ownerId(){return this.dto.createdBy}get value(){var t;return(t=this.dto.value)!=null?t:null}}export{d as A};
//# sourceMappingURL=apiKey.94df21d6.js.map
