var p=Object.defineProperty;var h=(r,t,e)=>t in r?p(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var c=(r,t,e)=>(h(r,typeof t!="symbol"?t+"":t,e),e);import{C as a}from"./gateway.3d93841d.js";import{l as u}from"./fetch.6b493350.js";import{E as l}from"./record.6c05e3f5.js";import"./vue-router.78d58ff0.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="ea1ff567-71f0-490a-a0d1-65003c427802",r._sentryDebugIdIdentifier="sentry-dbid-ea1ff567-71f0-490a-a0d1-65003c427802")}catch{}})();class i{constructor(t){c(this,"record");this.record=l.from(t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}get description(){return this.record.get("description")||""}set description(t){this.record.set("description",t)}get projectId(){return this.record.get("projectId")}static from(t){return new i(t)}commit(){this.record.commit()}hasChanges(){return this.record.hasChanges()}get changes(){return this.record.changes}update(t){this.record.update(t)}}class f{constructor(){c(this,"urlPath","roles")}async create(t,e){return a.post(`projects/${t}/${this.urlPath}`,e)}async delete(t,e){await a.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t,{limit:e,offset:s}){const o={};e&&(o.limit=e.toString()),s&&(o.offset=s.toString());const d=new URLSearchParams(o);return a.get(`projects/${t}/${this.urlPath}?${d.toString()}`)}async update(t,e,s){return a.patch(`projects/${t}/${this.urlPath}/${e}`,s)}}const n=new f;class ${constructor(t){this.projectId=t}async list(t,e){return(await n.list(this.projectId,{limit:t,offset:e})).map(i.from)}async create(t){await n.create(this.projectId,t)}async update(t,e){await n.update(this.projectId,t,e)}async delete(t){await n.delete(this.projectId,t)}}class b{constructor(t=u){this.fetch=t}async list(t,e){const s={};t&&(s.limit=t.toString()),e&&(s.offset=e.toString());const o=new URLSearchParams(s);return(await(await this.fetch(`/_editor/api/roles?${o.toString()}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json()).map(i.from)}}export{$ as C,b as E};
//# sourceMappingURL=repository.42064399.js.map
