import{C as r}from"./gateway.ffda3435.js";import"./outputWidgets.ddb799f6.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="b6be8eb0-47a1-44f3-aac8-beaa2cff8ab3",a._sentryDebugIdIdentifier="sentry-dbid-b6be8eb0-47a1-44f3-aac8-beaa2cff8ab3")}catch{}})();class i{async create(t){return r.post(`organizations/${t.organizationId}/members`,{email:t.email})}async delete(t){return r.delete(`organizations/${t.organizationId}/members/${t.authorId}`)}async list(t){return r.get(`organizations/${t}/members`)}async get(t,e){return r.get(`organizations/${t}/members/${e}`)}async login(){return r.post("authors",{})}}const s=new i;class o{constructor(t){this.dto=t}static async login(){return s.login()}static async list(t){return(await s.list(t)).map(n=>new o(n))}static async create(t,e){const n=await s.create({organizationId:t,email:e});return new o(n)}static async get(t,e){const n=await s.get(t,e);return new o(n)}static async delete(t,e){return s.delete({organizationId:t,authorId:e})}get email(){return this.dto.email}get name(){return this.dto.name}get role(){return this.dto.role}get id(){return this.dto.authorId}get authorId(){return this.dto.authorId}}export{o as M};
//# sourceMappingURL=member.02f2a11f.js.map
