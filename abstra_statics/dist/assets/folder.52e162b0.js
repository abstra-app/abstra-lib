import{C as d}from"./gateway.d2c4fcf7.js";import"./index.cadf41ce.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="cc98da7d-f1af-4e13-96b0-f419c65d672e",r._sentryDebugIdIdentifier="sentry-dbid-cc98da7d-f1af-4e13-96b0-f419c65d672e")}catch{}})();class s{async list(e){return d.get(`organizations/${e}/folders`)}async create(e){return d.post(`organizations/${e.organizationId}/folders`,{name:e.name,memberIds:e.memberIds})}async delete(e,n){return d.delete(`organizations/${e}/folders/${n}`)}async update(e,n){return d.patch(`organizations/${e}/folders/${n.id}/`,{name:n.name,memberIds:n.memberIds})}}export{s as F};
//# sourceMappingURL=folder.52e162b0.js.map
