var p=Object.defineProperty;var h=(r,t,e)=>t in r?p(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var i=(r,t,e)=>(h(r,typeof t!="symbol"?t+"":t,e),e);import{C as o}from"./gateway.2118d096.js";import{l as u}from"./fetch.e39edada.js";import{E as l}from"./record.4274a364.js";import"./index.34a50bd7.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="c05f6282-15c3-4ac0-afda-62c76afb47f9",r._sentryDebugIdIdentifier="sentry-dbid-c05f6282-15c3-4ac0-afda-62c76afb47f9")}catch{}})();class n{constructor(t){i(this,"record");this.record=l.from(t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}get description(){return this.record.get("description")||""}set description(t){this.record.set("description",t)}get projectId(){return this.record.get("projectId")}static from(t){return new n(t)}commit(){this.record.commit()}hasChanges(){return this.record.hasChanges()}get changes(){return this.record.changes}update(t){this.record.update(t)}}class f{constructor(){i(this,"urlPath","roles")}async create(t,e){return o.post(`projects/${t}/${this.urlPath}`,e)}async delete(t,e){await o.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t,{limit:e,offset:s}){const a={};e&&(a.limit=e.toString()),s&&(a.offset=s.toString());const d=new URLSearchParams(a);return o.get(`projects/${t}/${this.urlPath}?${d.toString()}`)}async update(t,e,s){return o.patch(`projects/${t}/${this.urlPath}/${e}`,s)}}const c=new f;class b{constructor(t){this.projectId=t}async list(t,e){return(await c.list(this.projectId,{limit:t,offset:e})).map(n.from)}async create(t){await c.create(this.projectId,t)}async update(t,e){await c.update(this.projectId,t,e)}async delete(t){await c.delete(this.projectId,t)}}class ${constructor(t=u){this.fetch=t}async list(t,e){const s={};t&&(s.limit=t.toString()),e&&(s.offset=e.toString());const a=new URLSearchParams(s);return(await(await this.fetch(`/_editor/api/roles?${a.toString()}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json()).map(n.from)}}export{b as C,$ as E};
//# sourceMappingURL=repository.9d450fd8.js.map
