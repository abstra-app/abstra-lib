var d=Object.defineProperty;var i=(r,e,t)=>e in r?d(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var a=(r,e,t)=>(i(r,typeof e!="symbol"?e+"":e,t),t);import{C as n}from"./gateway.d12df11e.js";import{A as u}from"./record.857b2937.js";import"./outputWidgets.072cca88.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="5029cc87-cc38-4339-80dd-9b666b6b6a46",r._sentryDebugIdIdentifier="sentry-dbid-5029cc87-cc38-4339-80dd-9b666b6b6a46")}catch{}})();class l{constructor(){a(this,"urlPath","api-keys")}async create({projectId:e,name:t}){return n.post(`projects/${e}/${this.urlPath}`,{name:t})}async delete(e,t){await n.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return n.get(`projects/${e}/${this.urlPath}`)}async get(){throw new Error("Not implemented")}async update(){throw new Error("Not implemented")}}const s=new l;class c{constructor(e){a(this,"record");this.record=u.create(s,e)}static async list(e){return(await s.list(e)).map(o=>new c(o))}static async create(e){const t=await s.create(e);return new c(t)}static async delete(e,t){await s.delete(e,t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}async save(){await this.record.save()}get createdAt(){return new Date(this.record.get("createdAt"))}hasChanges(){return this.record.hasChanges()}get ownerId(){return this.record.get("createdBy")}get value(){var e;return(e=this.record.get("value"))!=null?e:null}}export{c as A};
//# sourceMappingURL=apiKey.a3907c2a.js.map
