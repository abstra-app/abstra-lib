import{C as r}from"./gateway.b334672b.js";import"./outputWidgets.9c82af3f.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="8ac352f9-0a0f-4ae7-a08d-8da641d0f5de",a._sentryDebugIdIdentifier="sentry-dbid-8ac352f9-0a0f-4ae7-a08d-8da641d0f5de")}catch{}})();class i{async create(t){return r.post(`organizations/${t.organizationId}/members`,{email:t.email})}async delete(t){return r.delete(`organizations/${t.organizationId}/members/${t.authorId}`)}async list(t){return r.get(`organizations/${t}/members`)}async get(t,e){return r.get(`organizations/${t}/members/${e}`)}async onboarding(){return r.get("authors/onboarding")}}const o=new i;class s{constructor(t){this.dto=t}static async onboarding(){return o.onboarding()}static async list(t){return(await o.list(t)).map(n=>new s(n))}static async create(t,e){const n=await o.create({organizationId:t,email:e});return new s(n)}static async get(t,e){const n=await o.get(t,e);return new s(n)}static async delete(t,e){return o.delete({organizationId:t,authorId:e})}get email(){return this.dto.email}get name(){return this.dto.name}get role(){return this.dto.role}get id(){return this.dto.authorId}get authorId(){return this.dto.authorId}}export{s as M};
//# sourceMappingURL=member.d57f7a66.js.map
