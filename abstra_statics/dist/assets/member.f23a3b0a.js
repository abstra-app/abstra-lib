import{C as n}from"./gateway.3cf393b2.js";import"./index.d87350ae.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="1ab97850-70cb-46cd-8f86-9969ce697775",t._sentryDebugIdIdentifier="sentry-dbid-1ab97850-70cb-46cd-8f86-9969ce697775")}catch{}})();class i{async create(e){return n.post(`organizations/${e.organizationId}/members`,{email:e.email,teams:e.teams})}async delete(e){return n.delete(`organizations/${e.organizationId}/members/${e.authorId}`)}async list(e){return n.get(`organizations/${e}/members`)}async get(e,r){return n.get(`organizations/${e}/members/${r}`)}async update(e,r,a){return n.patch(`organizations/${e}/members/${r}`,a)}}export{i as M};
//# sourceMappingURL=member.f23a3b0a.js.map
