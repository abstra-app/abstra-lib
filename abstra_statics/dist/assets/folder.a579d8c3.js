import{C as r}from"./gateway.dbb3c871.js";import"./index.3be38143.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[e]="b8553ee4-03b8-4d9d-9dab-39dc5e173388",d._sentryDebugIdIdentifier="sentry-dbid-b8553ee4-03b8-4d9d-9dab-39dc5e173388")}catch{}})();class s{async list(e){return r.get(`organizations/${e}/folders`)}async create(e){return r.post(`organizations/${e.organizationId}/folders`,{name:e.name,memberIds:e.memberIds})}async delete(e,n){return r.delete(`organizations/${e}/folders/${n}`)}async update(e,n){return r.patch(`organizations/${e}/folders/${n.id}/`,{name:n.name,memberIds:n.memberIds})}}export{s as F};
//# sourceMappingURL=folder.a579d8c3.js.map
