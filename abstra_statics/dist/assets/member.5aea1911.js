import{C as t}from"./gateway.08783a74.js";import"./index.1e25aa14.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="6a4cc5c2-4950-4a7a-a648-4609f44f11a9",a._sentryDebugIdIdentifier="sentry-dbid-6a4cc5c2-4950-4a7a-a648-4609f44f11a9")}catch{}})();class i{async create(e){return t.post(`organizations/${e.organizationId}/members`,{email:e.email,teams:e.teams})}async delete(e){return t.delete(`organizations/${e.organizationId}/members/${e.authorId}`)}async list(e){return t.get(`organizations/${e}/members`)}async get(e,n){return t.get(`organizations/${e}/members/${n}`)}async update(e,n,r){return t.patch(`organizations/${e}/members/${n}`,r)}}export{i as M};
//# sourceMappingURL=member.5aea1911.js.map
