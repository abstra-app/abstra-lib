import{C as a}from"./gateway.041a7801.js";import"./vue-router.15b5a782.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="9bd75007-9bd1-4024-80f6-7e9f86a88c98",r._sentryDebugIdIdentifier="sentry-dbid-9bd75007-9bd1-4024-80f6-7e9f86a88c98")}catch{}})();class i{async create(t){return a.post(`organizations/${t.organizationId}/members`,{email:t.email})}async delete(t){return a.delete(`organizations/${t.organizationId}/members/${t.authorId}`)}async list(t){return a.get(`organizations/${t}/members`)}async get(t,e){return a.get(`organizations/${t}/members/${e}`)}}const s=new i;class o{constructor(t){this.dto=t}static async list(t){return(await s.list(t)).map(n=>new o(n))}static async create(t,e){const n=await s.create({organizationId:t,email:e});return new o(n)}static async get(t,e){const n=await s.get(t,e);return new o(n)}static async delete(t,e){return s.delete({organizationId:t,authorId:e})}get email(){return this.dto.email}get name(){return this.dto.name}get role(){return this.dto.role}get id(){return this.dto.authorId}get authorId(){return this.dto.authorId}}export{o as M};
//# sourceMappingURL=member.ad9f62b3.js.map
