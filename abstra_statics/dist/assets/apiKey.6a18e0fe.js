var i=Object.defineProperty;var o=(a,t,e)=>t in a?i(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var c=(a,t,e)=>(o(a,typeof t!="symbol"?t+"":t,e),e);import{C as s}from"./router.a3ac75dc.js";import"./outputWidgets.9c2ce84d.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="fc112e3b-1aa6-48ee-9d97-45238a9cc975",a._sentryDebugIdIdentifier="sentry-dbid-fc112e3b-1aa6-48ee-9d97-45238a9cc975")}catch{}})();class u{constructor(){c(this,"urlPath","api-keys")}async create({projectId:t,name:e}){return s.post(`projects/${t}/${this.urlPath}`,{name:e})}async delete(t,e){await s.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t){return s.get(`projects/${t}/${this.urlPath}`)}}const r=new u;class n{constructor(t){this.dto=t}static async list(t){return(await r.list(t)).map(d=>new n(d))}static async create(t){const e=await r.create(t);return new n(e)}static async delete(t,e){await r.delete(t,e)}get id(){return this.dto.id}get name(){return this.dto.name}get createdAt(){return new Date(this.dto.createdAt)}get ownerId(){return this.dto.createdBy}get value(){var t;return(t=this.dto.value)!=null?t:null}}export{n as A};
//# sourceMappingURL=apiKey.6a18e0fe.js.map
