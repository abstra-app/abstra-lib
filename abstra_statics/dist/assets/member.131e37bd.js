import{C as n}from"./gateway.caee9a6c.js";import"./index.99be3a69.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="1f445ce1-5431-4948-bd10-dd7afab3c131",t._sentryDebugIdIdentifier="sentry-dbid-1f445ce1-5431-4948-bd10-dd7afab3c131")}catch{}})();class i{async create(e){return n.post(`organizations/${e.organizationId}/members`,{email:e.email,teams:e.teams})}async delete(e){return n.delete(`organizations/${e.organizationId}/members/${e.authorId}`)}async list(e){return n.get(`organizations/${e}/members`)}async get(e,r){return n.get(`organizations/${e}/members/${r}`)}async update(e,r,a){return n.patch(`organizations/${e}/members/${r}`,a)}}export{i as M};
//# sourceMappingURL=member.131e37bd.js.map
