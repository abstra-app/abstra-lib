import{C as t}from"./gateway.347a562b.js";import"./index.89aec283.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="f21b28e3-f3b1-4515-8b76-ece8c5821e0b",n._sentryDebugIdIdentifier="sentry-dbid-f21b28e3-f3b1-4515-8b76-ece8c5821e0b")}catch{}})();class i{async create(e){return t.post(`organizations/${e.organizationId}/members`,{email:e.email,teams:e.teams})}async delete(e){return t.delete(`organizations/${e.organizationId}/members/${e.authorId}`)}async list(e){return t.get(`organizations/${e}/members`)}async get(e,r){return t.get(`organizations/${e}/members/${r}`)}async update(e,r,a){return t.patch(`organizations/${e}/members/${r}`,a)}async fetchTeamOptions(e){return t.get(`organizations/${e}/teams`)}}export{i as M};
//# sourceMappingURL=member.540a376f.js.map
