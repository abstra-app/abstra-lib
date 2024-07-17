import{C as a}from"./gateway.a1fa7681.js";import"./vue-router.8bd2564b.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="97febe88-4eb3-4ad8-9ec6-09d075233a71",n._sentryDebugIdIdentifier="sentry-dbid-97febe88-4eb3-4ad8-9ec6-09d075233a71")}catch{}})();class i{async create(t){return a.post(`organizations/${t.organizationId}/members`,{email:t.email})}async delete(t){return a.delete(`organizations/${t.organizationId}/members/${t.authorId}`)}async list(t){return a.get(`organizations/${t}/members`)}async get(t,e){return a.get(`organizations/${t}/members/${e}`)}async onboarding(){return a.get("authors/onboarding")}}const o=new i;class s{constructor(t){this.dto=t}static async onboarding(){return o.onboarding()}static async list(t){return(await o.list(t)).map(r=>new s(r))}static async create(t,e){const r=await o.create({organizationId:t,email:e});return new s(r)}static async get(t,e){const r=await o.get(t,e);return new s(r)}static async delete(t,e){return o.delete({organizationId:t,authorId:e})}get email(){return this.dto.email}get name(){return this.dto.name}get role(){return this.dto.role}get id(){return this.dto.authorId}get authorId(){return this.dto.authorId}}export{s as M};
//# sourceMappingURL=member.4196867d.js.map
