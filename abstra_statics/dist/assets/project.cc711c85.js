var h=Object.defineProperty;var l=(r,t,e)=>t in r?h(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var o=(r,t,e)=>(l(r,typeof t!="symbol"?t+"":t,e),e);import{A as g}from"./record.76453a95.js";import{C as s}from"./gateway.c8bc89d0.js";import"./index.4b0f7fd1.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="403317cd-bde6-412b-9c90-b4898f1a8f47",r._sentryDebugIdIdentifier="sentry-dbid-403317cd-bde6-412b-9c90-b4898f1a8f47")}catch{}})();class y extends Error{constructor(){super("Subdomain already in use")}}class m{constructor(){o(this,"urlPath","projects")}async create({name:t,organizationId:e}){return s.post(`organizations/${e}/${this.urlPath}`,{name:t})}async delete(t){await s.delete(`/${this.urlPath}/${t}`)}async duplicate(t){return await new Promise(e=>setTimeout(e,5e3)),s.post(`/${this.urlPath}/${t}/duplicate`,{})}async list(t){return s.get(`organizations/${t}/${this.urlPath}`)}async get(t){return s.get(`${this.urlPath}/${t}`)}async update(t,e){const a=await s.patch(`${this.urlPath}/${t}`,e);if("error"in a&&a.error==="subdomain-already-in-use")throw new y;if("error"in a)throw new Error("Unknown error");return a}async checkSubdomain(t,e){return s.get(`${this.urlPath}/${t}/check-subdomain/${e}`)}async getStatus(t){return s.get(`${this.urlPath}/${t}/deploy-status`)}async startWebEditor(t){return s.post(`${this.urlPath}/${t}/web-editor/start`,{})}async executeQuery(t,e,a){return s.post(`projects/${t}/execute`,{query:e,params:a})}}const n=new m;class i{constructor(t){o(this,"record");this.record=g.create(n,t)}static formatSubdomain(t){const a=t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=/[a-z0-9]+/g,u=a.matchAll(c);return Array.from(u).map(d=>d[0]).join("-")}static async list(t){return(await n.list(t)).map(a=>new i(a))}static async create(t){const e=await n.create(t);return new i(e)}get team(){return this.record.get("team")}static async get(t){const e=await n.get(t);return new i(e)}static async getStatus(t){return await n.getStatus(t)}async delete(){await n.delete(this.id)}async duplicate(){const t=await n.duplicate(this.id);return new i(t)}static async executeQuery(t,e,a){return n.executeQuery(t,e,a)}async save(){return this.record.save()}resetChanges(){this.record.resetChanges()}hasChanges(){return this.record.hasChanges()}hasChangesDeep(t){return this.record.hasChangesDeep(t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get organizationId(){return this.record.get("organizationId")}get subdomain(){return this.record.get("subdomain")}set subdomain(t){this.record.set("subdomain",t)}async checkSubdomain(){return await n.checkSubdomain(this.id,this.subdomain)}static async startWebEditor(t){return await n.startWebEditor(t)}getUrl(t=""){const e=t.startsWith("/")?t.slice(1):t;return`https://${this.subdomain}.abstra.app/${e}`}}export{i as P,m as a};
//# sourceMappingURL=project.cc711c85.js.map
