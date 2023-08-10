var o=Object.defineProperty;var u=(r,t,e)=>t in r?o(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var i=(r,t,e)=>(u(r,typeof t!="symbol"?t+"":t,e),e);import{A as h}from"./activeRecord.d86e77f4.js";import{C as a}from"./gateway.ace4e6ef.js";import{b as g}from"./index.2816490e.js";import"./registerWidgets.b581b882.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="f1d9743e-fe98-4073-a8ac-0ed7c8bc393b",r._sentryDebugIdIdentifier="sentry-dbid-f1d9743e-fe98-4073-a8ac-0ed7c8bc393b")}catch{}})();class y{constructor(){i(this,"urlPath","connectors")}async create(t){return a.post(`projects/${t.projectId}/${this.urlPath}`,t)}async delete(t){await a.delete(`${this.urlPath}/${t}`)}async list(t){return a.get(`projects/${t}/${this.urlPath}`)}async get(t){return a.get(`${this.urlPath}/${t}`)}async update(t,e){return a.patch(`${this.urlPath}/${t}`,e)}async test(t,e,s){return await a.post(`${this.urlPath}/${t}/test`,{method:e,params:s})}}const n=new y;class c{constructor(t){i(this,"record");this.record=h.create(n,t,"id")}static async list(t){return(await n.list(t)).map(s=>new c(s))}static async create(t,e,s){const d=await n.create({projectId:t,name:e,type:s});return new c(d)}static async get(t){const e=await n.get(t);return new c(e)}async delete(){await n.delete(this.id)}async test(t,e){return await n.test(this.id,t,e)}async save(){this.record.save()}hasChanges(){return this.record.hasChanges()}get id(){return this.record.get("id")}set id(t){this.record.set("id",t)}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get projectId(){return this.record.get("projectId")}get type(){return this.record.get("type")}get settings(){return new Proxy(this.record.get("settings"),{set:(t,e,s)=>(t[e]=s,this.record.set("settings",t),!0)})}get schema(){return g.schema[this.type]}}export{c as C};
//# sourceMappingURL=connector.98aa7d7a.js.map
