import{C as t}from"./gateway.c8bc89d0.js";import"./index.4b0f7fd1.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="9879141e-4e97-4178-a13a-e023e49e1176",n._sentryDebugIdIdentifier="sentry-dbid-9879141e-4e97-4178-a13a-e023e49e1176")}catch{}})();class i{async create(e){return t.post(`organizations/${e.organizationId}/members`,{email:e.email,teams:e.teams})}async delete(e){return t.delete(`organizations/${e.organizationId}/members/${e.authorId}`)}async list(e){return t.get(`organizations/${e}/members`)}async get(e,a){return t.get(`organizations/${e}/members/${a}`)}async update(e,a,r){return t.patch(`organizations/${e}/members/${a}`,r)}async fetchTeamOptions(e){return t.get(`organizations/${e}/teams`)}}export{i as M};
//# sourceMappingURL=member.665156b3.js.map
