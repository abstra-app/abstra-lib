var d=Object.defineProperty;var c=(s,t,e)=>t in s?d(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var i=(s,t,e)=>(c(s,typeof t!="symbol"?t+"":t,e),e);import{C as a}from"./gateway.a0e7cb55.js";import"./outputWidgets.396f5ce1.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="21ee0420-e8cd-40b8-ba75-236b675542e6",s._sentryDebugIdIdentifier="sentry-dbid-21ee0420-e8cd-40b8-ba75-236b675542e6")}catch{}})();class o{constructor(){i(this,"urlPath","organizations")}async create(t){return a.post(`${this.urlPath}`,t)}async delete(t){await a.delete(`${this.urlPath}/${t}`)}async list(){return a.get(`${this.urlPath}`)}async get(t){return a.get(`${this.urlPath}/${t}`)}}const n=new o;class r{constructor(t){this.dto=t}static async list(){return(await n.list()).map(e=>new r(e))}static async create(t){const e=await n.create({name:t});return new r(e)}static async get(t){const e=await n.get(t);return new r(e)}async delete(){await n.delete(this.id)}get id(){return this.dto.id}get name(){return this.dto.name}}export{r as O};
//# sourceMappingURL=organization.e739f1ec.js.map
