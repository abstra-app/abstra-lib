import{C as r}from"./gateway.9a9ad49f.js";import"./vue-router.d16ec2a7.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="0f4e4a10-af89-49d1-ab8c-a7df4dd84d81",n._sentryDebugIdIdentifier="sentry-dbid-0f4e4a10-af89-49d1-ab8c-a7df4dd84d81")}catch{}})();class i{async create(t){return r.post(`organizations/${t.organizationId}/members`,{email:t.email})}async delete(t){return r.delete(`organizations/${t.organizationId}/members/${t.authorId}`)}async list(t){return r.get(`organizations/${t}/members`)}async get(t,e){return r.get(`organizations/${t}/members/${e}`)}async onboarding(){return r.get("authors/onboarding")}}const o=new i;class s{constructor(t){this.dto=t}static async onboarding(){return o.onboarding()}static async list(t){return(await o.list(t)).map(a=>new s(a))}static async create(t,e){const a=await o.create({organizationId:t,email:e});return new s(a)}static async get(t,e){const a=await o.get(t,e);return new s(a)}static async delete(t,e){return o.delete({organizationId:t,authorId:e})}get email(){return this.dto.email}get name(){return this.dto.name}get role(){return this.dto.role}get id(){return this.dto.authorId}get authorId(){return this.dto.authorId}}export{s as M};
//# sourceMappingURL=member.7c3224f9.js.map
