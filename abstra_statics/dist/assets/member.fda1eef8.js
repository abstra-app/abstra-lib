import{C as r}from"./gateway.08838de5.js";import"./outputWidgets.bf3b4f42.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="451c3e28-56ab-4424-af61-d3a4acd06dba",a._sentryDebugIdIdentifier="sentry-dbid-451c3e28-56ab-4424-af61-d3a4acd06dba")}catch{}})();class i{async create(t){return r.post(`organizations/${t.organizationId}/members`,{email:t.email})}async delete(t){return r.delete(`organizations/${t.organizationId}/members/${t.authorId}`)}async list(t){return r.get(`organizations/${t}/members`)}async get(t,e){return r.get(`organizations/${t}/members/${e}`)}async login(){return r.post("authors",{})}}const s=new i;class o{constructor(t){this.dto=t}static async login(){return s.login()}static async list(t){return(await s.list(t)).map(n=>new o(n))}static async create(t,e){const n=await s.create({organizationId:t,email:e});return new o(n)}static async get(t,e){const n=await s.get(t,e);return new o(n)}static async delete(t,e){return s.delete({organizationId:t,authorId:e})}get email(){return this.dto.email}get name(){return this.dto.name}get role(){return this.dto.role}get id(){return this.dto.authorId}get authorId(){return this.dto.authorId}}export{o as M};
//# sourceMappingURL=member.fda1eef8.js.map
