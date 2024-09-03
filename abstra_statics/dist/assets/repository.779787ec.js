var p=Object.defineProperty;var h=(r,t,e)=>t in r?p(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var i=(r,t,e)=>(h(r,typeof t!="symbol"?t+"":t,e),e);import{C as a}from"./gateway.593ed864.js";import{l as u}from"./fetch.c6727ad6.js";import{E as l}from"./record.2ab953c0.js";import"./vue-router.d92d4544.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="385c7c8f-9166-4935-981a-befb00211e39",r._sentryDebugIdIdentifier="sentry-dbid-385c7c8f-9166-4935-981a-befb00211e39")}catch{}})();class c{constructor(t){i(this,"record");this.record=l.from(t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}get description(){return this.record.get("description")||""}set description(t){this.record.set("description",t)}get projectId(){return this.record.get("projectId")}static from(t){return new c(t)}commit(){this.record.commit()}hasChanges(){return this.record.hasChanges()}get changes(){return this.record.changes}update(t){this.record.update(t)}}class f{constructor(){i(this,"urlPath","roles")}async create(t,e){return a.post(`projects/${t}/${this.urlPath}`,e)}async delete(t,e){await a.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t,{limit:e,offset:s}){const o={};e&&(o.limit=e.toString()),s&&(o.offset=s.toString());const d=new URLSearchParams(o);return a.get(`projects/${t}/${this.urlPath}?${d.toString()}`)}async update(t,e,s){return a.patch(`projects/${t}/${this.urlPath}/${e}`,s)}}const n=new f;class I{constructor(t){this.projectId=t}async list(t,e){return(await n.list(this.projectId,{limit:t,offset:e})).map(c.from)}async create(t){await n.create(this.projectId,t)}async update(t,e){await n.update(this.projectId,t,e)}async delete(t){await n.delete(this.projectId,t)}}class ${constructor(t=u){this.fetch=t}async list(t,e){const s={};t&&(s.limit=t.toString()),e&&(s.offset=e.toString());const o=new URLSearchParams(s);return(await(await this.fetch(`/_editor/api/roles?${o.toString()}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json()).map(c.from)}}export{I as C,$ as E};
//# sourceMappingURL=repository.779787ec.js.map
