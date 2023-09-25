var i=Object.defineProperty;var o=(r,t,e)=>t in r?i(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var c=(r,t,e)=>(o(r,typeof t!="symbol"?t+"":t,e),e);import{C as a}from"./gateway.b835e205.js";import{A as u}from"./activeRecord.3ac0bec0.js";import"./registerWidgets.d207d3d8.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="1a2781ec-3571-4a4d-b3e4-44ecb64714bf",r._sentryDebugIdIdentifier="sentry-dbid-1a2781ec-3571-4a4d-b3e4-44ecb64714bf")}catch{}})();class h{constructor(){c(this,"urlPath","builds")}async create(t){return a.post(`projects/${t.projectId}/${this.urlPath}`,{})}async delete(t){await a.delete(`${this.urlPath}/${t}`)}async list(t){return a.get(`projects/${t}/${this.urlPath}`)}async get(t){return a.get(`${this.urlPath}/${t}`)}async update(t,e){return a.patch(`${this.urlPath}/${t}`,e)}async duplicate(t){return a.post(`${this.urlPath}/${t}/duplicate`,{})}async download(t){return a.get(`${this.urlPath}/${t}/download`)}}const s=new h;class n{constructor(t){c(this,"record");this.record=u.create(s,t,"id")}static async list(t){return(await s.list(t)).map(d=>new n(d))}static async create(t){const e=await s.create({projectId:t});return new n(e)}static async get(t){const e=await s.get(t);return new n(e)}async delete(){await s.delete(this.id)}async save(){this.record.save()}hasChanges(){return this.record.hasChanges()}get id(){return this.record.get("id")}set id(t){this.record.set("id",t)}async duplicate(){return await s.duplicate(this.id)}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get projectId(){return this.record.get("projectId")}get createdAt(){return new Date(this.record.get("createdAt"))}get status(){return this.record.get("status")}get log(){return this.record.get("log")}async download(){const{url:t}=await s.download(this.id);window.open(t,"_blank")}}export{n as B};
//# sourceMappingURL=build.43949f06.js.map
