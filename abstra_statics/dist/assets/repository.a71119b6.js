var f=Object.defineProperty;var j=(r,t,e)=>t in r?f(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var n=(r,t,e)=>(j(r,typeof t!="symbol"?t+"":t,e),e);import{C as a}from"./router.681250d3.js";import{l as g}from"./fetch.81a125ba.js";import{E as m}from"./record.c3640d28.js";import"./outputWidgets.c28810ce.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="7d24b602-3205-41d3-9aec-1e216d7d231d",r._sentryDebugIdIdentifier="sentry-dbid-7d24b602-3205-41d3-9aec-1e216d7d231d")}catch{}})();class u{constructor(t){n(this,"record");this.record=m.from(t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}get description(){return this.record.get("description")||""}set description(t){this.record.set("description",t)}get projectId(){return this.record.get("projectId")}static from(t){return new u(t)}commit(){this.record.commit()}hasChanges(){return this.record.hasChanges()}get changes(){return this.record.changes}update(t){this.record.update(t)}}class w{constructor(){n(this,"urlPath","roles")}async create(t,e){return a.post(`projects/${t}/${this.urlPath}`,e)}async delete(t,e){await a.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t,{limit:e,offset:s}){const o={};e&&(o.limit=e.toString()),s&&(o.offset=s.toString());const c=new URLSearchParams(o);return a.get(`projects/${t}/${this.urlPath}?${c.toString()}`)}async update(t,e,s){return a.patch(`projects/${t}/${this.urlPath}/${e}`,s)}}const d=new w;class T{constructor(t){this.projectId=t}async list(t,e){return(await d.list(this.projectId,{limit:t,offset:e})).map(u.from)}async create(t){await d.create(this.projectId,t)}async update(t,e){await d.update(this.projectId,t,e)}async delete(t){await d.delete(this.projectId,t)}}class D{constructor(t=g){this.fetch=t}async list(t,e){const s={};t&&(s.limit=t.toString()),e&&(s.offset=e.toString());const o=new URLSearchParams(s);return(await(await this.fetch(`/_editor/api/roles?${o.toString()}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json()).map(u.from)}}const p=class{constructor(t){n(this,"record");this.dto=t,this.record=m.from(t)}static from(t){return new p(t)}toDTO(){return this.record.toDTO()}get id(){return this.record.get("id")}get projectId(){return this.record.get("projectId")}get emailPatterns(){return this.record.get("emailPatterns")}set emailPatterns(t){this.record.set("emailPatterns",t)}get hasChanges(){return this.record.hasChangesDeep("emailPatterns")}get strategy(){return this.dto.emailPatterns.length===0?"inviteOnly":"patternOnly"}get changes(){return this.record.changes}allowOnlyInvited(){this.record.set("emailPatterns",[])}static validate(t){return p.pattern.test(t)}};let i=p;n(i,"pattern",new RegExp("^@?(?!-)[A-Za-z0-9-]{1,}(?<!-)(\\.[A-Za-z]{2,})+$"));class P{constructor(){n(this,"urlPath","signup-policy")}async update(t,e){return a.patch(`projects/${t}/${this.urlPath}`,e)}async get(t){return a.get(`projects/${t}/${this.urlPath}`)}}const y=new P;class _{constructor(t){this.projectId=t}async update(t){const{emailPatterns:e}=t.changes;if(!e)return t;const s=await y.update(this.projectId,{emailPatterns:e});return i.from(s)}async get(){const t=await y.get(this.projectId);return i.from(t)}}class A{constructor(t=g){this.fetch=t}async update(t){const{emailPatterns:e}=t.changes;return e?(await this.fetch("/_editor/api/users/signup-policy",{method:"PUT",body:JSON.stringify({email_patterns:e}),headers:{"Content-Type":"application/json"}}),i.from({...t.toDTO(),emailPatterns:e})):t}async get(){const e=await(await this.fetch("/_editor/api/users/signup-policy")).json();return i.from({emailPatterns:e.email_patterns,id:e.id,projectId:e.project_id,createdAt:e.created_at})}}class l{constructor(t){n(this,"record");this.dto=t,this.record=m.from(t)}static from(t){return new l(t)}toDTO(){return this.record.toDTO()}get changes(){return this.record.changes}get id(){return this.record.get("id")}get email(){return this.record.get("email")}set email(t){this.record.set("email",t)}get projectId(){return this.record.get("projectId")}get roles(){return this.record.get("roles")}set roles(t){this.record.set("roles",t)}update(t){this.record.update(t)}resetChanges(){this.record.resetChanges()}}class I{constructor(){n(this,"urlPath","users")}async create(t,e){return a.post(`projects/${t}/${this.urlPath}`,e)}async delete(t,e){await a.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t,{limit:e,offset:s}){const o={};e&&(o.limit=e.toString()),s&&(o.offset=s.toString());const c=new URLSearchParams(o);return a.get(`projects/${t}/${this.urlPath}?${c.toString()}`)}async update(t,e,s){return a.patch(`projects/${t}/${this.urlPath}/${e}`,s)}}const h=new I;class E{constructor(t=g){this.fetch=t}async list(){return(await(await this.fetch("/_editor/api/users")).json()).map(l.from)}async create(t){await this.fetch("/_editor/api/users",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}}class U{constructor(t){this.projectId=t}async create(t){await h.create(this.projectId,t)}async update(t,e){await h.update(this.projectId,t,e)}async delete(t){await h.delete(this.projectId,t)}async list(t,e){return(await h.list(this.projectId,{limit:t,offset:e})).map(l.from)}}export{_ as C,E,A as a,D as b,U as c,T as d};
//# sourceMappingURL=repository.a71119b6.js.map
