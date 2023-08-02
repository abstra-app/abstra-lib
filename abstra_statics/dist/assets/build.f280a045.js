var d=Object.defineProperty;var o=(r,t,e)=>t in r?d(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var i=(r,t,e)=>(o(r,typeof t!="symbol"?t+"":t,e),e);import{C as s}from"./gateway.052cd6ee.js";import{A as u}from"./activeRecord.81c11d03.js";import"./registerWidgets.9f96e537.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="8c393995-4046-451c-90a6-0ed76812489c",r._sentryDebugIdIdentifier="sentry-dbid-8c393995-4046-451c-90a6-0ed76812489c")}catch{}})();class h{constructor(){i(this,"urlPath","builds")}async create(t){return s.post(`projects/${t.projectId}/${this.urlPath}`,{})}async delete(t){await s.delete(`${this.urlPath}/${t}`)}async list(t){return s.get(`projects/${t}/${this.urlPath}`)}async get(t){return s.get(`${this.urlPath}/${t}`)}async update(t,e){return s.patch(`${this.urlPath}/${t}`,e)}async duplicate(t){return s.post(`${this.urlPath}/${t}/duplicate`,{})}}const a=new h;class c{constructor(t){i(this,"record");this.record=new u(a,t,"id")}static async list(t){return(await a.list(t)).map(n=>new c(n))}static async create(t){const e=await a.create({projectId:t});return new c(e)}static async get(t){const e=await a.get(t);return new c(e)}async delete(){await a.delete(this.id)}async save(){this.record.save()}hasChanges(){return this.record.hasChanges()}get id(){return this.record.get("id")}set id(t){this.record.set("id",t)}async duplicate(){return await a.duplicate(this.id)}get label(){return`${this.createdAt.toString().slice(0,16).replace("T"," ")} (${this.id.split("-")[0]})`}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get projectId(){return this.record.get("projectId")}get createdAt(){return this.record.get("createdAt")}get status(){return this.record.get("status")}}export{c as B};
//# sourceMappingURL=build.f280a045.js.map
