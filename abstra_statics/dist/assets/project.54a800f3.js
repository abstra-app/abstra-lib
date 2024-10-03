var h=Object.defineProperty;var l=(r,t,e)=>t in r?h(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var i=(r,t,e)=>(l(r,typeof t!="symbol"?t+"":t,e),e);import{C as n}from"./gateway.ab91e982.js";import{A as g}from"./record.7b50d825.js";import"./vue-router.0ce79355.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="50c01965-0c5f-4688-9182-9cc79cfcccb0",r._sentryDebugIdIdentifier="sentry-dbid-50c01965-0c5f-4688-9182-9cc79cfcccb0")}catch{}})();class y extends Error{constructor(){super("Subdomain already in use")}}class m{constructor(){i(this,"urlPath","projects")}async create({name:t,organizationId:e}){return n.post(`organizations/${e}/${this.urlPath}`,{name:t})}async delete(t){await n.delete(`/${this.urlPath}/${t}`)}async duplicate(t){return await new Promise(e=>setTimeout(e,5e3)),n.post(`/${this.urlPath}/${t}/duplicate`,{})}async list(t){return n.get(`organizations/${t}/${this.urlPath}`)}async get(t){return n.get(`${this.urlPath}/${t}`)}async update(t,e){const a=await n.patch(`${this.urlPath}/${t}`,e);if("error"in a&&a.error==="subdomain-already-in-use")throw new y;if("error"in a)throw new Error("Unknown error");return a}async checkSubdomain(t,e){return n.get(`${this.urlPath}/${t}/check-subdomain/${e}`)}async getStatus(t){return n.get(`${this.urlPath}/${t}/deploy-status`)}async executeQuery(t,e,a){return n.post(`projects/${t}/execute`,{query:e,params:a})}}const s=new m;class c{constructor(t){i(this,"record");this.record=g.create(s,t)}static formatSubdomain(t){const a=t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),o=/[a-z0-9]+/g,u=a.matchAll(o);return Array.from(u).map(d=>d[0]).join("-")}static async list(t){return(await s.list(t)).map(a=>new c(a))}static async create(t){const e=await s.create(t);return new c(e)}static async get(t){const e=await s.get(t);return new c(e)}static async getStatus(t){return await s.getStatus(t)}async delete(){await s.delete(this.id)}async duplicate(){const t=await s.duplicate(this.id);return new c(t)}static async executeQuery(t,e,a){return s.executeQuery(t,e,a)}async save(){return this.record.save()}resetChanges(){this.record.resetChanges()}hasChanges(){return this.record.hasChanges()}hasChangesDeep(t){return this.record.hasChangesDeep(t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get organizationId(){return this.record.get("organizationId")}get subdomain(){return this.record.get("subdomain")}set subdomain(t){this.record.set("subdomain",t)}async checkSubdomain(){return await s.checkSubdomain(this.id,this.subdomain)}getUrl(t=""){const e=t.startsWith("/")?t.slice(1):t;return`https://${this.subdomain}.abstra.app/${e}`}static async rename(t,e){await s.update(t,{name:e})}}export{c as P};
//# sourceMappingURL=project.54a800f3.js.map
