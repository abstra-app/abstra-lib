import{C as r}from"./gateway.ccbf1583.js";import"./vue-router.f5fbd672.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="deaaf2d0-0dcb-4367-9b35-9fac1871ea9c",n._sentryDebugIdIdentifier="sentry-dbid-deaaf2d0-0dcb-4367-9b35-9fac1871ea9c")}catch{}})();class i{async create(t){return r.post(`organizations/${t.organizationId}/members`,{email:t.email})}async delete(t){return r.delete(`organizations/${t.organizationId}/members/${t.authorId}`)}async list(t){return r.get(`organizations/${t}/members`)}async get(t,e){return r.get(`organizations/${t}/members/${e}`)}async onboarding(){return r.get("authors/onboarding")}}const o=new i;class s{constructor(t){this.dto=t}static async onboarding(){return o.onboarding()}static async list(t){return(await o.list(t)).map(a=>new s(a))}static async create(t,e){const a=await o.create({organizationId:t,email:e});return new s(a)}static async get(t,e){const a=await o.get(t,e);return new s(a)}static async delete(t,e){return o.delete({organizationId:t,authorId:e})}get email(){return this.dto.email}get name(){return this.dto.name}get role(){return this.dto.role}get id(){return this.dto.authorId}get authorId(){return this.dto.authorId}}export{s as M};
//# sourceMappingURL=member.30d4187c.js.map
