var d=Object.defineProperty;var i=(r,e,t)=>e in r?d(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var s=(r,e,t)=>(i(r,typeof e!="symbol"?e+"":e,t),t);import{C as n}from"./gateway.77d1eed5.js";import{A as u}from"./activeRecord.09a0d7a2.js";import"./outputWidgets.1a399dc6.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="8edcea0b-5286-4030-af40-8043c549a349",r._sentryDebugIdIdentifier="sentry-dbid-8edcea0b-5286-4030-af40-8043c549a349")}catch{}})();class l{constructor(){s(this,"urlPath","api-keys")}async create({projectId:e,name:t}){return n.post(`projects/${e}/${this.urlPath}`,{name:t})}async delete(e,t){await n.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return n.get(`projects/${e}/${this.urlPath}`)}async get(){throw new Error("Not implemented")}async update(){throw new Error("Not implemented")}}const a=new l;class c{constructor(e){s(this,"record");this.record=u.create(a,e,"id")}static async list(e){return(await a.list(e)).map(o=>new c(o))}static async create(e){const t=await a.create(e);return new c(t)}static async delete(e,t){await a.delete(e,t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}async save(){await this.record.save()}get createdAt(){return new Date(this.record.get("createdAt"))}hasChanges(){return this.record.hasChanges()}get ownerId(){return this.record.get("createdBy")}get value(){var e;return(e=this.record.get("value"))!=null?e:null}}export{c as A};
//# sourceMappingURL=apiKey.97569d79.js.map
