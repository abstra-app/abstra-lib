var c=Object.defineProperty;var d=(r,e,t)=>e in r?c(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var o=(r,e,t)=>(d(r,typeof e!="symbol"?e+"":e,t),t);import{C as a}from"./gateway.9d85485e.js";import{A as u}from"./activeRecord.05dbc88c.js";import"./registerWidgets.f19e2bf7.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="0ce46ee2-e911-4bbe-8d98-b45f368e40a6",r._sentryDebugIdIdentifier="sentry-dbid-0ce46ee2-e911-4bbe-8d98-b45f368e40a6")}catch{}})();class l{constructor(){o(this,"urlPath","members")}async create(e){return a.post(`organizations/${e.organizationId}/${this.urlPath}`,{email:e.email})}async delete(e){await a.delete(`${this.urlPath}/${e}`)}async list(e){return a.get(`organizations/${e}/${this.urlPath}`)}async get(e,t){return a.get(`organizations/${e}/${this.urlPath}/${t}`)}async update(e,t){return a.patch(`${this.urlPath}/${e}`,t)}async duplicate(e){return a.post(`${this.urlPath}/${e}/duplicate`,{})}async login(){return a.post("authors",{})}}const s=new l;class i{constructor(e){o(this,"record");this.record=u.create(s,e,"id")}static async login(){return s.login()}static async list(e){return(await s.list(e)).map(n=>new i(n))}static async create(e,t){const n=await s.create({organizationId:e,email:t});return new i(n)}static async get(e,t){const n=await s.get(e,t);return new i(n)}async delete(){await s.delete(this.email)}async save(){return this.record.save()}hasChanges(){return this.record.hasChanges()}get email(){return this.record.get("email")}set email(e){this.record.set("email",e)}get name(){return this.record.get("name")}set name(e){this.record.set("name",e)}get role(){return this.record.get("role")}set role(e){this.record.set("role",e)}get id(){return this.record.get("id")}get authorId(){return this.record.get("authorId")}}export{i as M};
//# sourceMappingURL=member.71204bd4.js.map
