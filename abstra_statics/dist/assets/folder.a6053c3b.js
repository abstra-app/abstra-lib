import{C as r}from"./gateway.eb4cb9f4.js";import"./index.97539a6c.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[e]="e3d6def5-a8d6-483c-ab44-bf11f1cdbf28",d._sentryDebugIdIdentifier="sentry-dbid-e3d6def5-a8d6-483c-ab44-bf11f1cdbf28")}catch{}})();class s{async list(e){return r.get(`organizations/${e}/folders`)}async create(e){return r.post(`organizations/${e.organizationId}/folders`,{name:e.name,memberIds:e.memberIds})}async delete(e,n){return r.delete(`organizations/${e}/folders/${n}`)}async update(e,n){return r.patch(`organizations/${e}/folders/${n.id}/`,{name:n.name,memberIds:n.memberIds})}}export{s as F};
//# sourceMappingURL=folder.a6053c3b.js.map
