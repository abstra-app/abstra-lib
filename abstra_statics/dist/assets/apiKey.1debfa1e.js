var i=Object.defineProperty;var o=(s,t,e)=>t in s?i(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var d=(s,t,e)=>(o(s,typeof t!="symbol"?t+"":t,e),e);import{C as r}from"./router.5c7dcb00.js";import"./outputWidgets.1809539d.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="7c43667c-51c8-4d92-a344-545bbd0f79e9",s._sentryDebugIdIdentifier="sentry-dbid-7c43667c-51c8-4d92-a344-545bbd0f79e9")}catch{}})();class u{constructor(){d(this,"urlPath","api-keys")}async create({projectId:t,name:e}){return r.post(`projects/${t}/${this.urlPath}`,{name:e})}async delete(t,e){await r.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t){return r.get(`projects/${t}/${this.urlPath}`)}}const a=new u;class n{constructor(t){this.dto=t}static async list(t){return(await a.list(t)).map(c=>new n(c))}static async create(t){const e=await a.create(t);return new n(e)}static async delete(t,e){await a.delete(t,e)}get id(){return this.dto.id}get name(){return this.dto.name}get createdAt(){return new Date(this.dto.createdAt)}get ownerId(){return this.dto.createdBy}get value(){var t;return(t=this.dto.value)!=null?t:null}}export{n as A};
//# sourceMappingURL=apiKey.1debfa1e.js.map
