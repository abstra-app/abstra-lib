import{C as n}from"./gateway.9d2e1477.js";import"./vue-router.f3adf768.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="9dd61772-bb0f-4ad3-bfdf-a39dae85ff03",r._sentryDebugIdIdentifier="sentry-dbid-9dd61772-bb0f-4ad3-bfdf-a39dae85ff03")}catch{}})();class i{async create(t){return n.post(`organizations/${t.organizationId}/members`,{email:t.email})}async delete(t){return n.delete(`organizations/${t.organizationId}/members/${t.authorId}`)}async list(t){return n.get(`organizations/${t}/members`)}async get(t,e){return n.get(`organizations/${t}/members/${e}`)}}const s=new i;class o{constructor(t){this.dto=t}static async list(t){return(await s.list(t)).map(a=>new o(a))}static async create(t,e){const a=await s.create({organizationId:t,email:e});return new o(a)}static async get(t,e){const a=await s.get(t,e);return new o(a)}static async delete(t,e){return s.delete({organizationId:t,authorId:e})}get email(){return this.dto.email}get name(){return this.dto.name}get role(){return this.dto.role}get id(){return this.dto.authorId}get authorId(){return this.dto.authorId}}export{o as M};
//# sourceMappingURL=member.138d7c97.js.map
