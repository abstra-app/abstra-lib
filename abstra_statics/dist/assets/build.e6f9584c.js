var i=Object.defineProperty;var o=(r,t,e)=>t in r?i(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var c=(r,t,e)=>(o(r,typeof t!="symbol"?t+"":t,e),e);import{C as s}from"./gateway.8b5d469f.js";import{A as u}from"./activeRecord.55a23e4a.js";import"./outputWidgets.1739e6b5.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="75f76371-1024-4dfb-9c93-772e2c1897dc",r._sentryDebugIdIdentifier="sentry-dbid-75f76371-1024-4dfb-9c93-772e2c1897dc")}catch{}})();class h{constructor(){c(this,"urlPath","builds")}async create(t){return s.post(`projects/${t.projectId}/${this.urlPath}`,{})}async delete(t){await s.delete(`${this.urlPath}/${t}`)}async list(t){return s.get(`projects/${t}/${this.urlPath}`)}async get(t){return s.get(`${this.urlPath}/${t}`)}async update(t,e){return s.patch(`${this.urlPath}/${t}`,e)}async duplicate(t){return s.post(`${this.urlPath}/${t}/duplicate`,{})}async download(t){return s.get(`${this.urlPath}/${t}/download`)}}const a=new h;class n{constructor(t){c(this,"record");this.record=u.create(a,t,"id")}static async list(t){return(await a.list(t)).map(d=>new n(d))}static async create(t){const e=await a.create({projectId:t});return new n(e)}static async get(t){const e=await a.get(t);return new n(e)}async delete(){await a.delete(this.id)}async save(){this.record.save()}hasChanges(){return this.record.hasChanges()}get id(){return this.record.get("id")}set id(t){this.record.set("id",t)}async duplicate(){return await a.duplicate(this.id)}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get projectId(){return this.record.get("projectId")}get createdAt(){return new Date(this.record.get("createdAt"))}get status(){return this.record.get("status")}get log(){return this.record.get("log")}async download(){const{url:t}=await a.download(this.id);window.open(t,"_blank")}}export{n as B};
//# sourceMappingURL=build.e6f9584c.js.map
