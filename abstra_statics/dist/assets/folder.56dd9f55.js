import{C as a}from"./gateway.3cf393b2.js";import"./index.d87350ae.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="a79e2776-48e2-4d6c-86b2-a50bf9a7ee25",r._sentryDebugIdIdentifier="sentry-dbid-a79e2776-48e2-4d6c-86b2-a50bf9a7ee25")}catch{}})();class d{async list(e){return a.get(`organizations/${e}/folders`)}async create(e){return a.post(`organizations/${e.organizationId}/folders`,{name:e.name,memberIds:e.memberIds})}async delete(e,n){return a.delete(`organizations/${e}/folders/${n}`)}async update(e,n){return a.patch(`organizations/${e}/folders/${n.id}/`,{name:n.name,memberIds:n.memberIds})}}export{d as F};
//# sourceMappingURL=folder.56dd9f55.js.map
