import{C as a}from"./gateway.aa3a463c.js";import"./index.7c49643a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="5a6ddb5d-e077-479b-8a47-ff0e66e7a50e",t._sentryDebugIdIdentifier="sentry-dbid-5a6ddb5d-e077-479b-8a47-ff0e66e7a50e")}catch{}})();class i{async create(e){return a.post(`organizations/${e.organizationId}/members`,{email:e.email,teams:e.teams})}async delete(e){return a.delete(`organizations/${e.organizationId}/members/${e.authorId}`)}async list(e){return a.get(`organizations/${e}/members`)}async get(e,n){return a.get(`organizations/${e}/members/${n}`)}async update(e,n,r){return a.patch(`organizations/${e}/members/${n}`,r)}}export{i as M};
//# sourceMappingURL=member.1daa60c2.js.map
